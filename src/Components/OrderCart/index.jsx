import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

/* eslint-disable react/prop-types */
export function OrderCard({date, totalProducts, totalPrice}) {
  return (
      <div className='flex justify-between border border-black w-80 p-4 rounded-lg mb-4 hover:bg-neutral-400 hover:scale-105'>
        <div className='flex justify-between w-full items-center '>
          <p className='flex flex-col'>
            <span className='font-light'>{totalProducts} products</span>
            <span className='font-light'>{date.toLocaleString('es-CO')}</span>
          </p>
          <p className='flex gap-2'>
            <span className='font-medium text-lg'>${totalPrice}</span>
            <ArrowRightOnRectangleIcon className='w-6 h-6 text-black'/>
          </p>
        </div>
      </div>
  );
}