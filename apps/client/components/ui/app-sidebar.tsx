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

export function AppSidebar() {


  const [ selected, setSelected ] = useState<string>("")
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mb-10">Welcome</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem onClick={() => setSelected(item.title)} key={item.title} className={
                  cn("mb-7  rounded-sm", 
                    selected === item.title ? " bg-[#6c47ff]/70" : null, selected === item.title ? "border-[#6c47ff]" : null, pathname === "/login" ? "bg-gray-500/20" : null
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
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}