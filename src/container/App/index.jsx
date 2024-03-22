import Home from '../Home';
import Product from '../Home/Product';
import Cart from '../Cart';
import Checkout from '../Cart/Checkout';
import Contact from '../Contact';

import { Routes, Route } from 'react-router';
import Layout from '../Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/:id' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
