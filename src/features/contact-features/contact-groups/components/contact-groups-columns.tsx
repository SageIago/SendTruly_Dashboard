import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { ContactGroupSchema } from "../data/schema";
import AddGroupContactsDialog from "./add-contact-to-group";
import ViewContactGroupDialog from "./view-contact-group";
import DeleteContactDialog from "./delete-contact-group";

export const columns: ColumnDef<ContactGroupSchema>[] = [
  {
    id: "select",
    header: "S/N",
    cell: ({ row }) => (
      <div className="text-[16px] leading-[20px]">{row.index + 1}</div>
    ),
    enableSorting: false,
    enableHiding: false,
    accessorKey: "id",
  },
  {
    accessorKey: "list_name",
    header: "Group Name",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <h2 className="text-primary-900  text-[16px] leading-[20px]">
          {row.original.list_name}
        </h2>
        <Badge className="text-primary-100 bg-purple-500 px-2 text-center hover:bg-purple-500 cursor-pointer">
          {row.original.total_numbers} Contacts
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <AddGroupContactsDialog
          list_name={row.original.list_name}
          list_token={row.original.list_token}
        />

        <ViewContactGroupDialog
          list_name={row.original.list_name}
          list_token={row.original.list_token}
          totalNumbers={row.original.total_numbers}
          dateCreated={row.original.date_created}
        />

        <DeleteContactDialog
          destructive={true}
          list_name={row.original.list_name}
          list_token={row.original.list_token}
          total_numbers={row.original.total_numbers}
        />
      </div>
    ),
  },
];
