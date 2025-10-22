"use client"
import React, { useEffect } from 'react'
import LoginPage from './login/page'
import { usePathname } from "next/navigation"

const screens: Record<string, React.ReactNode> = {
  "/login": <LoginPage />
}

function ScreenView() {
  const pathname = usePathname()
  useEffect(() => {
    console.log("Here is the pathname", pathname)
  }, [pathname])

  return (
    <>
      {screens[pathname] || <div>404 - Page not found</div>}
    </>
  )
}

export default ScreenView
