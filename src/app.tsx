/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster.tsx";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import useAuth from "./hooks/useAuth";
import { DialogProvider } from "./context/dialog-context";
import useMediaQuery from "./hooks/use-media-query";

const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    authentication: undefined!,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  
  const auth = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <RouterProvider router={router} context={{ authentication: auth }} />
        <Toaster />
      </DialogProvider>
    </QueryClientProvider>
  );
}

export default App;
