/** @type {import('@remix-run/dev').AppConfig} */
export default {
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/detail/:code", "phone-detail/route.tsx");
    });
  },
};
