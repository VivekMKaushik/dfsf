import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUpIcon,
  TrendingDownIcon,
  UsersIcon,
  DollarSignIcon,
  ActivityIcon,
  ShoppingCartIcon,
} from "lucide-react"

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSignIcon,
    description: "from last month",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+15.2%",
    trend: "up",
    icon: UsersIcon,
    description: "from last month",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-4.1%",
    trend: "down",
    icon: ActivityIcon,
    description: "from last month",
  },
  {
    title: "Total Orders",
    value: "12,234",
    change: "+8.4%",
    trend: "up",
    icon: ShoppingCartIcon,
    description: "from last month",
  },
]

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center gap-2 pt-1">
              <Badge
                variant={metric.trend === "up" ? "secondary" : "destructive"}
                className="gap-1 px-1.5 py-0.5 text-xs"
              >
                {metric.trend === "up" ? (
                  <TrendingUpIcon className="size-3" />
                ) : (
                  <TrendingDownIcon className="size-3" />
                )}
                {metric.change}
              </Badge>
              <CardDescription className="text-xs">
                {metric.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
