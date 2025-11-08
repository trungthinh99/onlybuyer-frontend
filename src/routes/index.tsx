import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Shop from '../pages/Shop';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ShopProductDetail from '../pages/ShopProductDetail';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
