import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  addToCart: (item) =>
    set((state) => {
      // Check if item already exists in the cart
      const itemExists = state.items.find((i) => i.product.id === item.id);

      if (itemExists) {
        // If item exists, increase the quantity
        return {
          items: state.items.map((i) =>
            i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        // If item does not exist, add it to the cart with quantity 1
        return {
          items: [...state.items, { product: item, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.id !== item.id),
    })),
}));

export default useCartStore;
