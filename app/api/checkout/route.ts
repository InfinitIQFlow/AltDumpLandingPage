import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/dodo-payments';

/**
 * Create Dodo Payments checkout session (same pattern as other project).
 * POST /api/checkout
 * Body: { product_id?, quantity?, customer_email?, customer_name?, return_url? }
 * Returns: { success, checkout_url?, session_id? } or { success: false, error }
 */
export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { success: false, error: `Method not allowed. Expected POST.` },
      { status: 405 }
    );
  }

  if (!process.env.DODO_PAYMENTS_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Missing DODO_PAYMENTS_API_KEY' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { product_id, quantity, customer_email, customer_name, return_url } = body;

    const session = await createCheckoutSession({
      product_id,
      quantity: quantity ?? 1,
      customer_email,
      customer_name,
      return_url,
      metadata: { source: 'landing_page' },
    });

    return NextResponse.json({
      success: true,
      checkout_url: session.checkout_url,
      session_id: session.session_id,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    console.error('Checkout session creation error:', error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
