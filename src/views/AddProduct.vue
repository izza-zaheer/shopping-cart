<template>
  <Wrapper>
    <AddProductCard
      @NameonBlur="NameonBlur"
      @DescriptiononBlur = "DescriptiononBlur"
      @PriceonBlur = "PriceonBlur"
      @submitBtn="submitBtn"
      :price="price"
      :name="name"
      :description="description"
    />
  </Wrapper>
</template>

<script>
import AddProductCard from "@/components/AddProductCard.vue";
import Wrapper from "@/components/Wrapper.vue";

export default {
  components: {
    AddProductCard,
    Wrapper,
  },

  computed: {
    products() {
      const productSort = this.$store.getters["products"];
      return productSort;
    },
  },
  methods: {
    NameonBlur(val) {
      console.log("NameonBlur", val);
      this.name = val
    },
    DescriptiononBlur(val){
      console.log("DescriptiononBlur", val);
        this.description = val
    },
    PriceonBlur(val){
        console.log("PriceonBlur",val);
        this.description = val
    },
    submitBtn() {
      console.log("submitBtn", this.name, this.description, this.price);
      this.$store.dispatch("addNewProduct", {
        name: this.name,
        description: this.description,
        price: this.price,
      });
    },
  },
  setup() {
    return {
      name: "izza",
      description: "hehe",
      price: "100",
    };
  },
};
</script>
