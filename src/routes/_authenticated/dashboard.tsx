import assets from "@/assets";
import StatsCards from "@/components/Cards/StatsCards";
import { useStats } from "@/hooks/useStats";
import { RenderToasts } from "@/lib/utils";
import StatsStore from "@/store/statsStore";
import { createFileRoute } from "@tanstack/react-router";
import { BarLoader } from "react-spinners";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoading, error} = useStats();
  const { stats } = StatsStore();
  
   if(error) {
    RenderToasts({
      type: "error",
      title: `${error}`
    })
   }

  return (
    <>
      <div className="mb-2 flex justify-between items-center space-y-2 mx-2">
        <h1 className="text-2xl tracking-tight font-Manrope font-bold">
          Welcome! 👋
        </h1>
      </div>

      {/* Show User Stats */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-4 !m-5 sm:gap-1.5 flex-row justify-between bg-white py-6 sm:flex-col !rounded-[10px] shadow-lg">
        {isLoading ? (
          <>
            <BarLoader />
          </>
        ) : (
          <>
            <StatsCards
              imgURL={assets.WalletIcon}
              title={"Amount Recieved"}
              amount={`₦${stats?.amountSpent}`}
              // type="specified"
            />
            <StatsCards
              imgURL={assets.SMSIcon}
              title={"SMS Sent"}
              amount={`${stats?.totalSmsCount} SMS Sent`}
            />
            <StatsCards
              imgURL={assets.ContactIcon}
              title={"Total Contacts"}
              amount={`${stats?.totalContactCount} Contacts Recieved`}
            />
            <StatsCards
              imgURL={assets.EmailIcon}
              title={"Mails Recieved"}
              amount={"No Emails Yet"}
            />
          </>
        )}
      </div>

      {/* Cards */}
     </>
  );
}
