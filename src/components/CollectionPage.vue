<template>
  <div>
    <div v-for="(collection, index) in  collections " :key="index" class="my-3">
      <div class="banner"
        style="background: linear-gradient(90deg, rgba(149,143,145,1) 0%, rgba(254,254,254,0.9753151260504201) 100%);">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-6 " :class="'order-' + collection.order">
              <h4 class="mt-4" :class="{ 'text-start': collection.order === 0, 'text-end': collection.order === 1 }">
                {{ collection.name }}
              </h4>
              <p>{{ collection.info }}</p>
              <router-link :to="'/collection/' + collection.sid"
                :class="{ 'float-start': collection.order === 0, 'float-end': collection.order === 1 }">
                <button class="btn btn-dark rounded-pill mb-4">Shop Now</button>
              </router-link>
            </div>

            <div class="col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img :src="collection.primary_image" class="img-fluid float-end" style="height: 150px;">
            </div>
          </div>
        </div>
      </div>
      <div class="container my-2">
        <ProductCard :products="collection.products" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/modules/macHiddle/components/ProductCard.vue';
import sweetAlert from '@/modules/macHiddle/mixins/sweet-alert';
export default {
  name: "CollectionPage",
  mixins: [sweetAlert],
  components: {
    ProductCard
  },
  mounted() {
    this.$store.dispatch('MacStore/fetchCollections')
  },
  computed: {
    collections() {
      return this.$store.getters['MacStore/getCollections']
    }
  },

};
</script>

<style>
/* background: linear-gradient(90deg, rgba(35,31,32,1) 0%, rgba(236,195,171,1) 96%); */
</style>
