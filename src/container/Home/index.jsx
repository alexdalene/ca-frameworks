import './styles.css';

import { useEffect, useState } from 'react';

const url = 'https://v2.api.noroff.dev/online-shop';
let isLoading = true;

const Home = () => {
  const [posts, setPosts] = useState(null);

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
                <img
                  src={data.image?.url}
                  alt={data.image?.alt}
                  loading='lazy'
                />
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
