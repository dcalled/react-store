/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../../Context';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../Utils';
import { SidePanel } from '../SidePanel';

export function Cart({ children }) {

  const { isCartOpen, closeCart, cartPrice, createOrder, cartCount } = useContext(AppContext);

  return (
    isCartOpen ? 
    <SidePanel onClose={closeCart} panelTitle='My Order'>
      <div className='overflow-y-scroll flex-1'>
        {children}
        <hr></hr>
      </div>
      <div className='p-6'>
        <p className='flex justify-between'>
          <span className='text-lg'>Total:</span>
          <span className='text-lg font-semibold'>${cartPrice}</span>
        </p>
        <Link to={`${RoutePaths.MyOrders}/last`}>
          <button
            className='w-full bg-black py-3 text-white text-lg font-bold rounded-lg my-2 hover:scale-105 disabled:scale-100 disabled:bg-stone-800 disabled:text-zinc-500'
            disabled={cartCount == 0}
            onClick={() => {
              createOrder();
              closeCart();
            }}
          >Checkout</button>
        </Link>
      </div>
    </SidePanel>
    : <div className='hidden'></div>
);
}