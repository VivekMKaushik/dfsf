import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    id: 1,
    user: {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "https://i.pravatar.cc/150?u=olivia",
      initials: "OM",
    },
    action: "completed a purchase",
    amount: "+$1,999.00",
    time: "2 min ago",
  },
  {
    id: 2,
    user: {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "https://i.pravatar.cc/150?u=jackson",
      initials: "JL",
    },
    action: "signed up for Pro plan",
    amount: "+$39.00",
    time: "5 min ago",
  },
  {
    id: 3,
    user: {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "https://i.pravatar.cc/150?u=isabella",
      initials: "IN",
    },
    action: "requested a refund",
    amount: "-$299.00",
    time: "15 min ago",
  },
  {
    id: 4,
    user: {
      name: "William Kim",
      email: "will@email.com",
      avatar: "https://i.pravatar.cc/150?u=william",
      initials: "WK",
    },
    action: "upgraded to Enterprise",
    amount: "+$499.00",
    time: "1 hour ago",
  },
  {
    id: 5,
    user: {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: "https://i.pravatar.cc/150?u=sofia",
      initials: "SD",
    },
    action: "renewed subscription",
    amount: "+$99.00",
    time: "2 hours ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest transactions and user actions</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="flex flex-col gap-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <Avatar className="size-9">
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.user.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.action}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${
                      activity.amount.startsWith("+")
                        ? "text-emerald-500"
                        : "text-destructive"
                    }`}
                  >
                    {activity.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
