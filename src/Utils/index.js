const base = '/react-store';

export const RoutePaths = {
  'Home': base + '/',
  'MyAccount': base + '/my-account',
  'MyOrder': base + '/my-orders/:orderId',
  'MyOrders': base + '/my-orders',
  'SignIn': base + '/sign-in',
  'NotFound': base + '/*',
  'Electronics': base + '/category/electronics',
  'Clothes': base + '/category/clothes',
  'Toys': base + '/category/toys',
  'Furniture': base + '/category/furniture',
  'Others': base + '/category/others',
  'All': base + '/all',
  'Categories': base + '/category/:category'
};

export const apiUrl = lib => `https://api.escuelajs.co/api/v1/${lib}`;

export const compose = (...functions) => input => functions.reduceRight((acc, fn) => fn(acc), input);

export const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);