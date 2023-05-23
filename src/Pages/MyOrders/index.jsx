import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { AppContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCart';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../Utils';

export function MyOrders() {

  const { orders } = useContext(AppContext);

  return (
    <Layout>
      <div className='flex flex-col w-80'>
        {orders.map((order, index) =>
          <Link key={index} to={`${RoutePaths.MyOrders}/${order.id}`}>
            <OrderCard
              date={order.date} 
              totalProducts={order.totalProducts} 
              totalPrice={order.totalPrice} 
            />
          </Link>
        )}
      </div>
    </Layout>
  );
}