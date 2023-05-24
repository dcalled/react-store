export const RoutePaths = {
  'Home': '/',
  'MyAccount': '/my-account',
  'MyOrder': '/my-orders/:orderId',
  'MyOrders': '/my-orders',
  'SignIn': '/sign-in',
  'NotFound': '/*',
  'Electronics': '/category/electronics',
  'Clothes': '/category/clothes',
  'Toys': '/category/toys',
  'Furniture': '/category/furniture',
  'Others': '/category/others',
  'All': '/all',
  'Categories': '/category/:category'
};

export const apiUrl = lib => `https://api.escuelajs.co/api/v1/${lib}`;

export const compose = (...functions) => input => functions.reduceRight((acc, fn) => fn(acc), input);

export const pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input);