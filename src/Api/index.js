import { useEffect, useState } from 'react';
import { apiUrl } from '../Utils';

function fetchData(url, saveData) {
  fetch(url).then(res => res.json()).then(data => saveData(data));
}

export function useProductsApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => 
    fetchData(apiUrl('products'), setProducts)
  , []);

  return { products };
}