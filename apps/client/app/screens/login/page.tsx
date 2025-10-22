import React from 'react'
import { AppSidebar } from '@/components/ui/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { ProfileForm } from '@/components/myForm'
import { Monda } from 'next/font/google'
import { cn } from '@/lib/utils'

const monda = Monda({
  subsets: ['latin'],
  variable: '--font-monda'
})

function LoginPage() {


  return (
    <>
      <div className='w-full h-full flex justify-center items-center flex-col gap-15'>
        <h1 className={cn(monda.className, 'text-5xl')}>Pulse</h1>
        <ProfileForm />
      </div>
    </>
  )
}

export default LoginPage
