import { Eye, Glasses, Home, Pen, Pencil } from "lucide-react"

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
import { ModeToggle } from "./theme-toggle"

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Add Tutorials",
    url: "/add-tutorial",
    icon: Pen,
  },
  {
    title: "Manage Tutorials",
    url: "/manage-tutorials",
    icon: Glasses,
  },
  {
    title: "Add Interview Questions",
    url: "/add-interview-questions",
    icon: Pencil,
  },
  {
    title: "View Interview Questions",
    url: "/view-interview-questions",
    icon: Eye,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">DSAForge | Admin</SidebarGroupLabel>
          <div className="absolute right-1">
            <ModeToggle />
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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

