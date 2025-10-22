"use client"

import React, { useEffect } from 'react'
import { AppSidebar } from '@/components/ui/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { ProfileForm } from '@/components/myForm'
import { Monda } from 'next/font/google'
import { cn } from '@/lib/utils'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from 'react'
import { OrgId } from '@/app/(auth)/orgId'
import { useUser } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'

gsap.registerPlugin(useGSAP)

const monda = Monda({
  subsets: ['latin'],
  variable: '--font-monda'
})

function LoginPage() {

  const titleRef = useRef(null)

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2.5
    })
  })

  const user = useUser()
  console.log("Here is the user", user)



  return (
    <>
      <div className='w-full h-full flex justify-center items-center flex-col gap-15'>
        <h1 ref={titleRef} className={cn(monda.className, 'text-5xl')}>Pulse</h1>
        <ProfileForm />
        <SignOutButton redirectUrl='/sign-in'>
          <button>
            Log Out
          </button>
        </SignOutButton>
      </div>
    </>
  )
}

export default LoginPage
