import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/investments",
    Component: LandingPage,
  },
  {
    path: "/pricing",
    Component: LandingPage,
  },
  {
    path: "/contact",
    Component: LandingPage,
  },
]);
