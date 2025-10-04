import {useState}  from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../components/PizzaOfTheDay";
import Header from "../components/Header";
import { CartContext } from "../components/contexts";

export const Route = createRootRoute({
    component: () => {
        const cartHook = useState([]);
        // The fragments are here because this only returns one element and we have two elements here
        return (
            <>
            <CartContext.Provider value={cartHook}>
            <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
            </div>
            </CartContext.Provider>
            <TanStackRouterDevtools position="bottom-right" />
            </>
        )
    }
})
