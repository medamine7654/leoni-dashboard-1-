import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Computer, Factory, ShieldCheck, Users } from "lucide-react"
import { Overview } from "@/components/overview"
import { RecentActivity } from "@/components/recent-activity"
import { WorkerStats } from "@/components/worker-stats"
import { ComputerStats } from "@/components/computer-stats"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Factory className="h-6 w-6" />
            <span className="text-xl font-bold">LEONI AutoSys</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: Today at 09:45 AM</span>
            </div>
            {/* Add this admin link */}
            <Link href="/admin" className="flex items-center gap-1 text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Factory Overview</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workers">Workers</TabsTrigger>
            <TabsTrigger value="computers">Computers</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Workers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Workers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">218</div>
                  <p className="text-xs text-muted-foreground">89% of total workforce</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Computers</CardTitle>
                  <Computer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">182</div>
                  <p className="text-xs text-muted-foreground">+5 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Computers</CardTitle>
                  <Computer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">165</div>
                  <p className="text-xs text-muted-foreground">91% operational rate</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Productivity Overview</CardTitle>
                  <CardDescription>Factory productivity metrics for the past 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest events from the factory floor</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="workers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Worker Statistics</CardTitle>
                <CardDescription>Detailed breakdown of worker data and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <WorkerStats />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="computers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Computer Systems</CardTitle>
                <CardDescription>Status and performance of all computer systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ComputerStats />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Comprehensive activity log from all factory systems</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity fullLog={true} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

