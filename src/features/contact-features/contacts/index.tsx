import { DataTable } from "@/components/shared/data-table";
import { columns } from "./components/data-columns";
import { GetAllContacts } from "@/api/contact/getContacts";
import { BarLoader } from "react-spinners";

export default function Contacts() {
  const { data: tableData, isPending } = GetAllContacts({
    refetchOnMount: true,
  });
  return (
    <section className="!m-5 bg-white p-6 text-primary-900 flex flex-col gap-2 rounded-[10px] shadow-lg">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div className="text-start">
          {" "}
          <h2 className="text-2xl font-bold tracking-tight">
            {tableData?.data.total_contacts ? (
              <h2 className="text-2xl font-bold tracking-tight">{tableData.data.total_contacts} Contacts</h2>
            ) : (
              <h2 className="text-2xl font-bold tracking-tight">No Contacts Yet!</h2>
            )}
          </h2>
          <p className="text-[14px] leading-[20px] mt-2">
            Your Active and Non Active Contacts Are All Here
          </p>
        </div>
      </div>

      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row">
        {isPending ? (
          <>
            <BarLoader className="w-full justify-center" />
          </>
        ) : (
          <>
            {tableData?.data && (
              <DataTable columns={columns} data={tableData?.data.contacts} />
            )}
          </>
        )}
      </div>
    </section>
  );
}
