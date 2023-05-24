import { useContext } from 'react';
import { Card } from '../../Components/Card';
import { Layout } from '../../Components/Layout';
import { AppContext } from '../../Context';
import { ProductDetail } from '../../Components/ProductDetail';
import { PageTitle } from '../../Components/PageTitle';
import { useParams } from 'react-router-dom';

export function Home() {

    const { filteredProducts, addToCart, openDetail, isProductInCart, removeFromCart, setSearchValue, searchValue, setCategoryFilter } = useContext(AppContext);

    const { category } = useParams();
    setCategoryFilter(category || '');

    return (
        <Layout>
            <PageTitle title='Products'vertical={true}>
                <input 
                    type='text' 
                    placeholder='Search products'
                    className='p-2 border border-black rounded-lg my-4'
                    onChange={event => setSearchValue(event.target.value)}
                    value={searchValue}
                />
            </PageTitle>
            {filteredProducts.length > 0 ? 
            <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {filteredProducts.map(item => 
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
            </section> :
            <p>Nothing found 😔</p>}
            <ProductDetail />
        </Layout>
    );
}