import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePaths } from '../../Utils';
import { AppContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

export function Navbar() {

  const { cartCount, openCart } = useContext(AppContext);

  return (
    <nav className='flex justify-between items-center fixed w-full top-0 py-5 px-8 text-base font-light z-10 bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink 
            to={RoutePaths.Home}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.All}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.Clothes}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.Electronics}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.Furniture}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.Toys}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.Others}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li>
          test-mail@test.com
        </li>
        <li>
          <NavLink 
            to={RoutePaths.MyOrders}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.MyAccount}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            MyAccount
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={RoutePaths.SignIn}
            className={({ isActive }) => isActive ? 'underline': ''}
          >
            SignIn
          </NavLink>
        </li>
        <li 
          className='flex items-center cursor-pointer'
          onClick={() => openCart()}
        >
          <ShoppingBagIcon className='w-5 h-5'/> <p>{cartCount}</p>
        </li>
      </ul>
    </nav>
  );
}