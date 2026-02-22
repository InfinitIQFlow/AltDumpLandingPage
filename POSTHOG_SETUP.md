# PostHog Setup Guide

PostHog has been integrated into your AltDump landing page. Follow these steps to get started:

## 1. Environment Variables

Add your PostHog credentials to `.env.local`:

```bash
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Get these values from your [PostHog Dashboard](https://app.posthog.com).

## 2. Client-Side Usage

PostHog is automatically initialized in your app via the `PostHogProviderWrapper` in `layout.tsx`.

Track custom events in any client component:

```tsx
'use client'

import posthog from 'posthog-js'

export default function CheckoutPage() {
  function handlePurchase() {
    posthog.capture('purchase_completed', { amount: 99 })
  }

  return <button onClick={handlePurchase}>Complete purchase</button>
}
```

## 3. Server-Side Usage

Track events from API routes or server actions using the helper function:

### In API Routes

```tsx
import { captureServerEvent } from '@/lib/posthog'

export async function POST(request: Request) {
  const { userId, eventData } = await request.json()
  
  await captureServerEvent(userId, 'api_event', { ...eventData })
  
  return Response.json({ success: true })
}
```

### In Server Actions

```tsx
'use server'

import { trackServerAction } from '@/app/actions/posthog'

export default function MyComponent() {
  async function handleAction() {
    await trackServerAction('user_id', 'server_action_completed', { 
      action_type: 'submit_form' 
    })
  }

  return <button onClick={handleAction}>Submit</button>
}
```

## 4. Automatic Tracking

PostHog automatically tracks:
- Page views
- Click events
- Custom element interactions
- Session recordings (if enabled in dashboard)

## 5. Files Created

- `instrumentation-client.ts` - Client-side initialization
- `app/providers.tsx` - PostHog provider wrapper
- `lib/posthog.ts` - Server-side utilities
- `app/api/events/route.ts` - Example API route for events
- `app/actions/posthog.ts` - Example server action
- `.env.local.example` - Environment variables template

## 6. Next Steps

1. Copy `.env.local.example` to `.env.local` and add your PostHog credentials
2. Restart your dev server
3. Visit your app and interact with it
4. Check your PostHog dashboard to see events coming in
5. Create custom events for your key user interactions (purchases, signups, etc.)

For more information, see the [PostHog Next.js Documentation](https://posthog.com/docs/libraries/next-js).
