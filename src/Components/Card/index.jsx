import { CheckIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

/* eslint-disable react/prop-types */
export function Card({ title, price, category, imageUrl, onAdd, onDetail, isInCart, onDelete }) {

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={onDetail}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sx'>{category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={imageUrl} alt='Headphones' />
        {isInCart ? 
        <button 
          className='absolute top-0 right-0 flex justify-center items-center bg-green-200 hover:bg-red-200 w-6 h-6 rounded-full m-2 p-1 group'
          onClick={event => {
            event.stopPropagation();
            onDelete();
          }}
        >
          <CheckIcon className='group-hover:hidden block' /> 
          <XMarkIcon className='group-hover:block hidden' />
        </button>
        : <button 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={event => {
            event.stopPropagation();
            onAdd();
          }}
        ><PlusIcon className='hover:scale-150'/></button>}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-bold'>${price}</span>
      </p>
    </div>
  );
}