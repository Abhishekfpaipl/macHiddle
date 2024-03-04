<template>
    <div class=""> 
      <h2>Size</h2>
      <!-- Display the filter tags -->
      <div class="filter-tags">
        <span v-for="(activeFilter, index) in activeFilters" :key="index" class="filter-tag badge bg-warning mx-1">
          {{ activeFilter }}
          <i class="bi bi-x" @click="removeFilter(index)"></i>
        </span>
      </div>
  
      <div class="d-flex flex-wrap">
        <div v-for="(Filtersize, index) in Filtersizes" :key="index">
            <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" class="btn-check" :id="Filtersize.name" :autocomplete="Filtersize.name"
                v-model="Filtersize.checked" @change="toggleFilter(Filtersize)" />
              <label class="btn btn-outline-dark rounded-0" :for="Filtersize.name">
                {{ Filtersize.name }}
              </label>
            </div>
        </div>
      </div>
    </div>
    <hr />
  </template>
    
  <script>
  export default {
    name: "SizeFilter",
    data() {
      return {
        search: "",
        Filtersize: [
          { name: "XS", checked: false },
          { name: "S", checked: false },
          { name: "M", checked: false },
          { name: "L", checked: false },
          { name: "XL", checked: false },
          { name: "XXL", checked: false },
          { name: "XXXL", checked: false },
          { name: "Free", checked: false },
        ],
        activeFilters: [], // To store active filters
      };
    },
    computed: {
      Filtersizes() {
        return this.Filtersize.filter((Filtersize) => {
          return Filtersize.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
        });
      },
    },
    methods: {
      showmore() {
        this.count = Object.keys(this.Filtersize).length;
      },
      showless() {
        this.count = 5;
      },
      toggleFilter(Filtersize) {
        if (Filtersize.checked) {
          this.activeFilters.push(Filtersize.name); // Add filter tag when checkbox is selected
        } else {
          const index = this.activeFilters.indexOf(Filtersize.name);
          if (index !== -1) {
            this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
          }
        }
      },
      removeFilter(index) {
        const removedSize = this.activeFilters[index];
        this.activeFilters.splice(index, 1); // Remove the filter tag
  
        // Find the corresponding Filtersize object
        const sizeObject = this.Filtersize.find((size) => size.name === removedSize);
        if (sizeObject) {
          sizeObject.checked = false; // Uncheck the corresponding checkbox
        }
      },
    },
  };
  </script>
   