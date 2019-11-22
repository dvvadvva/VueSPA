import Controls from "../components/Controls";
import ControlsPart11 from "../components/ControlsPart11";
import pageTwo from "../components/PageTwo";
import HelloWorld from "../components/HelloWorld";
import CSSandEvent from "../components/CSSandEvent";
import Directives from "../components/DirectivesPart12";
import FilterAndMixins from '../components/FilterAndMixins'

export const routes = [
  {
    path: "/filterandmixins13",
    component: FilterAndMixins
  },
  {
    path: "/directives12",
    component: Directives
  },
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