'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

// Ordre des routes pour déterminer la direction
const ROUTE_ORDER = ['/', '/about', '/contact']

function getDirection(from: string, to: string): 'left' | 'right' {
    const fromIndex = ROUTE_ORDER.indexOf(from)
    const toIndex = ROUTE_ORDER.indexOf(to)
    return toIndex > fromIndex ? 'left' : 'right'
}

export function NavigationProvider({ children }) {
    const router = useRouter()
    const pathname = usePathname()
    const prevPathname = useRef(pathname)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as Element).closest('a')
            if (!anchor) return

            const href = anchor.getAttribute('href')
            if (!href || href.startsWith('http') || href.startsWith('#')) return

            e.preventDefault()

            const direction = getDirection(prevPathname.current, href)
            document.documentElement.dataset.transitionDirection = direction
            prevPathname.current = href

            if ('startViewTransition' in document) {
                (document as any).startViewTransition(() => {
                    router.push(href)
                })
            } else {
                router.push(href)
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [router])

    return <>{children}</>
}