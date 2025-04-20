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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, MoreHorizontal, Search, Filter } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from an API
const workers = [
  {
    id: "W-1001",
    name: "Ahmed Malik",
    department: "Assembly",
    shift: "Morning",
    status: "Active",
    performance: 95,
  },
  {
    id: "W-1002",
    name: "Sofia Chen",
    department: "Quality Control",
    shift: "Night",
    status: "Active",
    performance: 92,
  },
  {
    id: "W-1003",
    name: "Carlos Rodriguez",
    department: "Logistics",
    shift: "Morning",
    status: "Active",
    performance: 88,
  },
  {
    id: "W-1004",
    name: "Fatima Al-Farsi",
    department: "Assembly",
    shift: "Evening",
    status: "On Leave",
    performance: 90,
  },
  {
    id: "W-1005",
    name: "John Smith",
    department: "Maintenance",
    shift: "Morning",
    status: "Active",
    performance: 85,
  },
  {
    id: "W-1006",
    name: "Maria Garcia",
    department: "Assembly",
    shift: "Evening",
    status: "Active",
    performance: 91,
  },
  {
    id: "W-1007",
    name: "David Kim",
    department: "Quality Control",
    shift: "Morning",
    status: "Active",
    performance: 87,
  },
  {
    id: "W-1008",
    name: "Sarah Johnson",
    department: "Logistics",
    shift: "Night",
    status: "Inactive",
    performance: 78,
  },
]

export default function WorkersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  // Filter workers based on search term and filters
  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || worker.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || worker.department === departmentFilter

    return matchesSearch && matchesStatus && matchesDepartment
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workers Management</h1>
          <p className="text-muted-foreground">Add, edit, and manage worker records</p>
        </div>
        <Link href="/admin/workers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Worker
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workers</CardTitle>
          <CardDescription>A list of all workers in your factory.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search workers..."
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
                  <DropdownMenuItem onClick={() => setStatusFilter("Active")}>Active</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("On Leave")}>On Leave</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("Inactive")}>Inactive</DropdownMenuItem>

                  <DropdownMenuLabel className="mt-2">Filter by Department</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setDepartmentFilter("all")}>All Departments</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDepartmentFilter("Assembly")}>Assembly</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDepartmentFilter("Quality Control")}>
                    Quality Control
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDepartmentFilter("Logistics")}>Logistics</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDepartmentFilter("Maintenance")}>Maintenance</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-2">
              <Select defaultValue="10">
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">per page</span>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Shift</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkers.map((worker) => (
                  <TableRow key={worker.id}>
                    <TableCell className="font-medium">{worker.id}</TableCell>
                    <TableCell>{worker.name}</TableCell>
                    <TableCell>{worker.department}</TableCell>
                    <TableCell>{worker.shift}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          worker.status === "Active"
                            ? "default"
                            : worker.status === "On Leave"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {worker.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-[60px] rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${
                              worker.performance >= 90
                                ? "bg-green-500"
                                : worker.performance >= 70
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${worker.performance}%` }}
                          />
                        </div>
                        <span className="text-sm">{worker.performance}%</span>
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
                            <Link href={`/admin/workers/${worker.id}`}>View Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href={`/admin/workers/${worker.id}/edit`}>Edit Worker</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete Worker</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>{filteredWorkers.length}</strong> of{" "}
              <strong>{workers.length}</strong> workers
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

