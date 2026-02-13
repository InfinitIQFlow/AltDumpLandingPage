# Alt Dump Landing Page

Landing page for Alt Dump - A fully offline AI-powered memory vault for Windows.

## Dodo Payments Integration

This project uses Dodo Payments for processing payments. Follow these steps to set up the payment integration:

### 1. Get Your Dodo Payments Credentials

1. Sign up for a Dodo Payments account at [https://app.dodopayments.com/](https://app.dodopayments.com/)
2. Create a product in your dashboard:
   - Go to Products → Create Product
   - Set the price to $15
   - Note down the Product ID (format: `prod_xxxxx`)
3. Generate your API key:
   - Go to Developer → API
   - Copy your API key
4. (Optional) Set up webhooks:
   - Go to Developer → Webhooks
   - Create a webhook URL pointing to your site: `https://yourdomain.com/api/webhooks/dodo`
   - Copy the webhook secret key

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials in `.env.local`:
   ```env
   DODO_PAYMENTS_API_KEY=your_api_key_here
   DODO_PRODUCT_ID=prod_xxxxx
   DODO_WEBHOOK_SECRET=your_webhook_secret_here
   NEXT_PUBLIC_PAYMENT_RETURN_URL=http://localhost:3000/payment/success
   DODO_API_BASE_URL=https://live.dodopayments.com
   ```

### 3. Important Notes

- **API key required**: Checkout does **not** work with a direct link. You must set `DODO_PAYMENTS_API_KEY` in `.env.local`. Without it, the API cannot create a session and the direct URL returns 401 Unauthorized.
- **Product ID**: Make sure the `DODO_PRODUCT_ID` matches the product ID from your Dodo Payments dashboard (e.g. `prod_xxxxx`).
- **API Base URL**: 
  - Use `https://live.dodopayments.com` for production
  - Use `https://test.dodopayments.com` for testing
- **Return URL**: Update `NEXT_PUBLIC_PAYMENT_RETURN_URL` to your production domain when deploying

### 4. How It Works

The integration uses Dodo Payments Checkout Sessions:

1. When a user clicks "Buy Now", the frontend calls `/api/checkout`
2. The API route creates a checkout session using your API key
3. The user is redirected to Dodo Payments hosted checkout
4. After payment, they're redirected back to `/payment/success`

### 5. Testing

- Use test mode API keys for development
- Test payments won't charge real money
- Check the Dodo Payments dashboard for test payment records

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment

Make sure to set all environment variables in your hosting platform (Vercel, Netlify, etc.) before deploying.
