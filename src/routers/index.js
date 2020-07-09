import Auth from "./Auth";
import Home from "./Home";

const routers = [
    {
      path: '',
      listRouter: Auth,
    },
    {
      path: '',
      listRouter: Home,
    },

  ];
  
  const appRouters = [];
  
  const renderListRouter = () =>
    routers.forEach((objectRouter) => {
      const tmp = objectRouter.listRouter.map(
        (router) => {
          return { parentPath: objectRouter.path, ...router };
        },
      );
      appRouters.push(...tmp);
    });
  renderListRouter();
  
  export default appRouters;