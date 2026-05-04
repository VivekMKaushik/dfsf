"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", revenue: 18600, expenses: 8000 },
  { month: "Feb", revenue: 30500, expenses: 12000 },
  { month: "Mar", revenue: 23700, expenses: 9500 },
  { month: "Apr", revenue: 27300, expenses: 11000 },
  { month: "May", revenue: 20900, expenses: 8500 },
  { month: "Jun", revenue: 21400, expenses: 9000 },
  { month: "Jul", revenue: 35000, expenses: 14000 },
  { month: "Aug", revenue: 37000, expenses: 15000 },
  { month: "Sep", revenue: 32000, expenses: 13000 },
  { month: "Oct", revenue: 36500, expenses: 14500 },
  { month: "Nov", revenue: 41000, expenses: 16000 },
  { month: "Dec", revenue: 45200, expenses: 18000 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--color-chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--color-chart-2)",
  },
} satisfies ChartConfig

export function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Monthly revenue and expenses for the current year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="revenue"
              fill="var(--color-revenue)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
