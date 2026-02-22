"use client"

import { useEffect, useState } from "react"
import { parseISO, format } from "date-fns"

interface LocalTimeProps {
    dateString: string // Expects YYYY-MM-DD
    formatStr?: string
    className?: string
}

export function LocalTime({ dateString, formatStr = "MMMM d, yyyy", className }: LocalTimeProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timeoutId);
    }, [])

    // During SSR and first paint, render the original UTC string to avoid hydration mismatches
    if (!mounted) {
        return <span className={className}>{dateString} (UTC)</span>
    }

    // Once mounted, safely format in the user's local timezone
    let formatted = "";
    try {
        const date = parseISO(dateString)
        formatted = format(date, formatStr)
    } catch {
        return <span className={className}>{dateString}</span>
    }

    return <span className={className} suppressHydrationWarning>{formatted}</span>
}
