import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsCards } from "@/components/metrics-cards"
import { OverviewChart } from "@/components/overview-chart"
import { RecentActivity } from "@/components/recent-activity"
import { AnalyticsChart } from "@/components/analytics-chart"
import { DataTable } from "@/components/data-table"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-6 p-6">
          <MetricsCards />
          <div className="grid gap-6 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <OverviewChart />
            </div>
            <div className="lg:col-span-3">
              <RecentActivity />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <AnalyticsChart />
            <DataTable />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
