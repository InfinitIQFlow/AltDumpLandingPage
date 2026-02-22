import { PostHog } from 'posthog-node'

export function createPostHogClient() {
  const posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })

  return posthog
}

export async function captureServerEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, any>
) {
  const posthog = createPostHogClient()
  
  posthog.capture({
    distinctId,
    event,
    properties,
  })

  await posthog.shutdown()
}
