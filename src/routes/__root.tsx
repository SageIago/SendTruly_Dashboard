import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { QueryClient } from "@tanstack/react-query";

import React, { Suspense } from "react";
import { AuthContext } from "@/hooks/useAuth";
import useMediaQuery from "@/hooks/use-media-query";
import NotFoundComponent from "@/components/shared/alert";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  authentication: AuthContext;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

function RootComponent() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  if (isSmallScreen) {
    return (
      <NotFoundComponent
        title="ERROR!"
        description="You need to use a laptop to access this software."
      />
    );
  }
  return (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
