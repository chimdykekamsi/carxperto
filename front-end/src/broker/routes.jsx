
import Setting, { SettingBroker } from "./page/dashboard/setting";


import { LuMessageCircle } from "react-icons/lu";

import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Message, { MessagesBroker } from "./page/dashboard/message";


import SignIn from "../features/auth/SignIn";
import SubscriptionBroker from "./page/dashboard/subscription";
import { RiCoinLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import Brokerprofile from "./page/dashboard/profile/brokerprofile";
import { RiCustomerService2Line } from "react-icons/ri";
import Servicebody from "./page/dashboard/service/servicebody";
import Brokerhome from "./page/dashboard/home/brokerhome";
import { MdOutlineDashboard } from "react-icons/md";

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
        path: "/brokerhome",
        element: <Brokerhome />,
      },
     
      {
        icon: <RiCustomerService2Line {...icon} />,
        name: "Service-card",
        path: "/service",
        element: <Servicebody />,
      },
      {
        icon: <LuMessageCircle {...icon} />,
        name: "message",
        path: "/messagebroker",
        element: <MessagesBroker/> ,
      },
      {
        icon: <IoPersonOutline {...icon} />,
        name: "Profile",
        path: "/brokerprofile",
        element: <Brokerprofile />,
      },
      {
        icon: <RiCoinLine  {...icon} />,
        name: "subscription",
        path: "/SubscriptionBroker",
        element: <SubscriptionBroker />,
      },
      {
        icon: <IoSettingsOutline {...icon} />,
        name: "setting",
        path: "/settingbroker",
        element: <SettingBroker />,
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
