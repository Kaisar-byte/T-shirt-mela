import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OrderReview from "../Pages/Home/OrderReview/OrderReview";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('tshirts.json')
            },
            {
                path: "/review",
                element: <OrderReview></OrderReview>
            }
        ]
    }
])