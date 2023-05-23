import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { AppContext } from '../../Context';
import { CartCard } from '../../Components/CartCard';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { RoutePaths } from '../../Utils';

export function MyOrder() {
  const { orderId } = useParams();
  const { lastOrder, findOrder } = useContext(AppContext);
  const order = orderId === 'last' ? lastOrder : findOrder(orderId);

  return (
    <Layout>
      <div className='flex justify-center items-center relative w-96 mb-4'>
        <Link to={RoutePaths.MyOrders} className='absolute left-6'>
          <ArrowLeftOnRectangleIcon className='w-10 h-10 text-black'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-96'>
        {order ? order.products.map(
          product => <CartCard
            key={product.id}
            imageUrl={product.images[0] || product.images}
            price={product.price}
            title={product.title}
          />) :
          <p>Add some products :3</p>}
      </div>
    </Layout>
  );
}