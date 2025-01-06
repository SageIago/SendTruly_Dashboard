import { GetAllListsMutation } from "@/api/contact/get-all-lists";
import CreateContactGroupDialog from "./components/create-contact-group";
import UploadBulkContactGroupDialog from "./components/upload-bulk-contacts-dialog";
import { columns } from "./components/contact-groups-columns";
import { DataTable } from "@/components/shared/data-table";
import { BarLoader } from "react-spinners";

const ContactGroupsTab = () => {
  const { data: tableData, isPending } = GetAllListsMutation({
    staleTime: 1000,
    refetchInterval: 1000
  });

  return (
    <section className="!m-5 bg-white p-6 text-primary-900 flex flex-col gap-2 rounded-[10px] shadow-lg">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div>
          {" "}
          <h2 className="text-2xl font-bold tracking-tight">Contact Groups</h2>
          <p className="text-[14px] leading-[20px] mt-2">
            An overview of your Contact Groups
          </p>
        </div>

        <div className="flex gap-2">
          <UploadBulkContactGroupDialog />
          <CreateContactGroupDialog />
        </div>
      </div>

      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row">
          {isPending ? (
            <>
              <BarLoader className="w-full justify-center mx-auto" />
            </>
          ) : (
            <>
              {tableData?.data && (
                <DataTable columns={columns} data={tableData?.data} />
              )}
            </>
          )}

        </div>
    </section>
  );
};

export default ContactGroupsTab;
