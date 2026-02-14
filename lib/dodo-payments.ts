/**
 * Dodo Payments Configuration and Utilities
 *
 * Matches the pattern from our other project: POST to {base}/checkouts with
 * product_cart, customer, return_url. Base URL must be live or test (no trailing slash).
 * IMPORTANT: Use https://live.dodopayments.com for production (NOT https://dodopayments.com).
 */

/** Default live API base (no trailing slash). Test: https://test.dodopayments.com */
const DEFAULT_DODO_BASE = 'https://live.dodopayments.com';

export const DODO_CONFIG = {
  /** Product ID for the $12 Early Access product (from Dodo dashboard) */
  PRODUCT_ID: process.env.DODO_PRODUCT_ID || 'altdump-earlyaccess',
  /** Success path after payment */
  SUCCESS_PATH: '/payment/success',
};

export interface CheckoutSessionRequest {
  product_id?: string;
  quantity?: number;
  customer_email?: string;
  customer_name?: string;
  return_url?: string;
  /** Optional metadata passed to Dodo (e.g. for webhooks) */
  metadata?: Record<string, string>;
}

export interface CheckoutSessionResponse {
  checkout_url: string;
  session_id: string;
}

function getDodoBaseUrl(): string {
  const url = process.env.DODO_PAYMENTS_API_BASE_URL || process.env.DODO_API_BASE_URL || DEFAULT_DODO_BASE;
  return url.replace(/\/$/, '');
}

function getReturnUrl(requestReturnUrl?: string): string {
  if (requestReturnUrl && /^https?:\/\//i.test(requestReturnUrl)) {
    return requestReturnUrl;
  }
  const base = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const path = process.env.NEXT_PUBLIC_PAYMENT_RETURN_URL || DODO_CONFIG.SUCCESS_PATH;
  const full = path.startsWith('http') ? path : `${base.replace(/\/$/, '')}${path.startsWith('/') ? path : '/' + path}`;
  return full;
}

/**
 * Create a checkout session via Dodo Payments API.
 * POST {base}/checkouts with product_cart, customer, return_url (and optional metadata).
 */
export async function createCheckoutSession(
  request: CheckoutSessionRequest
): Promise<CheckoutSessionResponse> {
  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  if (!apiKey) {
    throw new Error('DODO_PAYMENTS_API_KEY is not configured. Please set it in your .env file.');
  }

  const dodoBaseUrl = getDodoBaseUrl();
  const dodoEndpoint = `${dodoBaseUrl}/checkouts`;
  const productId = request.product_id || DODO_CONFIG.PRODUCT_ID;
  const returnUrl = getReturnUrl(request.return_url);
  const quantity = request.quantity ?? 1;

  const requestBody = {
    product_cart: [{ product_id: productId, quantity }],
    customer:
      request.customer_email || request.customer_name
        ? {
            ...(request.customer_email && { email: request.customer_email }),
            ...(request.customer_name && { name: request.customer_name }),
          }
        : undefined,
    return_url: returnUrl,
    ...(request.metadata && Object.keys(request.metadata).length > 0 && { metadata: request.metadata }),
  };

  if (process.env.NODE_ENV !== 'production') {
    console.log('Dodo checkout request', {
      url: dodoEndpoint,
      baseUrl: dodoBaseUrl,
      productId,
      hasApiKey: !!apiKey,
    });
  }

  const response = await fetch(dodoEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let message = errorText;
    try {
      const parsed = JSON.parse(errorText) as { message?: string; error?: string; detail?: string };
      message = parsed.message || parsed.error || parsed.detail || errorText;
    } catch {
      // non-JSON body
    }

    if (response.status === 405) {
      throw new Error(
        `Dodo API returned 405 Method Not Allowed. Verify DODO_PAYMENTS_API_BASE_URL is correct. For live use: https://live.dodopayments.com (no trailing slash). Current: ${dodoEndpoint}`
      );
    }

    throw new Error(
      `Failed to create checkout session (${response.status}): ${String(message).slice(0, 300)}`
    );
  }

  const session = (await response.json()) as { checkout_url?: string; session_id?: string; id?: string };
  if (!session.checkout_url) {
    throw new Error('No checkout URL returned from Dodo');
  }

  return {
    checkout_url: session.checkout_url,
    session_id: session.session_id || session.id || '',
  };
}
