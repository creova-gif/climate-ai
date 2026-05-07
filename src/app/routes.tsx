import { createBrowserRouter } from "react-router";
import { PlatformDashboard } from "./components/PlatformDashboard";
import { StrategicPlan } from "./components/StrategicPlan";
import { NotFound } from "./components/NotFound";
import { Outlet } from "react-router";

function Layout() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: PlatformDashboard },
      { path: "plan", Component: StrategicPlan },
      { path: "*", Component: NotFound },
    ],
  },
]);