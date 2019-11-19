import pageOne from "../components/PageOne";
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
      path: "/bar",
      component: pageOne
    },
    {
      path: "/foo",
      component: pageTwo
    }
  ];