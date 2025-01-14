import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactGroupsTab from "@/features/contact-features/contact-groups/contact-tabs";
import Contacts from "@/features/contact-features/contacts";
import { createFileRoute } from "@tanstack/react-router";
import { ContactIcon, GroupIcon } from "lucide-react";

export const Route = createFileRoute("/_authenticated/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="mb-5 flex justify-between items-center space-y-2 mx-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl tracking-tight font-Manrope font-bold">
            Contacts
          </h1>
          <p className="text-primary-900  text-[16px] leading-[18px] sm:text-[16px] sm:leading-[18px]">
            Manage Your Contact Lists Here.
          </p>
        </div>
      </div>

      <Tabs defaultValue="contact-groups" className="mx-2">
        <TabsList>
          <TabsTrigger value="contact-groups" className="tab-styles">
          <GroupIcon width={30} height={30} />
            Contact Groups
          </TabsTrigger>
          <TabsTrigger value="contact" className="tab-styles">
            <ContactIcon  width={30} height={30} />
            Contact
          </TabsTrigger>
        </TabsList>
        <TabsContent value="contact-groups">
          <ContactGroupsTab />
        </TabsContent>
        <TabsContent value="contact">
          <Contacts />
        </TabsContent>
      </Tabs>
    </>
  );
}
