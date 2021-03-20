import XHDiscover from "@/pages/discover";
import XHMine from "@/pages/mine";
import XHFriend from "@/pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: XHDiscover
  },
  {
    path: "/mine",
    component: XHMine
  },
  {
    path: "/friend",
    component: XHFriend
  }
];

export default routes;