'use client'

import { useState } from 'react'

interface UseCheckoutOptions {
  product_id?: string
  quantity?: number
  customer_email?: string
  customer_name?: string
}

/**
 * Checkout must go through the API. The direct URL
 * (live.dodopayments.com/checkout?product=...) returns 401 Unauthorized —
 * a valid checkout_url is only returned when creating a session with your API key.
 */
export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createCheckout = async (options: UseCheckoutOptions = {}) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: options.product_id,
          quantity: options.quantity || 1,
          customer_email: options.customer_email,
          customer_name: options.customer_name,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.checkout_url) {
        window.location.href = data.checkout_url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
      setError(errorMessage)
      console.error('Checkout error:', err)
      // Do not redirect to direct URL — it returns 401; checkout requires API-created session.
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createCheckout,
    isLoading,
    error,
  }
}
