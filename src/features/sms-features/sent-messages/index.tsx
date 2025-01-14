import { useSentMessagesMutation } from "@/api/messages/sent-messages";
import { DataTable } from "@/components/shared/data-table";
import TokenStore from "@/store/tokenStore";
import React from "react";
import { BarLoader } from "react-spinners";
import { columns } from "./actions/columns";

const SentMessagesTab = () => {
 const { token } = TokenStore();

  const { mutate, data:tableData, isPending} = useSentMessagesMutation();


  React.useEffect(() => {
    mutate({
      usertoken: token ?? "",
    });
  }, [mutate, token]);

  return (
    <section className="!m-5 bg-white p-6 text-primary-900 flex flex-col gap-2 rounded-[10px] shadow-lg">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div>
          {" "}
          <h2 className="text-2xl font-bold tracking-tight">Sent Messages</h2>
          <p className="text-[14px] leading-[20px] mt-2">
            Track your Sent Messages
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

export default SentMessagesTab;
