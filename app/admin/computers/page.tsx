"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, MoreHorizontal, Search, Filter } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from an API
const computers = [
  {
    id: "PC-1001",
    location: "Assembly Line A",
    status: "Online",
    lastMaintenance: "2023-03-15",
    cpuUsage: 65,
    memoryUsage: 72,
  },
  {
    id: "PC-1002",
    location: "Quality Control",
    status: "Online",
    lastMaintenance: "2023-03-10",
    cpuUsage: 45,
    memoryUsage: 58,
  },
  {
    id: "PC-1003",
    location: "Logistics Office",
    status: "Offline",
    lastMaintenance: "2023-02-28",
    cpuUsage: 0,
    memoryUsage: 0,
  },
  {
    id: "PC-1004",
    location: "Assembly Line B",
    status: "Online",
    lastMaintenance: "2023-03-12",
    cpuUsage: 78,
    memoryUsage: 85,
  },
  {
    id: "PC-1005",
    location: "Manager's Office",
    status: "Online",
    lastMaintenance: "2023-03-05",
    cpuUsage: 32,
    memoryUsage: 45,
  },
  {
    id: "PC-1006",
    location: "Reception",
    status: "Online",
    lastMaintenance: "2023-03-20",
    cpuUsage: 25,
    memoryUsage: 40,
  },
  {
    id: "PC-1007",
    location: "Quality Control",
    status: "Maintenance",
    lastMaintenance: "2023-03-22",
    cpuUsage: 0,
    memoryUsage: 0,
  },
  {
    id: "PC-1008",
    location: "Assembly Line C",
    status: "Online",
    lastMaintenance: "2023-03-08",
    cpuUsage: 70,
    memoryUsage: 65,
  },
]

export default function ComputersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  // Filter computers based on search term and filters
  const filteredComputers = computers.filter((computer) => {
    const matchesSearch =
      computer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      computer.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || computer.status === statusFilter
    const matchesLocation = locationFilter === "all" || computer.location === locationFilter

    return matchesSearch && matchesStatus && matchesLocation
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Computers Management</h1>
          <p className="text-muted-foreground">Add, edit, and manage computer systems</p>
        </div>
        <Link href="/admin/computers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Computer
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Computers</CardTitle>
          <CardDescription>A list of all computer systems in your factory.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search computers..."
                  className="pl-8 w-[250px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Statuses</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Online")}>Online</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Offline")}>Offline</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Maintenance")}>Maintenance</DropdownMenuItem>

                  <DropdownMenuLabel className="mt-2">Filter by Location</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLocationFilter("all")}>All Locations</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocationFilter("Assembly Line A")}>
                    Assembly Line A
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocationFilter("Assembly Line B")}>
                    Assembly Line B
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocationFilter("Quality Control")}>
                    Quality Control
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocationFilter("Logistics Office")}>
                    Logistics Office
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Maintenance</TableHead>
                  <TableHead>CPU Usage</TableHead>
                  <TableHead>Memory Usage</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredComputers.map((computer) => (
                  <TableRow key={computer.id}>
                    <TableCell className="font-medium">{computer.id}</TableCell>
                    <TableCell>{computer.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          computer.status === "Online"
                            ? "default"
                            : computer.status === "Maintenance"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {computer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{computer.lastMaintenance}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-[60px] rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${
                              computer.cpuUsage < 50
                                ? "bg-green-500"
                                : computer.cpuUsage < 80
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${computer.cpuUsage}%` }}
                          />
                        </div>
                        <span className="text-sm">{computer.cpuUsage}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-[60px] rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${
                              computer.memoryUsage < 50
                                ? "bg-green-500"
                                : computer.memoryUsage < 80
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${computer.memoryUsage}%` }}
                          />
                        </div>
                        <span className="text-sm">{computer.memoryUsage}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href={`/admin/computers/${computer.id}`}>View Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href={`/admin/computers/${computer.id}/edit`}>Edit Computer</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete Computer</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

