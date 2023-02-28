export const APP_ROUTES = {
  private: {
    dashboard: {
      name:'/dashboard'
    }, 
    unauthorized: {
      name: '/unauthorized'
    },
    order: '/order',
    payment: '/payment',
    profile: '/profile',
    place_order: '/place_order',
    shipping: '/shipping'

  }, 
  public: {
    home: '/',
    login: '/login',
    forget_password: '/forget_password',
    not_found: '/not_found',
    register: '/register',
    about: '/about',
    product: '/product',
    product_id: '/product/[id]',
    cart: '/cart',
  }
};