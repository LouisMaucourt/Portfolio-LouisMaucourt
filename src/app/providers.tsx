'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const ROUTE_ORDER = ['/', '/about', '/contact'] as const

type Route = (typeof ROUTE_ORDER)[number]

function getTransitionType(from: string, to: string): 'nav-forward' | 'nav-back' {
    const fromIndex = ROUTE_ORDER.indexOf(from as Route)
    const toIndex = ROUTE_ORDER.indexOf(to as Route)
    return toIndex > fromIndex ? 'nav-forward' : 'nav-back'
}

function isInternalHref(href: string): boolean {
    return !href.startsWith('http') && !href.startsWith('#') && href.startsWith('/')
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const prevPathname = useRef(pathname)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as Element).closest('a')
            if (!anchor) return

            const href = anchor.getAttribute('href')
            if (!href || !isInternalHref(href)) return

            e.preventDefault()

            const transitionType = getTransitionType(prevPathname.current, href)
            prevPathname.current = href

            router.push(href, { transitionTypes: [transitionType] })
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [router])

    return <>{children}</>
}