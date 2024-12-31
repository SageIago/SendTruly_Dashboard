import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";

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

      <Tabs defaultValue="account" className="w-[400px] mx-2">
        <TabsList>
          <TabsTrigger value="account">Contact</TabsTrigger>
          <TabsTrigger value="password">Contact Groups</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}
