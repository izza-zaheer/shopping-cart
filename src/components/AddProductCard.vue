<template>
  <form>
    <div class="form-group">
      <label for="productName">Product name</label>
      <input
        type="text"
        @blur="$emit('NameonBlur', this.names)"
        v-model="names"
        class="form-control"
        id="productName"
        maxlength="32"
        placeholder="Enter product name"
      />
    </div>
    <div class="form-group">
      <label for="productDescription"
        >Product description <small class="text-muted">(optional)</small></label
      >
      <textarea
      @blur="$emit('DescriptiononBlur', this.descriptions)"
        class="form-control"
        v-model="descriptions"
        id="productDescription"
        rows="3"
        maxlength="128"
        placeholder="Enter description"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input
      @blur="$emit('PriceonBlur', this.prices)"
        type="number"
        v-model="prices"
        class="form-control"
        id="price"
        placeholder="Enter Price"
        number
      />
    </div>
    <button type="button" @click="$emit('submitBtn')" class="btn btn-primary">
      Save product
    </button>
  </form>
</template>

<script>
export default {
  props: ["name", "description", "price"],
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        name: this.name,
        description: this.description,
        price: this.price,
      });
    },
  },
  setup(props) {
    return {
      names: props.name,
      descriptions: props.description,
      prices: props.price,
    };
  },
};
</script>
