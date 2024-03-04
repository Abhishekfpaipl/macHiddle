<template>
    <div class="container py-3">
        <div class="d-flex">
            <div class="input-group">
                <div class="form-outline d-flex" style="border-radius: 0% !important;">
                    <input type="search" id="form1" class="form-control" placeholder="Search"
                        style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                    <button type="button" class="btn btn-primary"
                        style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div class="d-flex">
                <div class="mx-1 ms-2 btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <i class="bi bi-funnel fs-4"></i>
                </div>
                <div class="mx-1 btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleOne"
                    aria-controls="offcanvasExampleOne">
                    <i class="bi bi-arrow-down-up fs-4"></i>
                </div>
                <div class="mx-1 btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleTwo"
                    aria-controls="offcanvasExampleTwo">
                    <i class="bi bi-info-lg fs-4"></i>
                </div>
            </div>
        </div>



        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            style="height:60vh ;">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                <div class="d-flex">
                    <button data-bs-dismiss="offcanvas" aria-label="Close"
                        class="btn py-2 px-4 mx-2 btn-outline-dark">Clear</button>
                    <button data-bs-dismiss="offcanvas" aria-label="Close"
                        class="btn py-2 px-4 mx-2 btn-outline-dark">Apply</button>
                </div>

            </div>
            <div class="offcanvas-body">

                <div class="accordion accordion-flush" id="accordionFlushExample">

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                By Date
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body d-flex gap-4 flex-wrap">
                                <div class="d-flex gap-2 w-100 mb-3">

                                    <div class="form-floating flex-fill">
                                        <input type="date" class="form-control" id="floatingInput">
                                        <label for="floatingInput">Start Date</label>
                                    </div>
                                    <div class="form-floating flex-fill">
                                        <input type="date" class="form-control" id="floatingInput2">
                                        <label for="floatingInput2">End Date</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                By Amount
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="d-flex w-100">
                                    <input type="number" placeholder="Min" class="form-control-sm w-50">--
                                    <input type="number" placeholder="Max" class="form-control-sm w-50">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                By Color
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body ">
                                <!-- <div v-for="(sup, index) in suppliers" :key="index" class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                                    <label class="form-check-label" for="flexCheckChecked">
                                          {{ sup.name }}
                                    </label>
                                </div> -->
                                <div class="d-flex gap-2">
                                    <div v-for="(color, index) in colors" :key="index" @click="selectColor(index)"
                                        :style="{ backgroundColor: color }" style="height: 30px; width: 30px;"
                                        :class="{ 'selected-color': isSelected(index) }"
                                        class="d-flex color-option rounded-circle"></div>
                                </div>
                                <p class="selected-color-name mt-2">{{ selectedColorNames }}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleOne"
            aria-labelledby="offcanvasExampleLabel" style="height: 60vh;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="w-100">
                        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
                            <div class="d-flex justify-content-between" v-for="(paragraph, index) in paragraphs"
                                :key="index">
                                <p :style="{ color: paragraphColor(paragraph) }" @click="changeColorAndCheck(paragraph)">
                                    {{ paragraph.text }}
                                </p>
                                <p v-if="paragraph.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleTwo"
            aria-labelledby="offcanvasExampleLabel" style="height: 60vh;">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Status</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    <div class="w-100">
                        <div class="" data-bs-dismiss="offcanvas">
                            <p class="mt-2 mb-1 fw-bold">Delivery Status</p>
                            <div class="d-flex flex-column ">
                                <div class="d-flex align-items-center my-1">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-clock-history fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Delivery Pending</p>
                                </div>
                                <div class="d-flex align-items-center text-primary my-1">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-send fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Delivery Shipped</p>
                                </div>
                                <div class="d-flex align-items-center text-success my-1">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-check-circle fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Delivery Completed</p>
                                </div>
                                <div class="d-flex align-items-center text-danger my-1">
                                    <i class="bi bi-truck fs-5 px-2"></i>
                                    <i class="bi bi-x-circle fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Delivery Cancelled</p>
                                </div>
                            </div>
                            <p class="mt-4 mb-1 fw-bold">Payment Status</p>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center my-1">
                                    <i class="bi bi-wallet2 fs-5 px-2"></i>
                                    <i class="bi bi-clock-history fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Payment Pending</p>
                                </div>
                                
                                <div class="d-flex align-items-center text-success my-1">
                                    <i class="bi bi-wallet2 fs-5 px-2"></i>
                                    <i class="bi bi-check-circle fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Payment Completed</p>
                                </div>
                                
                                <div class="d-flex align-items-center text-danger my-1">
                                    <i class="bi bi-wallet2 fs-5 px-2"></i>
                                    <i class="bi bi-x-circle fs-5 px-1"></i>
                                    <p class="mb-0 px-2">Payment Cancelled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'OrderFilter',
    data() {
        return {
            paragraphs: [
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false }
            ],
            isScrollingDown: false,
            prevScrollPos: window.pageYOffset,
            colors: ["Red", "Blue", "Green", "Yellow", "Orange", "Black"],
            selectedIndexes: [],
        }
    },
    methods: {
        selectColor(index) {
            if (this.isSelected(index)) {
                const selectedIndex = this.selectedIndexes.indexOf(index);
                this.selectedIndexes.splice(selectedIndex, 1);
            } else {
                this.selectedIndexes.push(index);
            }
        },
        isSelected(index) {
            return this.selectedIndexes.includes(index);
        },

        paragraphColor(paragraph) {
            return paragraph.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedParagraph) {
            for (const paragraph of this.paragraphs) {
                if (paragraph === clickedParagraph) {
                    paragraph.selected = true;
                } else {
                    paragraph.selected = false;
                }
            }
        },
    },
    computed: {
        selectedColorNames() {
            if (this.selectedIndexes.length > 0) {
                return this.selectedIndexes.map(
                    (index) => this.colors[index]
                ).join(", ");
            } else {
                return "No color selected";
            }
        },
    },
}
</script>

<style  scoped>
.selected-color {
    border: 1px solid black;
}

.container {
    transition: transform 0.3s ease-in-out;
}

.hide-on-scroll {
    transform: translateY(-200%);
}
</style>