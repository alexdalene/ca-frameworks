import { useEffect } from 'react';
import useCartStore from '../../../services/store/store';

const Checkout = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const clearCartTimeout = setTimeout(() => {
      clearCart();
    }, 1000);

    return () => {
      clearTimeout(clearCartTimeout);
    };
  });
  return (
    <div>
      <h1>Thank you for your purchase!</h1>
    </div>
  );
};

export default Checkout;
