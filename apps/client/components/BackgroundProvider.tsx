"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { SidebarTrigger, SidebarProvider } from './ui/sidebar'
import { AppSidebar } from './ui/app-sidebar'


type Props = { 
    children: React.ReactNode
}

export function BackgroundProvider({children}: Props) {

    const path = usePathname()

    return (
        path === "/login" ? (
            <SidebarProvider>
                <div className='flex w-full'>
                    <AppSidebar />
                    <main className='flex-1 p-4'>
                        {children}
                    </main>
                </div>
                <SidebarTrigger />
            </SidebarProvider>
        ) : children
    )
}

export default BackgroundProvider
