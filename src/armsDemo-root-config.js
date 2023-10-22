import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@armsDemo/homepage",
  app: () => System.import("@armsDemo/homepage"),
  activeWhen: ["/home"]
});
registerApplication(
 "@armsDemo/sidebar",
 () => System.import("@armsDemo/sidebar"),
(locatiom)=>locatiom.pathname.startsWith("/sidebar")
);

start({
  urlRerouteOnly: true,
});
