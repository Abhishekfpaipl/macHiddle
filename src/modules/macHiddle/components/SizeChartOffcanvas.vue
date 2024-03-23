<template>
    <div class=" offcanvas offcanvas-end" tabindex="-1" id="sizeChart" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Size Chart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body px-2">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <!-- <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                        data-bs-target="#SizeChart-tab-pane" type="button" role="tab" aria-controls="SizeChart-tab-pane"
                        aria-selected="true">SizeChart</button>
                </li> -->
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="Fit-tab" data-bs-toggle="tab" data-bs-target="#Fit-tab-pane"
                        type="button" role="tab" aria-controls="Fit-tab-pane" aria-selected="false">Fit
                        Guide</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Measure-tab" data-bs-toggle="tab" data-bs-target="#Measure-tab-pane"
                        type="button" role="tab" aria-controls="Measure-tab-pane" aria-selected="false">How To
                        Measure</button>
                </li>

            </ul>
            <div class="tab-content" id="myTabContent">
                <!-- <div class="tab-pane fade show active" id="SizeChart-tab-pane" role="tabpanel"
                    aria-labelledby="SizeChart-tab" tabindex="0">
                    <SizeChart class="py-2 mt-2"></SizeChart>
                </div> -->
                <div class="tab-pane fade show active" id="Fit-tab-pane" role="tabpanel" aria-labelledby="Fit-tab" tabindex="0">
                    <div class="mt-2">
                        <img :src="img" style="width: 100%;">
                    </div>
                </div>
                <div class="tab-pane fade" id="Measure-tab-pane" role="tabpanel" aria-labelledby="Measure-tab"
                    tabindex="0">
                    <div class="mt-2">
                        <img :src="measureImg" style="width: 100%;">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script> 
import SizeChart from '@/modules/macHiddle/components/SizeChart.vue'
export default {
    name: 'SizeChartOffcanvas',
    component: {
        SizeChart
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/Solids-Rusty-Red-Women-Cropped-Top_FG_WEB_mcnBLsO.jpg?format=webp&w=400&dpr=1.3',
            measureImg: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/Solids-Rusty-Red-Women-Cropped-Top_FG_WEB_MEASURE_M02UEvv.jpg?format=webp&w=400&dpr=1.3',
        };
    },
}
</script>

<style lang="scss" scoped></style>