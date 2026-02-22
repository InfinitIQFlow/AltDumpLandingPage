import { captureServerEvent } from '@/lib/posthog'

export async function POST(request: Request) {
  const body = await request.json()
  const { userId, eventName, properties } = body

  // Capture the event on the server
  await captureServerEvent(userId || 'anonymous', eventName, properties)

  return Response.json({ success: true })
}
