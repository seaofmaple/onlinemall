const getters = {
  showCart(state){
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.showCart.length
  }
}

export default getters