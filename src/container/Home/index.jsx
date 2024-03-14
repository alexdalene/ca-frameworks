import './styles.css';
import useCartStore from '../../services/store';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://v2.api.noroff.dev/online-shop';
let isLoading = true;

const Home = () => {
  const [posts, setPosts] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const posts = await response.json();
      setPosts(posts);
    }

    fetchData();
    isLoading = false;

    return () => {
      isLoading = true;
    };
  }, []);

  if (!isLoading) {
    const { data } = posts;
    console.log(data);

    return (
      <div>
        <h1>Home</h1>
        <ul>
          {data.map((data) => {
            return (
              <li key={data.id}>
                <Link to={`/${data.id}`}>
                  <img
                    src={data.image?.url}
                    alt={data.image?.alt}
                    loading='lazy'
                  />
                </Link>
                <h2>{data.title}</h2>
                <button onClick={() => addToCart(data)}>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
