
import * as ReactDOM from "react-dom/client";
import { StrictMode} from "react";
import {routeTree} from "./routeTree.gen"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      </StrictMode>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


