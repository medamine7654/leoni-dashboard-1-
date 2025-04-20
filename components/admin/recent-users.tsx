import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const users = [
  {
    name: "Ahmed Malik",
    email: "ahmed.malik@leoni.com",
    lastActive: "Just now",
    role: "Administrator",
    avatarFallback: "AM",
  },
  {
    name: "Sofia Chen",
    email: "sofia.chen@leoni.com",
    lastActive: "2 hours ago",
    role: "Manager",
    avatarFallback: "SC",
  },
  {
    name: "Carlos Rodriguez",
    email: "carlos.rodriguez@leoni.com",
    lastActive: "5 hours ago",
    role: "Supervisor",
    avatarFallback: "CR",
  },
  {
    name: "Fatima Al-Farsi",
    email: "fatima.alfarsi@leoni.com",
    lastActive: "Yesterday",
    role: "Manager",
    avatarFallback: "FA",
  },
]

export function RecentUsers() {
  return (
    <div className="space-y-8">
      {users.map((user, i) => (
        <div key={i} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${user.avatarFallback}`} />
            <AvatarFallback>{user.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex items-center pt-1">
              <span className="text-xs text-muted-foreground">{user.lastActive}</span>
              <span className="mx-2 text-xs text-muted-foreground">•</span>
              <span className="text-xs font-medium">{user.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

