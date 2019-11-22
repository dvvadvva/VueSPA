import Controls from "../components/Controls";
import ControlsPart11 from "../components/ControlsPart11";
import pageTwo from "../components/PageTwo";
import HelloWorld from "../components/HelloWorld";
import CSSandEvent from "../components/CSSandEvent";


export const routes = [
    {
      path: "/HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/Controls",
      component: Controls
    },
    {
      path: "/foo",
      component: pageTwo
    },
    {
      path: "/cssandevent",
      component: CSSandEvent
    },
    {
      path: "/controlspart11",
      component: ControlsPart11
    }
    
  ];