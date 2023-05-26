export default {
  addProductsToCart(state, payload) {
    const productData = payload;
    const productInCartIndex = state.cart.findIndex(
      (ci) => ci.id === productData.id
    );

    const productIndex = state.products.findIndex(
      (ci) => ci.id === productData.id
    );
    if (state.products[productIndex].addIsVisible) {
      state.products[productIndex].addIsVisible = false;
      state.products[productIndex].removeIsVisible = true;
    }

    if (productInCartIndex >= 0) {
      state.cart[productInCartIndex].qty++;
    } else {
      const newItem = {
        id: productData.id,
        type: productData.type,
        brand: productData.brand,
        model: productData.model,
        color: productData.color,
        capacity: productData.capacity,
        imgSrc: productData.imgSrc,
        price: productData.price,
        qty: 1,
      };
      state.cart.push(newItem);
    }
    state.qty++;
    state.total += productData.price;
  },

  removeProductFromCart(state, payload) {
    const productData = payload;

    const productIndex = state.products.findIndex(
      (ci) => ci.id === productData.id
    );
    if (state.products[productIndex].removeIsVisible) {
      state.products[productIndex].removeIsVisible = false;
      state.products[productIndex].addIsVisible = true;
    }
    const prodId = payload.id;
    const productInCartIndex = state.cart.findIndex(
      (cartItem) => cartItem.id === prodId
    );

    const prodData = state.cart[productInCartIndex];
    state.cart.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  },
  addNewProducts(state, payload) {
    state.products.push(payload);
    console.log("mutation addNewProducts", state.products);
  },
};
