import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { Contact } from "../data/schema";

export const columns: ColumnDef<Contact>[] = [
  {
    id: "select",
    header: "S/N",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">
        {row.index + 1}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    accessorKey: "id",
  },

  {
    accessorKey: "contact",
    header: "Contact Name",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">
        {row.original.contact}
      </div>
    )
  },

  {
    accessorKey: "number",
    header: "Phone Number",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">
        {row.original.number}
      </div>
    )
  },
  {
    accessorKey: "created_at",
    header: "Date Created At",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">
        {`${formatDate(row.original.created_at)}`}
      </div>
    )
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">
        {`${formatDate(row.original.updated_at)}`}
      </div>
    ),
  },
];
