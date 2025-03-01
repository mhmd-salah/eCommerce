import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//layout
import MainLayout from '@layout/MainLayout/MainLayout';
//pages
import Home from '@pages/Home';
import Error from '@pages/Error';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import Cart from '@pages/Cart';
import AboutUs from '@pages/AboutUs';
import Register from '@pages/Register';
import Login from '@pages/Login';
import Wishlist from '@pages/Wishlist';

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<MainLayout />} errorElement={<Error />}>
//         <Route index element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="categories" element={<Categories />} />
//         <Route
//           path="products/:prefix"
//           element={<Products />}
//           loader={({params})=>{console.log(params)}}
//         />
//         <Route path="about-us" element={<AboutUs />} />
//       </Route>
//     </>
//   )
// );
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route
        path="categories/products/:prefix"
        element={<Products />}
        loader={({ params }) => {
          if (
            typeof params.prefix !== 'string' ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response('bad requests', {
              statusText: 'category not found',
              status: 400,
            });
          }
          return true;
        }}
      />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);
const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
