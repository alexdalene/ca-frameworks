import useCartStore from '../../../services/store/store';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = () => {
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        const productData = await response.json();
        const { data } = productData;

        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      setProduct(null);
    };
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image.url} alt={product.image.alt} />
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
