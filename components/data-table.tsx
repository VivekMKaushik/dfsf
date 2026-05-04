import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    team: "Design",
    deadline: "Dec 15, 2026",
  },
  {
    id: 2,
    name: "Mobile App v2.0",
    status: "Completed",
    progress: 100,
    team: "Engineering",
    deadline: "Nov 30, 2026",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    status: "In Review",
    progress: 90,
    team: "Marketing",
    deadline: "Dec 20, 2026",
  },
  {
    id: 4,
    name: "API Integration",
    status: "In Progress",
    progress: 45,
    team: "Backend",
    deadline: "Jan 10, 2027",
  },
  {
    id: 5,
    name: "Security Audit",
    status: "Pending",
    progress: 10,
    team: "Security",
    deadline: "Feb 1, 2027",
  },
]

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed":
      return "default"
    case "In Progress":
      return "secondary"
    case "In Review":
      return "outline"
    default:
      return "secondary"
  }
}

export function DataTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Status</CardTitle>
        <CardDescription>Track progress across all active projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Deadline</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(project.status)}>
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="h-2 w-20" />
                    <span className="text-sm text-muted-foreground">
                      {project.progress}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>{project.team}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {project.deadline}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
