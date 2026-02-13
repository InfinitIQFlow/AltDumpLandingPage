'use client'

import { useState } from 'react'
import { DODO_CHECKOUT_BASE_URL } from '@/lib/dodo-payments'

interface UseCheckoutOptions {
  product_id?: string
  quantity?: number
  customer_email?: string
  customer_name?: string
}

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

      // Redirect to checkout URL
      if (data.checkout_url) {
        window.location.href = data.checkout_url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
      setError(errorMessage)
      console.error('Checkout error:', err)
      
      // Fallback to direct URL if API fails (must use live subdomain)
      const fallbackUrl = `${DODO_CHECKOUT_BASE_URL}/checkout?product=${options.product_id || 'altdump-earlyaccess'}`
      console.warn('Falling back to direct checkout URL:', fallbackUrl)
      window.location.href = fallbackUrl
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
