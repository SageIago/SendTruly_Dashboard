import { GetAllListsMutation } from "@/api/contact/get-all-lists";
import { columns } from "./actions/columns";
import { DataTable } from "@/components/shared/data-table";
import { BarLoader } from "react-spinners";

const ScheduledMessagesTab = () => {
  const { data: tableData, isPending } = GetAllListsMutation({
    staleTime: 1000,
    refetchInterval: 1000
  });

  return (
    <section className="!m-5 bg-white p-6 text-primary-900 flex flex-col gap-2 rounded-[10px] shadow-lg">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div>
          {" "}
          <h2 className="text-2xl font-bold tracking-tight">Scheduled Messages</h2>
          <p className="text-[14px] leading-[20px] mt-2">
            View Your Scheduled Messages
          </p>
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
                <DataTable columns={columns} data={[]} />
              )}
            </>
          )}

        </div>
    </section>
  );
};

export default ScheduledMessagesTab;
