import * as React from "react";

import { NavMain } from "@/components/shared/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardLink, DownLinks, LoyaltyDashboardLinks } from "@/constants";
import { MessageSquareDotIcon } from "lucide-react";
import DashboardLinks from "./dashboardlinks";

interface SidebarProps extends React.ComponentProps<typeof Sidebar> {
  collapsed?: boolean;
}

export function AppSidebar({ collapsed, ...props }: SidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex !flex-row px-2 py-3 mx-2 mt-5 truncate font-semibold text-primary-100 text-[16px] leading-[18px] text-left">
        <i>
          <MessageSquareDotIcon width={20} />
        </i>

        {!collapsed ? <p className="mt-0.5">SendTruly Inc</p> : ""}
      </SidebarHeader>
      <SidebarContent>
        <DashboardLinks items={DashboardLink} name="Dashboard" />
        <NavMain items={LoyaltyDashboardLinks} />
        <DashboardLinks items={DownLinks} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
