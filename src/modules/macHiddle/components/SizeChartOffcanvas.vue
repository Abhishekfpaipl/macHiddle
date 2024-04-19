<template>
    <div class=" offcanvas offcanvas-end" tabindex="-1" id="sizeChart" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Size Chart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body px-2">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active rounded-0" id="home-tab" data-bs-toggle="tab"
                        data-bs-target="#SizeChart-tab-pane" type="button" role="tab" aria-controls="SizeChart-tab-pane"
                        aria-selected="true">SizeChart</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-0" id="Measure-tab" data-bs-toggle="tab" data-bs-target="#Measure-tab-pane"
                        type="button" role="tab" aria-controls="Measure-tab-pane" aria-selected="false">How To
                        Measure</button>
                </li>

            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="SizeChart-tab-pane" role="tabpanel"
                    aria-labelledby="SizeChart-tab" tabindex="0">
                    <div class="">
                        <ul class="nav nav-tabs d-flex justify-content-between align-items-center border-0">
                            <span class="fw-bold small">Product Measurements</span>
                            <div class="d-flex">
                                <li class="nav-item">
                                    <button class="nav-link border-0 px-2 small active" data-bs-toggle="tab" id="tab1"
                                        href="#content1">CM</button>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link border-0 px-2 small" data-bs-toggle="tab" id="tab2"
                                        href="#content2">In</button>
                                </li>
                            </div>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="content1">
                                <table class="table border border-1">
                                    <thead class="table-secondary">
                                        <tr>
                                            <th scope="row">Size</th>
                                            <template v-for="(size, index) in sizes" :key="index">
                                                <td>{{ size }}</td>
                                            </template>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(measurements, key) in measurementsData" :key="key">
                                            <th scope="row" class="table-secondary">{{ key }}</th>
                                            <template v-for="(value, index) in measurements" :key="index">
                                                <td>{{ value }}</td>
                                            </template>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div class="tab-pane fade" id="content2">
                                <table class="table border border-1">
                                    <thead class="table-secondary">
                                        <tr>
                                            <th scope="row">Size</th>
                                            <template v-for="(size, index) in sizes" :key="index">
                                                <td>{{ size }}</td>
                                            </template>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(measurements, key) in measurementsDataIn" :key="key">
                                            <th scope="row" class="table-secondary">{{ key }}</th>
                                            <template v-for="(value, index) in measurements" :key="index">
                                                <td>{{ value }}</td>
                                            </template>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="Measure-tab-pane" role="tabpanel" aria-labelledby="Measure-tab"
                    tabindex="0">
                    <div class="mt-2">
                        <img :src="`${publicPath}${measureImg}`" alt="Size Chart" style="width: 100%;">
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
            measureImg: 'img/mensHowToMeasure.jpg',
            sizes: ['S', 'M', 'L', 'XL', 'Free'],
            measurementsData: {
                'Chest': [96, 101, 106, 111, 'Free'],
                'Shoulder': [42, 43, 44, 46, 'Free'],
                'Length': [69, 71, 74, 76, 'Free'],
                // 'Waist': [58, 62, 66, 68, 'Free']
            },
            measurementsDataIn: {
                'Chest': [38, 40, 42, 44, 'Free'],
                'Shoulder': [16.5, 17, 17.5, 18, 'Free'],
                'Length': [27, 28, 29, 30, 'Free'],
                // 'Waist': [58, 62, 66, 68, 'Free']
            }
        };
    },
}
</script>

<style scoped>
.nav-tabs .nav-link.active{
    background-color: transparent !important;
}
</style>