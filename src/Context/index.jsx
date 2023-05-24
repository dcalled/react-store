/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { useProductsApi } from '../Api';
import { v4 as UUID } from 'uuid';
import { pipe } from '../Utils';

export const AppContext = createContext();

export function AppContextProvider({ children }) {

  const { products } = useProductsApi();

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [lastOrder, setLasOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  const openDetail = product => {
    closeCart();
    setIsDetailOpen(true);
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct({});
  }

  const openCart = () => {
    closeDetail();
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  }

  const isProductInCart = product => 
    cart.findIndex(item => item.id === product.id) >= 0;

  const addToCart = product => {
    if(!isProductInCart(product)) {
      setCart(state => [...state, product]);
    }
  };

  const removeFromCart = product => {
    setCart(state => state.filter(item => item.id != product.id));
  };

  const createOrder = () => {
    const order = {
      id: UUID(),
      date: new Date(),
      products: [...cart],
      totalProducts: cart.length,
      totalPrice: cartPrice,
    }
    setLasOrder(order);
    setOrders(state => [...state, order]);
    setCart([]);
  }

  const findOrder = orderId => 
    orders.find(item => item.id === orderId);
  
  const applySearchFilter = items => items.filter(item => 
    item.category.name.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  const applyCategoryFilter = items => items.filter(item => 
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const allFilters = pipe(applyCategoryFilter, applySearchFilter);

  const setAllCategory = () => setCategoryFilter('');

  useEffect(() => {
    setCartPrice(cart.reduce((prev, item) => prev + item.price, 0));
  }, [cart])

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart])

  useEffect(() => {
    setFilteredProducts(allFilters(products));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, products, categoryFilter])



  return (
    <AppContext.Provider value={{
      products,
      cart,
      addToCart,
      cartCount,
      isDetailOpen,
      selectedProduct,
      openDetail,
      closeDetail,
      openCart,
      closeCart,
      isCartOpen,
      isProductInCart,
      removeFromCart,
      cartPrice,
      createOrder,
      orders,
      lastOrder,
      findOrder,
      searchValue, 
      setSearchValue,
      filteredProducts,
      setAllCategory,
      setCategoryFilter,
    }}>
      {children}
    </AppContext.Provider>
  );
}