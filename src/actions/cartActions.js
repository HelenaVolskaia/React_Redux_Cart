export function addToCart(item) {
  return {
      type: 'ADD',
      item: item
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item: item
  };
}
export function removeItemFromCart(item) {
  return {
      type: 'REMOVE_ITEMS_FROM_CART',
      item: item
  };
}
export function emptyCart(item) {
  return {
      type: 'EMPTY_CART',
      item: item
  };
}