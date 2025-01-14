import { NavMain } from "@/components/shared/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardLink, DownLinks, LoyaltyDashboardLinks } from "@/constants";
import DashboardLinks from "./dashboardlinks";

import Image from "./Image";
import assets from "@/assets";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-foreColors-200 !text-white font-Manrope"
    >
      <SidebarHeader
        className={`flex !flex-row px-5 mx-2 mt-5 truncate font-semibold text-primary-100 text-[18px] leading-[20px] text-left`}
      >
        <Image
          src={assets.SendTrulyLogo}
          width={30}
          height={30}
          className="invert"
          alt="SendTrulyLogo"
        />
      </SidebarHeader>
      <SidebarContent className="px-2 py-3 !mx-2 flex justify-between text-[20px] leading-[24px] mt-2">
        <DashboardLinks items={DashboardLink} name="Dashboard" />
        <NavMain items={LoyaltyDashboardLinks} />
        <DashboardLinks items={DownLinks} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
