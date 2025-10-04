import * as ReactDOM from "react-dom/client";
import { StrictMode} from "react";
import {routeTree} from "./routeTree.gen"
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({ routeTree });

const App = () => {
  return (
    <div>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


