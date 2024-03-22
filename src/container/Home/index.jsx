import './Home.css';
import Item from '../../components/Home/Item';

import { useEffect, useState } from 'react';

let isLoading = true;

const Home = () => {
  const [posts, setPosts] = useState(null);
  const url = 'https://v2.api.noroff.dev/online-shop';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const posts = await response.json();
        setPosts(posts);
        isLoading = false;
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      isLoading = true;
    };
  }, []);

  if (!isLoading) {
    const { data } = posts;

    return (
      <div>
        <h1>Home</h1>
        <ul>
          {data.map((data) => {
            return <Item key={data.id} {...data} />;
          })}
        </ul>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
