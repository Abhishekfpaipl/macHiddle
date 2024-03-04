<template>
    <div>
        <h2>Price</h2>
        <div id="priceSlider" ref="priceSlider"></div>
        <div class="my-2 d-flex justify-content-center align-items-center">
            <span class="fw-bold" id="lowerPrice" ref="lowerPrice"></span>
            <span> - </span>
            <span class="fw-bold" id="upperPrice" ref="upperPrice"></span>
        </div>
    </div>
</template>
  
<script>
// Import noUiSlider and wNumb
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';

export default {
    mounted() {
        this.createSlider();
    },
    methods: {
        createSlider() {
            const priceSlider = this.$refs.priceSlider;

            noUiSlider.create(priceSlider, {
                start: [599, 2999], // Starting values for the handles
                connect: true, // Display a colored bar between the handles
                range: {
                    'min': 0,
                    'max': 3000
                },
                format: wNumb({
                    decimals: 0,
                    thousand: ',',
                    prefix: ' ₹',
                })
            });

            priceSlider.noUiSlider.on('update', (values, handle) => {
                if (handle) {
                    this.$refs.upperPrice.innerHTML = values[handle];
                } else {
                    this.$refs.lowerPrice.innerHTML = values[handle];
                }
            });
        }
    }
};
</script>
  
<style>
/* You can include some styles for your slider here */
</style>
  