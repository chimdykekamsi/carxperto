
import { Home } from "../seller/page/dashboard/home";
import Profiles from "./page/dashboard/profiles";
import Setting from "./page/dashboard/setting";
import List from "./page/dashboard/list";
import { FaList } from "react-icons/fa6";
import Analytic from "./page/dashboard/analytic";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Message from "../features/chat/message";
import History from "./page/dashboard/history";
import Subscription from "./page/dashboard/subscription";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import SignIn from "../features/auth/SignIn";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <IoHomeOutline {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <IoBagHandleOutline {...icon} />,
        name: "Order",
        path: "/seller-profile",
        element: <Profiles />,
      },
      {
        icon: <FaList {...icon} />,
        name: "Listing",
        path: "/seller-product",
        element: <List />,
      },
      {
        icon: <IoAnalyticsSharp {...icon} />,
        name: "analysis",
        path: "/analysis",
        element: <Analytic />,
      },
      {
        icon: <LuMessageCircle {...icon} />,
        name: "message",
        path: "/message",
        element: <Message/> ,
      },
      {
        icon: <MdOutlineHistoryToggleOff {...icon} />,
        name: "history",
        path: "/history",
        element: <History />,
      },
      {
        icon: <MdOutlineSubscriptions  {...icon} />,
        name: "subscription",
        path: "/subscription",
        element: <Subscription />,
      },
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "setting",
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <CiLogin {...icon} />,
        name: "Logout",
        path: "/signin",
        element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
