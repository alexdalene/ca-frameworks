import useCartStore from '../../services/store';

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);
  console.log(cartItems);

  return (
    <div>
      <h1>Cart page</h1>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.product.id}>
              <h2>{item.product.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <img src={item.product.image.url} alt={item.product.image.alt} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
