import { useContext } from 'react';
import { AppContext } from '../../Context';
import { SidePanel } from '../SidePanel';

export function ProductDetail() {

  const { isDetailOpen, closeDetail, selectedProduct } = useContext(AppContext);

  return (
    isDetailOpen ? 
    <SidePanel onClose={closeDetail} panelTitle='Details'>
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
    </SidePanel>
    : <div className='hidden'></div>
);
}