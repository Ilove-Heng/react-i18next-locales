import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./i18n/config";
import "./tailwind.css";

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

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <DefaultParamsContext.Provider value={{ lang: "en" }}>
      <RouterProvider router={router} />
    </DefaultParamsContext.Provider>
  );
}
