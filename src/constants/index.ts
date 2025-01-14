import {
  AppWindowMacIcon,
  BookDashedIcon,
  BugPlayIcon,
  Contact2Icon,
  MessageCircleCode,
  MessageSquareLock,
  NotebookTabs,
  WalletCardsIcon
} from "lucide-react";

export const LoyaltyDashboardLinks = [
  {
    title: "Loyalty",
    icon: NotebookTabs,
    items: [
      {
        title: "Dashboard",
        url: "/loyalty/",
      },
      {
        title: "Campaign",
        url: "/loyalty/campaign",
      },
      {
        title: "Customer Insight",
        url: "/loyalty/customer-insight",
      },
      {
        title: "Loyalty",
        url: "/loyalty/loyalty",
      },
      {
        title: "Auto Campaign",
        url: "/loyalty/auto-campaign",
      },
      {
        title: "Review",
        url: "/loyalty/review",
      },
      {
        title: "Add Customers",
        url: "/loyalty/add-customer",
      },
    ],
  },
 
]

export const DashboardLink = [
  {
    title: "Home",
    icon: MessageSquareLock,
    url: "/dashboard"
  },
  {
    title: "SMS",
    icon: MessageSquareLock,
    url: "/sms"
  },
  {
    title: "Reviews",
    icon: BookDashedIcon,
    url: "/reviews"
  },
  {
    title: "Text2Pay",
    icon: BugPlayIcon,
    url: "/text2pay"
  },
  {
    title: "Contact",
    icon: Contact2Icon,
    url: "/contact"
  }
]


export const DownLinks = [
  {
    title: "Wallet",
    icon: WalletCardsIcon,
    url: "/wallet"
  },
  {
    title: "Notifications",
    icon: MessageCircleCode,
    url: "/notifications"
  },
  {
    title: "API Integration",
    icon: AppWindowMacIcon,
    url: "/integration"
  }
]

