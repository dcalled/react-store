import { useContext } from 'react';
import { Cart } from '../Cart';
import { Navbar } from '../Navbar';
import { CartCard } from '../CartCard';
import { AppContext } from '../../Context';

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {

  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-20'>
        {children}
      </div>
      <Cart>
        {cart.map(
          product => <CartCard 
            key={product.id}
            imageUrl={product.images[0] || product.images}
            price={product.price}
            title={product.title} 
            onDelete={() => removeFromCart(product)}
        />)}
      </Cart>
    </>
  );
}