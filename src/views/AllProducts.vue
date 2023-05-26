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
  <br />
  <button @click="AddNewButton" class="AddNewButton">Add New Product</button>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductCard
  },
  methods:{
    AddNewButton(){
      alert("add called")
    }
  },

  computed: {
    products() {
      const productSort = this.$store.getters["products"];
      return productSort.sort((a, b) => {
        if (a.model < b.model) {
          return -1;
        }
        if (a.model > b.model) {
          return 1;
        }
        return 0;
      });
    }
  }
};
</script>
<style scoped>
.AddNewButton {
  padding: 2rem;
  background-color: #161689;
  border: 1px solid rgba(66, 185, 131, 1);
  font-size: 20px;
}
</style>
