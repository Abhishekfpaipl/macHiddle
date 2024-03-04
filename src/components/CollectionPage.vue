<template>
  <div>
    <div v-for="(collection, index) in collections" :key="index" class="my-3">
      <div class="banner" style="background-color: #EFEFED;">
        <div class="container">
          <div class="row">
            <div class="col-md-8" :class="'order-' + collection.order">
              <h1 class="mt-4">{{ collection.name }}</h1>
              <p>{{ collection.info }}</p>
              <router-link :to="'/catalogs/collection' + collection.id">
                <button class="btn top-brand rounded mb-4">{{ collection.button }}</button>
              </router-link>
            </div>

            <div class="col-md-4">
              <img :src="collection.products[0].option.primary_image" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="container px-4 mt-3">
        <div class="row row-cols-2 row-cols-md-4 g-2">
          <div class="col" v-for="(product, productIndex) in collection.products" :key="productIndex">
            <router-link :to="'/product-page/' + product.slug" class="text-decoration-none text-dark">
              <div class="card rounded-0">
                <img :src="product.option.primary_image" class="card-img-top" alt="">
                <div class="card-body d-flex justify-content-between" style="font-size: 10px;">
                  <p class="card-text">₹{{ product.price }}</p>
                  <p class="card-text">{{ product.moq }} MOQ</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from '@/modules/macHiddle/axiosInstance';

export default {
  name: "CollectionPage",
  data() {
    return {
      collections: []
    };
  },
  mounted() {
    axiosInstance.get('collections').then(response => {
      this.collections = response.data.data;
    });
  }
};
</script>

<style></style>
