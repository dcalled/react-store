import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css'
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { RoutePaths } from '../../Utils';
import { AppContextProvider } from '../../Context';

const AppRoutes = () => 
  useRoutes([
    { path: RoutePaths.Home, element: <Home /> },
    { path: RoutePaths.MyAccount, element: <MyAccount /> },
    { path: RoutePaths.MyOrder, element: <MyOrder /> },
    { path: RoutePaths.MyOrders, element: <MyOrders /> },
    { path: RoutePaths.SignIn, element: <SignIn /> },
    { path: RoutePaths.NotFound, element: <NotFound /> },
]);


export function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppContextProvider>
  );
}

