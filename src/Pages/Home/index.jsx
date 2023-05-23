import { useContext } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { AppContext } from '../../Context';
import { ProductDetail } from '../../Components/ProductDetail';

export function Home() {

    const { products, addToCart, openDetail, isProductInCart, removeFromCart } = useContext(AppContext);

    return (
        <Layout>
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {products.map(item => 
                    <Card key={item.id}
                    title={item.title}
                    price={item.price}
                    category={item.category.name}
                    imageUrl={item.images[0]}
                    onAdd={() => addToCart(item)}
                    onDetail={() => openDetail(item)}
                    isInCart={isProductInCart(item)}
                    onDelete={() => removeFromCart(item)}
                />)}
            </section>
            <ProductDetail />
        </Layout>
    );
}