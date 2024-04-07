import { IoSettingsOutline, IoBugOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import {
  MdCardGiftcard,
  MdOutlineSwitchAccount,
  MdLogout,
} from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";

export const dropdown = [
  {
    id: 1,
    Icon: IoSettingsOutline,
    content: "Settings",
  },
  {
    id: 2,
    Icon: CgNotes,
    content: "Purchase History",
  },
  {
    id: 3,
    Icon: MdCardGiftcard,
    content: "Refer and Earn",
  },
  {
    id: 4,
    Icon: RiAppsLine,
    content: "Integrations",
  },
  {
    id: 5,
    Icon: IoBugOutline,
    content: "Report Bug",
  },
  {
    id: 6,
    Icon: MdOutlineSwitchAccount,
    content: "Switch Account",
  },
  {
    id: 7,
    Icon: MdLogout,
    content: "Sign Out",
  },
];
