import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import * as React from "react";

import { getColumns } from "@/components/members/members-columns";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { useDataTable } from "@/hooks/use-data-table";
import { mockMembers } from "@/data/members";

export default function Members() {
  const [name] = useQueryState("name", parseAsString.withDefault(""));
  const [department] = useQueryState(
    "department",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [status] = useQueryState(
    "status",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const filteredData = React.useMemo(() => {
    return mockMembers.filter((member) => {
      const matchesName =
        name === "" ||
        member.name.toLowerCase().includes(name.toLowerCase()) ||
        member.email.toLowerCase().includes(name.toLowerCase());
      const matchesDepartment =
        department.length === 0 || department.includes(member.department);
      const matchesStatus =
        status.length === 0 || status.includes(member.status);

      return matchesName && matchesDepartment && matchesStatus;
    });
  }, [name, department, status]);

  const columns = React.useMemo(() => getColumns(), []);

  const { table } = useDataTable({
    data: filteredData,
    columns,
    pageCount: Math.ceil(filteredData.length / 10),
    getRowId: (row) => row.id,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Team Members
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A list of all team members including their name, role, and status.
        </p>
      </div>

      <DataTable table={table}>
        <DataTableToolbar table={table} />
      </DataTable>
    </div>
  );
}
