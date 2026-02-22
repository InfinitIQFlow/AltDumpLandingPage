'use server'

import { captureServerEvent } from '@/lib/posthog'

export async function trackServerAction(
  distinctId: string,
  event: string,
  properties?: Record<string, any>
) {
  await captureServerEvent(distinctId, event, properties)
}
