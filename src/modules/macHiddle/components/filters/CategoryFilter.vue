<template>
  <div class="mt-3">
    <h2>Category</h2>

    <!-- Display the filter tags -->
    <div class="filter-tags">
      <span v-for="(activeFilter, index) in activeFilters" :key="index" class="filter-tag badge bg-warning mx-1">
        {{ activeFilter }}
        <i class="bi bi-x" @click="removeFilter(index)"></i>
      </span>
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" :id="'category' + categoryIndex" :autocomplete="category.name"
            v-model="check" @change="toggleFilter(Filtercat)" />
          <label class="btn btn-outline-dark rounded-0" :for="'category' + categoryIndex">
            {{ category.name }}
          </label>
        </div>
      </div>
    </div>

  </div>
  <hr />
</template>
    
<script>
export default {
  name: "categoryFilter",
  props: ['categories'],
  data() {
    return {
      search: "",
      check:false,
      Filtercat: [
        { name: "Graphic T-Shirts", checked: false },
        { name: "Long Sleeve Shirts", checked: false },
        { name: "Short Sleeve Shirts", checked: false },
        { name: "Polos", checked: false },
      ],
      activeFilters: [], // To store active filters
    };
  },
  computed: {
    Filtercats() {
      return this.Filtercat.filter((Filtercat) => {
        return Filtercat.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
      });
    },
  },
  methods: {
    toggleFilter(Filtercat) {
      if (Filtercat.checked) {
        this.activeFilters.push(Filtercat.name); // Add filter tag when checkbox is selected
      } else {
        const index = this.activeFilters.indexOf(Filtercat.name);
        if (index !== -1) {
          this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
        }
      }
    },
    removeFilter(index) {
      const removedCategory = this.activeFilters[index];
      this.activeFilters.splice(index, 1); // Remove the filter tag

      // Find the corresponding Filtercat object
      const categoryObject = this.Filtercat.find((category) => category.name === removedCategory);
      if (categoryObject) {
        categoryObject.checked = false; // Uncheck the corresponding checkbox
      }
    },
  },
};
</script>
   