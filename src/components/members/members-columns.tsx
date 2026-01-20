import type { ColumnDef } from "@tanstack/react-table";
import { Briefcase, CheckCircle, CheckCircle2, Clock, MoreHorizontal, Palette, ShoppingCart, Users, XCircle, Database } from "lucide-react";
import * as React from "react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Member } from "@/data/members";
import { cn } from "@/lib/utils";

export function getColumns(): ColumnDef<Member>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      size: 32,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "name",
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} label="Name" />
      ),
      cell: ({ row }) => {
        const member = row.original;
        return (
          <div className="flex items-center gap-3">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-medium">{member.name}</span>
              <span className="text-xs text-muted-foreground">
                {member.role}
              </span>
            </div>
          </div>
        );
      },
      meta: {
        label: "Name",
        placeholder: "Filter names...",
        variant: "text",
      },
      enableColumnFilter: true,
    },
    {
      id: "email",
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} label="Email" />
      ),
      cell: ({ row }) => {
        return <span className="text-sm">{row.getValue("email")}</span>;
      },
      meta: {
        label: "Email",
        placeholder: "Filter emails...",
        variant: "text",
      },
      enableColumnFilter: true,
    },
    {
      id: "department",
      accessorKey: "department",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} label="Department" />
      ),
      cell: ({ row }) => {
        return <span className="text-sm">{row.getValue("department")}</span>;
      },
      meta: {
        label: "Department",
        variant: "multiSelect",
        options: [
          { label: "Engineering", value: "Engineering", icon: Briefcase },
          { label: "Design", value: "Design", icon: Palette },
          { label: "Product", value: "Product", icon: Briefcase },
          { label: "Marketing", value: "Marketing", icon: ShoppingCart },
          { label: "Sales", value: "Sales", icon: ShoppingCart },
          { label: "Human Resources", value: "Human Resources", icon: Users },
          { label: "Data", value: "Data", icon: Database },
        ],
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      enableColumnFilter: true,
    },
    {
      id: "status",
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} label="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const Icon = status === "active" ? CheckCircle2 : status === "inactive" ? XCircle : Clock;

        return (
          <Badge
            variant="outline"
            className={cn(
              "font-medium",
              status === "active" &&
                "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
              status === "inactive" &&
                "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800",
              status === "pending" &&
                "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800"
            )}
          >
            <Icon className="h-3 w-3" />
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      },
      meta: {
        label: "Status",
        variant: "multiSelect",
        options: [
          { label: "Active", value: "active", icon: CheckCircle },
          { label: "Inactive", value: "inactive", icon: XCircle },
          { label: "Pending", value: "pending", icon: Clock },
        ],
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      enableColumnFilter: true,
    },
    {
      accessorKey: "joinedDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} label="Joined Date" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("joinedDate"));
        return <span className="text-sm">{date.toLocaleDateString()}</span>;
      },
      sortingFn: "datetime",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const member = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => console.log("View", member.id)}>
                View details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Edit", member.id)}>
                Edit member
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => console.log("Delete", member.id)}
                className="text-destructive"
              >
                Delete member
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      size: 32,
    },
  ];
}
