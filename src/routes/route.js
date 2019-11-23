import Controls from "../components/Controls";
import ControlsPart11 from "../components/ControlsPart11";
import pageTwo from "../components/PageTwo";
import helloWorld from "../components/HelloWorld";
import CSSandEvent from "../components/CSSandEvent";
import Directives from "../components/DirectivesPart12";
import FilterAndMixins from '../components/Part13/FilterAndMixins13'
import animations from '../components/Part14/AnimationPart14'

export const routes = [
  {
    path: "/animations14",
    component: animations
  },
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
      component: helloWorld
    },
    {
      path: "/",
      component: helloWorld
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