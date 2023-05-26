export default{
    addToCart(context , payload){
        const prodId=payload.id
        const products=context.rootGetters.products
        const product = products.find((prod)=>prod.id === prodId)
        context.commit("addProductsToCart", product)
    },
    addNewProduct(context, payload){
        console.log("action addNewProduct",payload)
        context.commit("addNewProducts", payload)

    },
    removeFromCart(context,payload){
        context.commit("removeProductFromCart",payload)
    }
}