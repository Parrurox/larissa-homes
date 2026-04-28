import { createBrowserRouter, Navigate } from "react-router";
import LandingPage from "./pages/LandingPage";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AdminPage from "./pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/investment",
    element: <Navigate to="/investments" replace />,
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
  {
    path: "/cookie-policy",
    Component: CookiePolicy,
  },
  {
    path: "/privacy-policy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms-of-service",
    Component: TermsOfService,
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
]);
