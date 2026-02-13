import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/dodo-payments';

/**
 * API route to create a Dodo Payments checkout session
 * POST /api/checkout
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    
    const { product_id, quantity, customer_email, customer_name } = body;

    const session = await createCheckoutSession({
      product_id,
      quantity: quantity || 1,
      customer_email,
      customer_name,
    });

    return NextResponse.json({
      success: true,
      checkout_url: session.checkout_url,
      session_id: session.session_id,
    });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create checkout session',
      },
      { status: 500 }
    );
  }
}
