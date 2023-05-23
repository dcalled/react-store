/* eslint-disable react/prop-types */
import { TrashIcon } from '@heroicons/react/24/solid';

export function CartCard({ title, price, imageUrl, onDelete }) {
  return (
    <>
      <hr></hr>
      <div className='flex justify-between items-center px-6 py-2'>
        <div className='flex items-center gap-2 pr-2'>
          <figure className='w-20 h-20'>
            <img
              className='w-full h-full object-cover rounded-lg'
              src={imageUrl}
              alt='img'
            />
          </figure>
          <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-base font-medium'>${price}</p>
          {onDelete && <button onClick={onDelete}><TrashIcon className='h-6 w-6 text-black'/></button>}
        </div>
      </div>
    </>
  );
}