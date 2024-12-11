import AppRouter from "@routes/AppRouter";
import { createRoot } from "react-dom/client";
import "@styles/global.css";
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

const rootHtml = document.getElementById("root");

const rootComponent = createRoot(rootHtml!);

rootComponent.render(<AppRouter />);
