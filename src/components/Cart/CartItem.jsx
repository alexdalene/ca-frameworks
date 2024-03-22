import { Link } from 'react-router-dom';

const CartItem = (item) => {
  return (
    <li>
      <h2>{item.product.title}</h2>
      <p>Quantity: {item.quantity}</p>
      <Link to={`/${item.product.id}`}>
        <img src={item.product.image.url} alt={item.product.image.alt} />
      </Link>
    </li>
  );
};

export default CartItem;
