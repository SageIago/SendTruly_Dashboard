import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { ScheduledSchema } from "./schema/index";

export const columns: ColumnDef<ScheduledSchema>[] = [
  {
    id: "select",
    header: "S/N",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">{row.index + 1}</div>
    ),
    enableSorting: false,
    enableHiding: false,
    accessorKey: "id",
  },

  {
    accessorKey: "sender",
    header: "Sender",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">{row.original.sender}</div>
    ),
  },

  {
    accessorKey: "delivery_date",
    header: "Phone Number",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">
        {`${formatDate(row.original.delivery_date)}`}
      </div>
    ),
  },
  {
    accessorKey: "volume",
    header: "Volume",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">{row.original.volume}</div>
    ),
  },
  {
    accessorKey: "cost",
    header: "Updated At",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900">{row.original.cost}</div>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="text-[16px] text-primary-900 flex gap-2">{row.original.cost}</div>
    ),
  },
];
