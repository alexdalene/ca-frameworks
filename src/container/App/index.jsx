import Home from '../Home';
import Contact from '../Contact';
import Cart from '../Cart';

import { Routes, Route } from 'react-router';
import Layout from '../Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
