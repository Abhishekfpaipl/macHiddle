<template>
  <div>
    <div v-if="Object.keys(collections).length > 0">
      <div v-for="(collection, index) in  collections " :key="index" class="my-3">
        <div v-if="collection.type === 'section'">
          <div class="banner"
            style="background: linear-gradient(90deg, rgba(149,143,145,1) 0%, rgba(254,254,254,0.9753151260504201) 100%);">
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-6 " :class="'order-' + collection.order">
                  <h4 class="mt-4"
                    :class="{ 'text-start': collection.order === 0, 'text-end': collection.order === 1 }">
                    {{ collection.name }}
                  </h4>
                  <p>{{ collection.info }}</p>
                  <router-link :to="'/collection/' + collection.sid"
                    :class="{ 'float-start': collection.order === 0, 'float-end': collection.order === 1 }">
                    <button class="btn btn-dark rounded-pill mb-4">Shop Now</button>
                  </router-link>
                </div>

                <div class="col-md-4 col-6 d-flex align-items-center "
                  :class="{ 'justify-content-end': collection.order === 0, 'justify-content-start': collection.order === 1 }">
                  <img :src="collection.primary_image" class="img-fluid float-end" style="height: 150px;">
                </div>
              </div>
            </div>
          </div>
          <div class="container my-2">
            <ProductCard :products="collection.products" />
          </div>
        </div>

        <div v-if="collection.type === 'banner'" class="row g-0">
          <div class="col-6 col-lg-8 d-flex align-items-center px-2" :class="'order-' + collection.order">
            <div class="flex-fill"
              :class="{ 'text-end': collection.order === 1, 'text-start': collection.order === 0 }">
              <h1>{{ collection.name }}</h1>
              <p>{{ collection.slug }}</p>
            </div>
          </div>
          <div class="col-6 col-lg-4">
            <img :src="collection.primary_image" :class="{ 'float-end': collection.order === 0 }" class="img-fluid"
              width="250" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-else class="placeholder-glow my-1 container-fluid">
      <div class="row">
        <div class="col-12 placeholder" style="height:155px"></div>
      </div>
      <div class="container my-2">
        <div class="row row-cols-3 row-cols-md-4 g-2">
          <div class="col" v-for="item in [1, 2, 3, 4]" :key="item">
            <div class="card rounded-0">
              <div class="placeholder" style="height:195px;"></div>
            </div>
            <div class="my-1 col-12 placeholder" style="height: 20px;"></div>
            <div class="my-1 col-6 placeholder" style="height: 20px;"></div>
          </div>
        </div>
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
