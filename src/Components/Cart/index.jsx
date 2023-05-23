/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AppContext } from '../../Context';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../Utils';

export function Cart({ children }) {

  const { isCartOpen, closeCart, cartPrice, createOrder, cartCount } = useContext(AppContext);

  return (
    isCartOpen ? 
    <aside className='flex flex-col fixed right-6 w-[360px] h-[calc(100vh-86px)] top-[80px] bg-white border border-black rounded-lg'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
          <button onClick={closeCart}> 
            <XMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
          </button>
      </div>
      <div className='overflow-y-scroll flex-1'>
        {children}
        <hr></hr>
      </div>
      <div className='p-6'>
        <p className='flex justify-between'>
          <span className='text-lg'>Total:</span>
          <span className='text-lg font-semibold'>${cartPrice}</span>
        </p>
        <Link to={RoutePaths.MyOrder}>
          <button
            className='w-full bg-black py-3 text-white text-lg font-bold rounded-lg my-2 hover:scale-105 disabled:scale-100 disabled:bg-stone-800 disabled:text-zinc-500'
            disabled={cartCount == 0}
            onClick={createOrder}
          >Checkout</button>
        </Link>
      </div>
    </aside>
    : <div className='hidden'></div>
);
}