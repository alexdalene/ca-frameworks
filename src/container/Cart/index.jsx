import useCartStore from '../../services/store/store';
import CartItem from '../../components/Cart/CartItem';

import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      <h1>Cart page</h1>
      <button onClick={() => clearCart()}>Clear cart</button>
      <Link to={'/checkout'}>Checkout</Link>
      <ul>
        {cartItems.map((item) => {
          return <CartItem key={item.product.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default Cart;
