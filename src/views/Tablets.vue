<template>
    <Wrapper>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :addIsVisible="product.addIsVisible"
      :removeIsVisible="product.removeIsVisible"
        :id="product.id"
        :type="product.type"
        :brand="product.brand"
        :model="product.model"
        :color="product.color"
        :capacity="product.capacity"
        :imgSrc="product.imgSrc"
        :price="product.price"
      />
    </Wrapper>
  </template>
  
  <script>
  import ProductCard from "@/components/ProductCard";
  
  export default {
    components: {
      ProductCard,
    },
    computed: {
      products() {
        const productsFilter = this.$store.getters["products"];
        return productsFilter.filter((product) => {
          if (product.type.includes("Tablet")) {
            return true;
          } else {
            return false;
          }
        });
      },
    },
  };
  </script>