import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { VirtualListComponent } from "./virtualList/VirtualList";
import { Layout } from "./pages/layout";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {path: "", element: <Home />},
                {path: "admin", element: <Admin />},
                {path: "virtual-list", 
                    element: <VirtualListComponent />
                    // lazy: async () => {
                    //     const module = await import("./virtualList/VirtualList")
                    //     return {
                    //         Component: module.VirtualListComponent
                    //     }
                    // }
                }
            ]
        },
    ]
);