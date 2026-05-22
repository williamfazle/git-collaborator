import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Rootlayout from "../layout/Rootlayout";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import Contacts from "../pages/contacts";
import DealsPage from "../pages/DealsPage";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductsPage from "../pages/ProductsPage";
import AccountPage from "../pages/AccountPage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import PrivateRoute from "../shared/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "account",
        element: (
          <PrivateRoute>
            <AccountPage />
          </PrivateRoute>
        ),
      },
      {
        path: "deals",
        element: <DealsPage />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
