import {Icon} from "@iconify/react";
import {SideNavItem} from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title:"Home",
        path:"/",
        icon: <Icon icon="lucide:home" width="24" height="24"/>,
    },
    {
        title:"Market",
        path:"/market",
        icon: <Icon icon="icon-park-outline:stock-market" width="24" height="24"/>,
    }
]
