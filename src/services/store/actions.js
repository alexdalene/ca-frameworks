export const addToCart = (item) => (state) => {
  const itemExists = state.items.find((i) => i.product.id === item.id);

  if (itemExists) {
    return {
      items: state.items.map((i) =>
        i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    };
  } else {
    return {
      items: [...state.items, { product: item, quantity: 1 }],
    };
  }
};

export const removeFromCart = (item) => (state) => ({
  items: state.items.filter((i) => i.product.id !== item.id),
});

export const clearCart = () => (state) => ({
  items: (state.items = []),
});
