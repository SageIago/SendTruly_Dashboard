import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/sms")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <>
        <div className="mb-5 flex justify-between items-center space-y-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl tracking-tight font-Manrope font-bold">
              SMS
            </h1>
            <p className="text-primary-900  text-[16px] leading-[18px] sm:text-[16px] sm:leading-[18px]">
              Keep Track of SMS Flow Here
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="account"
          orientation="vertical"
        >
          <div className="w-[250px] sm:w-full overflow-x-auto pb-2 rounded-sm">
            <TabsList className="flex-nowrap">
              <TabsTrigger value="account">Compose SMS</TabsTrigger>
              <TabsTrigger value="password">Personalize Message</TabsTrigger>
              <TabsTrigger value="sent-message">Sent Messages</TabsTrigger>
              <TabsTrigger value="schedule">Schedule Message</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="sent-message">
            Change your password here.
          </TabsContent>
          <TabsContent value="schedule">Change your password here.</TabsContent>
          <TabsContent value="drafts">Change your password here.</TabsContent>
        </Tabs>
      </>
    </>
  );
}
