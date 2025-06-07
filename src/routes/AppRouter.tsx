import { MainLayout } from "@layout";
import { AboutUs, Categories, Error, Home, Products } from "@pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />

      <Route
        path="categories/products/:prefix"
        element={<Products />}
        loader={({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bas Request", {
              status: 400,
              statusText: "Category not found",
            });
          }
          return true;
        }}
      />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

// 21-5-2025
