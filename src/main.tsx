import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./i18n/config";

/* CSS */
import "./tailwind.css";

/* Battambang */
import "@fontsource/battambang/300.css";
import "@fontsource/battambang/400.css";
import "@fontsource/battambang/700.css";
import "@fontsource/battambang/900.css";

/* Roboto */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const DefaultParamsContext = createContext({ lang: "en" });

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
let rootElement: HTMLElement | null = null;
if (typeof document !== "undefined") {
  rootElement = document.getElementById("app");
}

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <DefaultParamsContext.Provider value={{ lang: "en" }}>
      <RouterProvider router={router} />
    </DefaultParamsContext.Provider>
  );
}
