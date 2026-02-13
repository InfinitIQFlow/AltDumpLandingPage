/**
 * Dodo Payments Configuration and Utilities
 *
 * IMPORTANT: Always use https://live.dodopayments.com for production checkout.
 * The domain https://dodopayments.com (without "live.") returns 404.
 */

/** Live checkout base URL - use this for all checkout links and fallbacks */
export const DODO_CHECKOUT_BASE_URL = 'https://live.dodopayments.com'

export const DODO_CONFIG = {
  // Product ID for the $15 Early Access product
  // This should match the product ID in your Dodo Payments dashboard
  PRODUCT_ID: process.env.DODO_PRODUCT_ID || 'altdump-earlyaccess',

  // API base URL (same as live checkout)
  API_BASE_URL: process.env.DODO_API_BASE_URL || DODO_CHECKOUT_BASE_URL,

  // Return URL after payment completion
  RETURN_URL: process.env.NEXT_PUBLIC_PAYMENT_RETURN_URL || '/payment/success',
}

export interface CheckoutSessionRequest {
  product_id?: string;
  quantity?: number;
  customer_email?: string;
  customer_name?: string;
  return_url?: string;
}

export interface CheckoutSessionResponse {
  checkout_url: string;
  session_id: string;
}

/**
 * Create a checkout session via Dodo Payments API
 */
export async function createCheckoutSession(
  request: CheckoutSessionRequest
): Promise<CheckoutSessionResponse> {
  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  
  if (!apiKey) {
    throw new Error('DODO_PAYMENTS_API_KEY is not configured. Please set it in your .env file.');
  }

  const productId = request.product_id || DODO_CONFIG.PRODUCT_ID;
  const returnUrl = request.return_url || 
    `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${DODO_CONFIG.RETURN_URL}`;

  const response = await fetch(`${DODO_CONFIG.API_BASE_URL}/checkouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      product_cart: [
        {
          product_id: productId,
          quantity: request.quantity || 1,
        }
      ],
      customer: request.customer_email || request.customer_name ? {
        ...(request.customer_email && { email: request.customer_email }),
        ...(request.customer_name && { name: request.customer_name }),
      } : undefined,
      return_url: returnUrl,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(`Failed to create checkout session: ${errorData.message || response.statusText}`);
  }

  const data = await response.json();
  
  return {
    checkout_url: data.checkout_url,
    session_id: data.session_id || data.id,
  };
}
