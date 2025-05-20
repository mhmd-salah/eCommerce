import { MainLayout } from "@layout";
import { AboutUs, Categories, Home, Products } from "@pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="products:prefix" element={<Products />} />
      <Route path="categories" element={<Categories />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
