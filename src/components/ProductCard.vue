
<template>
    <div class="product-card">
      <div class="image-container">
        <img class="img-style" :src="imgSrc" :alt="brand + model" />
      </div>
      <p class="price-label">₿ {{ price.toFixed(2) }}</p>
      <button v-if="addIsVisible" @click="addToCart">Add to Cart</button>
      <button class="remove-btn" v-if="removeIsVisible" @click="removeProductFromCart">Remove from Cart</button>

      <span class="product-title">
        {{ brand }} {{ model }} {{ color }} {{ capacity }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: [
    "addIsVisible",
    "removeIsVisible",
      "id",
      "type",
      "brand",
      "model",
      "color",
      "capacity",
      "imgSrc",
      "price",
    ],
    methods: {
      addToCart() {
        this.$store.dispatch("addToCart", {
          addIsVisible:this.addIsVisible,
          removeIsVisible:this.removeIsVisible,
          id: this.id,
          type: this.type,
          brand: this.brand,
          model: this.model,
          color: this.color,
          capacity: this.capacity,
          imgSrc: this.imgSrc,
          price: this.price,
        });
      },
      removeProductFromCart() {
        this.$store.dispatch("removeFromCart", {
          addIsVisible:this.addIsVisible,
          removeIsVisible:this.removeIsVisible,
          id: this.id,
          type: this.type,
          brand: this.brand,
          model: this.model,
          color: this.color,
          capacity: this.capacity,
          imgSrc: this.imgSrc,
          price: this.price,
        });
      },

    },
  };
  </script>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    height: 450px;
    max-height: 450px;
    max-width: 250px;
    background-color: white;
    border-radius: 15px;
    flex: 1 1 240px;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(60, 60, 60, 0.2);
    padding: 30px;
  }
  
  .img-style {
    display: flex;
    height: 250px;
    object-fit: cover;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
  }
  
  .product-title {
    display: flex;
    color: rgba(66, 185, 131, 1);
    font-weight: bold;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
  }
  
  .price-label {
    font-weight: bold;
    font-size: 20px;
  }
  .remove-btn{
    font: inherit;
    cursor: pointer;
    background-color: red;
    color: white;
    border: 1px solid rgba(66, 185, 131, 1);
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    margin-bottom: 20px;

  }
  </style>