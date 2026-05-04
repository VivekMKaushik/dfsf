"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  { date: "Mon", visitors: 1200, pageViews: 3400 },
  { date: "Tue", visitors: 1800, pageViews: 4200 },
  { date: "Wed", visitors: 2100, pageViews: 5100 },
  { date: "Thu", visitors: 1600, pageViews: 3800 },
  { date: "Fri", visitors: 2400, pageViews: 5600 },
  { date: "Sat", visitors: 1100, pageViews: 2800 },
  { date: "Sun", visitors: 900, pageViews: 2200 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--color-chart-4)",
  },
  pageViews: {
    label: "Page Views",
    color: "var(--color-chart-5)",
  },
} satisfies ChartConfig

export function AnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Traffic</CardTitle>
        <CardDescription>Daily visitors and page views this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              type="monotone"
              dataKey="pageViews"
              fill="var(--color-pageViews)"
              fillOpacity={0.2}
              stroke="var(--color-pageViews)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="visitors"
              fill="var(--color-visitors)"
              fillOpacity={0.2}
              stroke="var(--color-visitors)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
