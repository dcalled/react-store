export const RoutePaths = {
  'Home': '/',
  'MyAccount': '/my-account',
  'MyOrder': '/my-orders/:orderId',
  'MyOrders': '/my-orders',
  'SignIn': '/sign-in',
  'NotFound': '/*',
  'Electronics': '/electronics',
  'Clothes': '/clothes',
  'Toys': '/toys',
  'Furniture': '/furniture',
  'Others': '/others',
  'All': '/all'
};

export const apiUrl = lib => `https://api.escuelajs.co/api/v1/${lib}`;