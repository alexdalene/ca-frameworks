import useCartStore from '../../../services/store/store';

import { NavLink } from 'react-router-dom';

const Header = () => {
  const cartAmount = useCartStore((state) => state.items.length);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Cart {cartAmount}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
