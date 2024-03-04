<template>
    <div class="">
        <h2>Style</h2>

        <!-- Display the filter tags -->
        <div class="filter-tags">
            <span v-for="(activeFilter, index) in activeFilters" :key="index" class="filter-tag badge bg-warning mx-1">
                {{ activeFilter }}
                <i class="bi bi-x" @click="removeFilter(index)"></i>
            </span>
        </div>

        <div class="d-flex flex-wrap">
            <div v-for="(Filterstyle, index) in Filterstyles" :key="index">
                <div class="btn-group m-2" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" class="btn-check" :id="'style' + index" :autocomplete="Filterstyle.name"
                        v-model="Filterstyle.checked" @change="toggleFilter(Filterstyle)" />
                    <label class="btn btn-outline-dark rounded-0" :for="'style' + index">
                        {{ Filterstyle.name }}
                    </label>
                </div>
            </div>
        </div>
    </div>
    <hr />
</template>
    
<script>
export default {
    name: "StyleFilter",
    data() {
        return {
            search: "",
            Filterstyle: [
                { name: "Casual ", checked: false },
                { name: "Sexy", checked: false },
                { name: "Elegant", checked: false },
                { name: "Vaccation", checked: false },
                { name: "Minimalist", checked: false },
                { name: "Sporty", checked: false },
                { name: "Girl", checked: false },
                { name: "Glamorous", checked: false },
            ],
            activeFilters: [], // To store active filters
        };
    },
    computed: {
        Filterstyles() {
            return this.Filterstyle.filter((Filterstyle) => {
                return Filterstyle.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase());
            });
        },
    },
    methods: {
        showmore() {
            this.count = Object.keys(this.Filterstyle).length;
        },
        showless() {
            this.count = 5;
        },
        toggleFilter(Filterstyle) {
            if (Filterstyle.checked) {
                this.activeFilters.push(Filterstyle.name); // Add filter tag when checkbox is selected
            } else {
                const index = this.activeFilters.indexOf(Filterstyle.name);
                if (index !== -1) {
                    this.activeFilters.splice(index, 1); // Remove filter tag when checkbox is deselected
                }
            }
        },
        removeFilter(index) {
            const removedStyle = this.activeFilters[index];
            this.activeFilters.splice(index, 1); // Remove the filter tag

            // Find the corresponding Filterstyle object
            const styleObject = this.Filterstyle.find((style) => style.name === removedStyle);
            if (styleObject) {
                styleObject.checked = false; // Uncheck the corresponding checkbox
            }
        },
    },
};
</script>
   