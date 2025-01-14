import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

interface Props {
  items: { title: string; url: string; icon: LucideIcon }[];
  name?: string;
}

const DashboardLinks = ({ items, name }: Props) => {
  return (
    <SidebarGroup>
      {name && <SidebarGroupLabel>{name}</SidebarGroupLabel>}
      <SidebarMenu className="flex justify-between !gap-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url} className="px-2 py-3">
                <item.icon width={30} height={30} />
                <span className="font-Manrope text-[16px] leading-[18px]">
                  {item.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default DashboardLinks;
