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

export const transactionTypeData = [
  {
    id: 1,
    type: "Store Transactions",
    name: "store",
  },
  {
    id: 2,
    type: "Get Tipped",
    name: "tipped",
  },
  {
    id: 3,
    type: "Withdrawals",
    name: "withdrawals",
  },
  {
    id: 4,
    type: "Chargebacks",
    name: "chargebacks",
  },
  {
    id: 5,
    type: "Cashbacks",
    name: "cashbacks",
  },
  {
    id: 6,
    type: "Refer & Earn",
    name: "refer",
  },
];
