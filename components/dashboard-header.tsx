"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CalendarIcon, DownloadIcon, PlusIcon } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b px-6">
      <SidebarTrigger className="-ml-2" />
      <Separator orientation="vertical" className="h-6" />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back, John. Here is your overview.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <CalendarIcon data-icon="inline-start" />
            Last 30 days
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm">
                <PlusIcon data-icon="inline-start" />
                Create
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>New Project</DropdownMenuItem>
                <DropdownMenuItem>New Report</DropdownMenuItem>
                <DropdownMenuItem>Invite Team Member</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
