import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//layout
import MainLayout from "@layout/MainLayout/MainLayout";
//pages
import Home from "@pages/Home";
import Products from "@pages/Products";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "categories",
//         element: <Categories />,
//       },
//       {
//         path: "products:prefix",
//         element: <Products />,
//       },
//       {
//         path: "about-us",
//         element: <AboutUs />,
//       },
//     ],
//   },
// ]);
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="products/:prefix" element={<Products />} />
      <Route path="about-us" element={<AboutUs />} />
    </Route>
  )
)

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);
