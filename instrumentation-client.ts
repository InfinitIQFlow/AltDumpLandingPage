import posthog from 'posthog-js'

export function PostHogPageview() {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: {
        $initial_referrer: document.referrer,
        $initial_referring_domain: new URL(document.referrer).hostname,
      },
    })
  }
}
