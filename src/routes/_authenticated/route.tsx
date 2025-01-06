import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { useDashboardMutation } from "@/api/user/getdashboardInfo";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TokenStore from "@/store/tokenStore";
import React from "react";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const { isSignedIn } = context.authentication;
    if (!isSignedIn) {
      throw redirect({ to: "/signin" });
    }
  },
});

function RouteComponent() {
  const { token } = TokenStore();

  const { mutate, isPending, data } = useDashboardMutation({
    onError() {
      throw redirect({ to: "/signin" });
    },
  });

  React.useEffect(() => {
    mutate({
      token: token ?? "",
    });
  }, [mutate, token]);

  if (isPending) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
        <div className="flex gap-5 items-center text-white">
          <LoadingSpinner size={50} />
          <h2 className="font-bold text-[20px] leading-[24px]">
            Authenticating....
          </h2>
        </div>
      </div>
    );
  }
  console.log(data);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="!bg-white shadow-black py-3 flex px-4">
          <div className="px-5 flex gap-20 mt-2 justify-between w-full">
            <h2 className="font-bold text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] items-start mt-1.5">
              Overview
            </h2>
            <div className="flex flex-col items-end">
              <h4 className="font-bold sm:text-[20px] sm:leading-[24px]">{`₦${data?.data?.getAccountBalance.account_balance ?? 0}`}</h4>
              <p className="text-[10px] leading-[18px] font-normal font-Urbanist">
                Available Balance
              </p>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 !bg-slate-200">
          <div className="!mt-10">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
