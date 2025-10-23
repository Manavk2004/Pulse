"use client"

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SignOutButton } from "@clerk/nextjs"
import { Inter } from "next/font/google"


gsap.registerPlugin(useGSAP)


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export function AppSidebar() {


  const [ selected, setSelected ] = useState<string>("")
  const pathname = usePathname()



  return (
    <Sidebar>
      <SidebarContent className="gap-5">
        <SidebarGroup className="flex flex-col h-full justify-between">
          <SidebarGroupContent>
            <SidebarGroupLabel className={cn("text-xl mb-10", inter.className)}>Welcome</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem onClick={() => setSelected(item.title)} key={item.title} className={
                  cn("mb-7  rounded-sm", 
                    selected === item.title ? " bg-[#6c47ff]/70" : null, selected === item.title ? "border-[#6c47ff]" : null, pathname === "/login" ? "bg-gray-500/20" : null,
                  )}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {pathname === "/login" ? null : <item.icon /> }
                      <span>{pathname === "/login" ? "" : item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <div>
            <SignOutButton redirectUrl='/sign-in'>
                <button className={cn("bg-gray-500/20 rounded-3xl p-3.5 w-full mb-10 cursor-pointer border-2 border-gray-500 hover:border-[#6c47ff]/70 hover:text-[#6c47ff] hover:bg-gray-500/30" , inter.className)}>
                  Log Out
                </button>
            </SignOutButton>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}