import Controls from "../components/Controls";
import pageTwo from "../components/PageTwo";
import HelloWorld from "../components/HelloWorld";

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
    }
  ];