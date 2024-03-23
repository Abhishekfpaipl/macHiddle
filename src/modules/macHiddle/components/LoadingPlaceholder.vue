<template>
    <div class="container bg-white placeholder-glow"><!-- Product Name & Share -->
        <div class="d-flex justify-content-between gap-2 align-items-center pt-2  placeholder">
            <div class="mb-0 text-dark font-app text-capitalize flex-fill lh-sm"></div>
            <div class="d-flex justify-content-between w-25">
                <button class="btn border-0 zoom-on-hover py-0"></button>
                <button class="btn zoom-on-hover placeholder col-2"> </button>

                <!--v-if-->
            </div>
        </div>
        <!-- Discount, MRP, Price & Reviews  -->
        <div class="my-3  placeholder">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between w-100 align-items-center fw-bold">
                    <!-- Discount & Price -->
                    <div class="d-flex align-items-center" style="min-width: 160px;">
                        <!-- Discount Rate -->
                        <span class="fs-3 text-danger mb-0 me-2 ls-2"></span>
                        <!-- Price -->
                        <span class="fs-3 fw-bolder currency"></span>
                        <span class="ps-1 fw-normal mt-auto mb-1">/ pc</span>
                    </div>
                    <!-- Brand -->
                    <a href="/brands/machiddle" class="td-none">
                        <div class="d-flex flex-column" style="min-width: 100px;">
                            <div class="font-title text-center fw-bold rounded px-2"
                                style="background-color: rgb(35, 31, 32); color: rgb(233, 195, 174); font-size: 1.2rem;">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <!-- MRP -->
                <span class="d-flex flex-fill">
                    <span class="text-decoration-line-through opacity-25 currency">MRP: ₹400.00</span>
                    <span class="ps-2 text-heading ">Inclusive of all taxes</span>
                </span>
                <!-- Products Ratings -->
                <div class="d-flex justify-content-center align-items-center">
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                </div>
            </div>
        </div>
        <section class="mb-3">
            <!-- Display Selected Color -->
            <div class="d-flex gap-2 mb-2 placeholder">
                <span class="fw-500 fh-1 text-muted mb-0"></span>
                <span class="fw-500 fh-1 ps-2 mb-0 text-capitalize"></span>
            </div>
            <ul class="list-unstyled d-flex w-100 overflow-scroll hide-scrollbar placeholder">
                <li class="me-2">
                    <input type="radio" name="color" class="btn-check" autocomplete="off" id="option-0-toggle">
                    <label class="btn btn-outline-secondary border-opacity-50"
                        for="option-0-toggle" style="padding: 1px; height: 50px; width: 50px;">
                        <div class="overflow-hidden position-relative"
                            style="height: 46px; width: 46px;">
                            <span class="wh-60 of-fill"></span>
                        </div>
                    </label>
                </li>
            </ul>
        </section>
        <div class="" style="margin: 0px -0.75rem;">
            <img class="position-fixed top-50 start-0 mx-auto mt-5 pt-5"
                src="http://192.168.1.184:9000/storage/3/conversions/WqXj0mMg7IhWLvUN3yvDzL1pDuB8qrEk44ztlyfE-s100.webp"
                style="scale: 2; filter: blur(1px); z-index: -1;">
            <div class="mx-3 mb-3 placeholder col-8">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex">
                        <span class="fw-bold text-muted me-2"></span>
                        <span class="fw-bold text-danger"></span>
                    </div>
                </div>
            </div>
            <div class="table-responsive min-vw-100 border placeholder">
                <table class="table table-borderless mb-0 w-100 placeholder">
                    <!-- Top Heading Row -->
                    <thead>
                        <tr>
                            <!-- Expand and Collapse Table, at position X1:Y1 -->
                            <td class="sticky-col table-secondary border-bottom" style="width: 80px;">
                                <div class="d-flex flex-column align-items-center justify-content-center text-muted fs-5"
                                    style="height: 30px;">
                                    <div class=""></div>
                                    <div class="mt-1 smallest" style="display: none;">Collapse</div>
                                </div>
                            </td>
                            <!-- Table x-axis headings, i.e. product ranges -->
                            <td class="table-light sticky-row">
                                <span class="text-uppercase small font-heading fw-bold"></span>
                                <span class="text-muted smallest text-center" style="display: none;"></span>
                            </td>
                            <!-- Expand and Collapse Table, at position X1:Y1 -->
                            <td class="table-secondary" style="min-width: 55px; display: none;">
                                <div class="d-flex font-heading small justify-content-center flex-column align-items-center text-muted"
                                    style="height: 50px;"> Total </div>
                            </td>
                        </tr>
                    </thead>
                    <!-- Main Table Body -->
                    <tbody>
                        <!-- Each row repersent respective options of that range column -->
                        <tr>
                            <!-- Table y-axis headings, i.e. product options -->
                            <td class="table-light sticky-col d-flex flex-column justify-content-center align-items-center"
                                style="width: 80px;">
                                <div class="overflow-hidden rounded" data-bs-toggle="modal"
                                    data-bs-target="#imagePreviewModal"
                                    data-bs-url="http://192.168.1.184:9000/storage/3/conversions/WqXj0mMg7IhWLvUN3yvDzL1pDuB8qrEk44ztlyfE-s800.webp"
                                    style="height: 40px; width: 50px;">
                                    <span class="wh-60 of-fill"></span>
                                </div>
                                <div class="mt-1 fw-bold text-muted smallest text-capitalize " style="display: none;">
                                    Maroo</div>
                            </td>
                            <!-- Table cells, i.e. product quantities -->
                            <td class="text-center" style="min-width: 60px; max-width: 80px;">
                                <div class="btn btn-light border brand-btn-s"
                                    style="padding-bottom: 4px; width: 55px;">
                                    <div class="d-flex flex-column justify-content-center"></div>
                                </div>
                            </td>
                            <!-- Row Total -->
                            <td class="table-secondary" style="display: none;">
                                <div
                                    class="table-light d-flex flex-column justify-content-center align-items-center placeholder">
                                    <p class="mx-2 mt-1 mb-2 px-1 pt-1 font-heading lh-1">0</p>
                                    <div class="fw-bold text-muted smallest text-capitalize" style="display: none;"> ₹ 0
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <!-- Column Total -->
                        <tr class="table-secondary" style="display: none;">
                            <td class="sticky-col">
                                <div class="d-flex font-heading small justify-content-center flex-column align-items-center text-muted placeholder"
                                    style="height: 50px;"> Total </div>
                            </td>
                            <td style="min-width: 60px;">
                                <div class="d-flex flex-column justify-content-center align-items-center placeholder">
                                    <p class="mx-2 mt-1 mb-2 px-1 pt-1 font-heading lh-1">0</p>
                                    <div class="fw-bold text-muted smallest text-capitalize"> ₹ 0
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex flex-column justify-content-center align-items-center placeholder">
                                    <p class="mx-2 mt-1 mb-2 px-1 pt-1 font-heading lh-1">0</p>
                                    <div class="fw-bold text-muted smallest text-capitalize"> ₹ 0
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Product Actions border-bottom-->
            <div class="m-3 font-title">
                <button class="btn p-0 border-0 rounded overflow-hidden w-100">
                    <div class="d-flex justify-content-center align-items-center p-2 text-bg-danger  placeholder">
                        <i class="bi bi-cart-check-fill fs-5 lh-1 placeholder col-2"></i>
                        <span class="ms-3 fw-bold placeholder col-8"></span>
                    </div>
                </button>
            </div>
        </div>
        <div class="card mb-3 border-0 placeholder col-12">
            <p class="text-clip mb-1 font-title text-uppercase smaller ls-1 fw-bold placeholder col-6"></p>
            <div class="card-body border smaller py-2 ">
                <div class="row">
                    <div class="placeholder col-3"></div>
                    <div class="placeholder col-3"></div>
                    <div class="placeholder col-3"></div>
                    <div class="placeholder col-3"></div>
                </div>
                <button class="btn text-muted pt-3 px-0 border-0 d-flex justify-content-between w-100">
                    <span class="smaller placeholder col-4"></span>
                    <i class="bi bi-chevron-down"></i>
                </button>
            </div>
        </div>


        <div class="mb-3 placeholder col-12">
            <div class="d-flex justtify-content-between w-100 font-title">
                <ul class="nav nav-tabs border-0 flex-fill align-items-center">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link border-0 px-2 smaller"> </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link border-0 px-2 smaller"> </button>
                    </li>
                </ul>
                <ul class="nav nav-tabs border-0">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link border-0 px-2 smaller"> </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link border-0 px-2 smaller"> </button>
                    </li>
                </ul>
            </div>
            <table class="table table-sm mt-1 mb-2 table-borderless rounded overflow-hidden font-title  ">
                <thead class="table-secondary border border-bottom-0">
                    <tr>
                        <td class="small ps-2 fw-500"></td>
                    </tr>
                </thead>
                <tbody class="border">
                </tbody>
            </table>
            <p class="mb-0 font-app text-muted small lh-sm placeholder col-12"></p>
        </div>


        <section class="my-3 placeholder-glow">
            <div class="d-flex justify-content-between mb-2 placeholder">
                <div class="d-flex justify-content-between align-items-end w-100">
                    <p class="text-clip mb-1 font-title text-uppercase smaller ls-1 fw-bold">Check Delivery</p>
                    <button class="btn btn-link btn-sm py-0 px-3 border-0 text-dark"><i
                            class="bi bi-arrow-clockwise"></i></button>
                </div>
            </div>
            <div class="input-group mb-1">
                <input type="text" class="form-control form-control-sm placeholder" placeholder="Enter Your Pincode"
                    aria-label="Enter Your Pincode" aria-describedby="inputPincode">
                <button class="input-group-text placeholder" id="inputPincode"><small>Check</small></button>
            </div>
            <!--v-if-->
            <!--v-if-->
        </section>
        <section class="pb-4 placeholder-glow">
            <p class="text-clip mb-1 font-title text-uppercase smaller ls-1 fw-bold placeholder">Services Terms</p>
            <ul class="list-group rounded-0 mt-2">
                <li class="list-group-item align-items-center small placeholder"><i class="bi bi-truck me-3"></i><span
                        class="fh-2">Pick-up &amp; Drop Shipping facility</span></li>
                <li class="list-group-item align-items-center small placeholder"><i
                        class="bi bi-shield-check me-3"></i><span class="fh-2">Secure &amp; Easy Payment System</span>
                </li>
                <li class="list-group-item align-items-center small placeholder"><i class="bi bi-headset me-3"></i><span
                        class="fh-2">10am to 6pm Support</span></li>
                <li class="list-group-item align-items-center small placeholder"><i
                        class="bi bi-credit-card-2-front me-3"></i><span class="fh-2">Defective Product Return
                        Available</span></li>
            </ul>
        </section>
    </div>

</template>

<script>
export default {
    name: 'LoadingPlaceholder',
}
</script>

<style lang="scss" scoped></style>