import { NextRequest, NextResponse } from 'next/server';

/**
 * Webhook endpoint for Dodo Payments payment notifications
 * POST /api/webhooks/dodo
 * 
 * This endpoint receives payment status updates from Dodo Payments.
 * Configure this URL in your Dodo Payments dashboard: Developer → Webhooks
 */
export async function POST(request: NextRequest) {
  try {
    const webhookSecret = process.env.DODO_WEBHOOK_SECRET;
    
    if (!webhookSecret) {
      console.warn('DODO_WEBHOOK_SECRET is not configured. Webhook verification skipped.');
    }

    const rawBody = await request.text();
    const headers = {
      'webhook-id': request.headers.get('webhook-id') || '',
      'webhook-signature': request.headers.get('webhook-signature') || '',
      'webhook-timestamp': request.headers.get('webhook-timestamp') || '',
    };

    // TODO: Implement webhook signature verification using Standard Webhooks
    // For now, we'll just log the payload
    // In production, you should verify the signature using the webhook secret
    
    const payload = JSON.parse(rawBody);
    
    console.log('Dodo Payments webhook received:', {
      event: payload.event,
      payment_id: payload.payment_id,
      status: payload.status,
    });

    // Handle different webhook events
    switch (payload.event) {
      case 'payment.succeeded':
        // Payment was successful
        // TODO: Send license key email, update database, etc.
        console.log('Payment succeeded:', payload.payment_id);
        break;
      
      case 'payment.failed':
        // Payment failed
        console.log('Payment failed:', payload.payment_id);
        break;
      
      case 'payment.refunded':
        // Payment was refunded
        console.log('Payment refunded:', payload.payment_id);
        break;
      
      default:
        console.log('Unknown webhook event:', payload.event);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Allow GET for webhook verification (some services ping the endpoint)
export async function GET() {
  return NextResponse.json({ 
    message: 'Dodo Payments webhook endpoint is active',
    timestamp: new Date().toISOString(),
  });
}
