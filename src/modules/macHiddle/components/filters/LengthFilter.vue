<template>
  <div class="">
    <h2>Length</h2>

    <!-- Display the filter tags -->
    <div class="filter-tags">
      <span v-for="(activeFilter, index) in activeFilters" :key="index" class="filter-tag badge bg-warning mx-1">
        {{ activeFilter }}
        <i class="bi bi-x" @click="removeFilter(index)"></i>
      </span>
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="(Filterlength, index) in Filterlengths" :key="index">
        <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" :id="'length' + index" :autocomplete="Filterlength.name"
            v-model="Filterlength.checked" @change="toggleFilter(Filterlength)" />
          <label class="btn btn-outline-dark rounded-0" :for="'length' + index">
            {{ Filterlength.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>
    
<script>
export default {
  name: "LengthFilter",
  data() {
    return {
      search: "",
      Filterlength: [
        { name: "Crop", checked: false },
        { name: "Regular", checked: false },
        { name: "Hip", checked: false },
        { name: "Short", checked: false },
        { name: "Knee Length", checked: false },
        { name: "CApris", checked: false },
        { name: "Midi", checked: false },
        { name: "Above Ankle", checked: false },
        { name: "Long", checked: false },
        { name: "Maxi", checked: false },
      ],
      activeFilters: [], // To store active filters
    };
  },
  computed: {
    Filterlengths() {
      return this.Filterlength.filter((Filterlength) => {
        return Filterlength.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
      });
    },
  },
  methods: {
    showmore() {
      this.count = Object.keys(this.Filterlength).length;
    },
    showless() {
      this.count = 5;
    },
    toggleFilter(Filterlength) {
      if (Filterlength.checked) {
        this.activeFilters.push(Filterlength.name); // Add filter tag when checkbox is selected
      } else {
        const index = this.activeFilters.indexOf(Filterlength.name);
        if (index !== -1) {
          this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
        }
      }
    },
    removeFilter(index) {
      const removedLength = this.activeFilters[index];
      this.activeFilters.splice(index, 1); // Remove the filter tag

      // Find the corresponding Filterlength object
      const lengthObject = this.Filterlength.find((length) => length.name === removedLength);
      if (lengthObject) {
        lengthObject.checked = false; // Uncheck the corresponding checkbox
      }
    },
  },
};
</script>
   