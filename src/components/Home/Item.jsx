import useCartStore from '../../services/store/store';

import { Link } from 'react-router-dom';

const Item = (data) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <li>
      <Link to={`/${data.id}`}>
        <img src={data.image?.url} alt={data.image?.alt} loading='lazy' />
      </Link>
      <h2>{data.title}</h2>
      <button onClick={() => addToCart(data)}>Add to cart</button>
    </li>
  );
};

export default Item;
