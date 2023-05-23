import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AppContext } from '../../Context';

export function ProductDetail() {

  const { isDetailOpen, closeDetail, selectedProduct } = useContext(AppContext);

  return (
    isDetailOpen ? 
    <aside className='flex flex-col fixed right-0 w-[360px] h-[calc(100vh-80px)] top-[80px] bg-white border border-black rounded-lg'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
          <button onClick={() => closeDetail()}> 
            <XMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
          </button>
      </div>
      <figure className='px-6'>
        <img 
          className='object-cover w-full h-full rounded-lg' 
          src={selectedProduct.images[0] || selectedProduct.images} 
          alt={selectedProduct.title} 
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span>${selectedProduct.price}</span>
        <span>{selectedProduct.title}</span>
        <span>{selectedProduct.description}</span>
        <span>{selectedProduct.category.name}</span>
      </p>
    </aside>
    : <div className='hidden'></div>
);
}