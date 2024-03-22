import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as actions from './actions';

const initialState = {
  items: [],
};

const useCartStore = create(
  persist(
    (set) => ({
      ...initialState,
      addToCart: (item) => set(actions.addToCart(item)),
      removeFromCart: (item) => set(actions.removeFromCart(item)),
      clearCart: () => set(actions.clearCart()),
    }),
    {
      name: 'cartStore',
    }
  )
);

export default useCartStore;
