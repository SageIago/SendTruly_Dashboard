import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComposeSMSTab from "@/features/sms-features/compose-sms/compose-tabs";
import PersonalizeSMSTab from "@/features/sms-features/personalize-sms/personalize-sms";
import ScheduledMessagesTab from "@/features/sms-features/scheduled-messages";
import SentMessagesTab from "@/features/sms-features/sent-messages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/sms")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <>
        <Tabs defaultValue="compose-sms" orientation="vertical">
          <div className="w-[250px] sm:w-full overflow-x-auto pb-2 rounded-sm">
            <TabsList className="flex-nowrap">
              <TabsTrigger value="compose-sms">Compose SMS</TabsTrigger>
              <TabsTrigger value="personalize-sms">
                Personalize Message
              </TabsTrigger>
              <TabsTrigger value="sent-messages">Sent Messages</TabsTrigger>
              <TabsTrigger value="schedule">Schedule Message</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="compose-sms">
            <ComposeSMSTab />
          </TabsContent>
          <TabsContent value="personalize-sms">
            <PersonalizeSMSTab />
          </TabsContent>
          <TabsContent value="sent-messages">
            <SentMessagesTab />
          </TabsContent>
          <TabsContent value="schedule">
            {" "}
            <ScheduledMessagesTab />{" "}
          </TabsContent>
          <TabsContent value="drafts">Hello Drafts!</TabsContent>
        </Tabs>
      </>
    </>
  );
}
