import { FaList } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import Homeadmin from "./page/dashboard/homeadmin";
import Usermanagement from "./page/dashboard/usermanagement";
import Listadmin from "./page/dashboard/listadmin";
import Analyticadmin from "./page/dashboard/analysisadmin";
import Historyadmin from "./page/dashboard/historyadmin";
import Subscriptionadmin from "./page/dashboard/subscription/subscriptionadmin";
import Insurance from "./page/dashboard/insurance/insurance";
import AdminSetting from "./page/dashboard/adminsetting";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { RiCoinLine } from "react-icons/ri";
import { SiMicrosoftonenote } from "react-icons/si";


// import SignIn from "../pages/SignIn";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <MdOutlineDashboard {...icon} />,
        name: "dashboard",
        path: "/admin",
        // element: <Homeadmin />,
      },
      {
        icon: <IoIosPeople {...icon} />,
        name: "User management",
        path: "/user",
        element: <Usermanagement />,
      },
      {
        icon: <FaList {...icon} />,
        name: "Listing",
        path: "/listing",
        element: <Listadmin />,
      },
      {
        icon: <IoAnalyticsSharp {...icon} />,
        name: "analysis",
        path: "/analyticadmin",
        element: <Analyticadmin />,
      },
      {
        icon: <MdOutlineHistoryToggleOff {...icon} />,
        name: "history",
        path: "/historyadmin",
        element: <Historyadmin />,
      },
      {
        icon: <RiCoinLine   {...icon} />,
        name: "subscription",
        path: "/subscriptionadmin",
        element: <Subscriptionadmin />,
      },
      {
        icon: <SiMicrosoftonenote {...icon} />,
        name: "insurance",
        path: "/insurance",
        element: <Insurance/> ,
      },
     
     
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "setting",
        path: "/adminSetting",
        element: <AdminSetting />,
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
        // element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
