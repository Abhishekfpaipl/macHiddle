<template>
  <div class="">
    <h2>Color</h2>
    <div class="filter-tags">
      <span v-for="(activeFilter, index) in activeFilters" :key="index" class="filter-tag badge bg-warning mx-1">
        {{ activeFilter }}
        <i class="bi bi-x" @click="removeFilter(index)"></i>
      </span>
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="(Filtercolor, index) in Filtercolors" :key="index">
        <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" :id="Filtercolor.name" :autocomplete="Filtercolor.name"
            v-model="Filtercolor.checked" @change="toggleFilter(Filtercolor)" />
          <label class="btn btn-outline-dark rounded-0" :for="Filtercolor.name">
            {{ Filtercolor.name }}
          </label>
        </div>

      </div>
    </div>
  </div>
  <hr />
</template>
  
<script>
export default {
  name: "ColorFilter",
  data() {
    return {
      search: "",
      Filtercolor: [
        { name: "Purple", checked: false },
        { name: "Red", checked: false },
        { name: "Yellow", checked: false },
        { name: "Black", checked: false },
        { name: "White", checked: false },
        { name: "Green", checked: false },
        { name: "Blue", checked: false },
        { name: "pink", checked: false },
        { name: "Orange", checked: false },
      ],
      activeFilters: [], // To store active filters
    };
  },
  computed: {
    Filtercolors() {
      return this.Filtercolor.filter((Filtercolor) => {
        return Filtercolor.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
      });
    },
  },
  methods: {
    showmore() {
      this.count = Object.keys(this.Filtercolor).length;
    },
    showless() {
      this.count = 5;
    },
    toggleFilter(Filtercolor) {
      if (Filtercolor.checked) {
        this.activeFilters.push(Filtercolor.name); // Add filter tag when checkbox is selected
      } else {
        const index = this.activeFilters.indexOf(Filtercolor.name);
        if (index !== -1) {
          this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
        }
      }
    },
    removeFilter(index) {
      const removedColor = this.activeFilters[index];
      this.activeFilters.splice(index, 1); // Remove the filter tag

      // Find the corresponding Filtercolor object
      const colorObject = this.Filtercolor.find((color) => color.name === removedColor);
      if (colorObject) {
        colorObject.checked = false; // Uncheck the corresponding checkbox
      }
    },
  },
};
</script>
 