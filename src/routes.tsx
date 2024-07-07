import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Main from "views/admin/main"
import AI from 'views/admin/ai'
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import Logo from "./assets/svg/Logo.svg"
import DashboardIcon from './assets/svg/dashboard.svg';
import AiIcon from "./assets/svg/ai.svg";
import IntegrationIcon from './assets/svg/integration.svg';
import ProjectIcon from './assets/svg/project.svg'
import DocumentIcon from './assets/svg/document.svg'
import Integration from './views/admin/integrations'

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <img src={DashboardIcon} alt="logo" />,
    component: <Main />,
  },
  {
    name: "Your AI",
    layout: "/admin",
    path: "ai",
    icon: <img src={AiIcon} alt="logo" />, 
    component: <AI />,
  },
  {
    name: "Integrations",
    layout: "/admin",
    path: "integration",
    icon: <img src={IntegrationIcon} alt="logo" />, 
    component: <Integration />,
  },
  {
    name: "Projects",
    layout: "/admin",
    path: "main",
    icon: <img src={ProjectIcon} alt="logo" />, 
    component: <Main />,
  },
  {
    name: "Documents",
    layout: "/admin",
    path: "main",
    icon: <img src={DocumentIcon} alt="logo" />, 
    component: <Main />,
  },
  // {
  //   name: "Main Dashboard",
  //   layout: "/admin",
  //   path: "default",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <MainDashboard />,
  // },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
