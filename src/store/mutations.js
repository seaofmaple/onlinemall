const mutations = {
  addCart(state, info) {
    const oldValue = state.cartList.find(item => item.iid == info.iid)
    if(oldValue) {
      oldValue.count += 1
    } else {
      info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  }
}

export default mutations