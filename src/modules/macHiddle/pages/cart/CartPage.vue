<template>
    <CartTopNav />
    <div class="container pb-5 mt-5">
        <CartStepper />
        <div v-if="cartProducts && cartProducts.products && cartProducts.products.length === 0"
            class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
            style="height: 50%; padding: 90px 0px;">
            <i class="bi bi-cart fs-1"></i>
            <h3>Your cart is empty.</h3>
            <router-link to="/" class="text-decoration-none text-dark mt-3">
                <button class="btn btn-warning">Stat Shopping</button>
            </router-link>
        </div>
        <div v-else class="row mt-3">
            <div class="col-12 col-md-8 ">
                <div class="alert alert-danger p-2 mt-2" v-if="reqAmt > cartProducts.total">
                    You're just ₹{{ reqAmt - cartProducts.total }} away from unlocking free delivery!
                    Shipping charges on the below order are ₹99.
                </div>

                <div v-else class="alert alert-success p-2 mt-2">
                    Congratulations! You have successfully unlocked free delivery on this order.
                    Shipping is free for this order!
                </div>
                <div v-for="(cart, index) in cartProducts.products" :key="index" class="border">
                    <div class="d-flex p-2">
                        <img class="rounded" v-if="cart.option" :src="cart.option.primary_image"
                            style="height: 155px; width: 125px; object-fit: fill;">
                        <div class="d-md-flex justify-content-between ms-2 w-100">
                            <div class="">
                                <p class=" mb-0" style="font-weight: 600;">{{ cart.name }}</p>
                                <div class="d-flex gap-3 my-1">
                                    <div class="form-group w-100 d-flex align-items-center">
                                        <label for="sizeSelect">Size:</label>
                                        <select v-if="cart.range" class="form-control-sm ms-2 text-uppercase"
                                            id="sizeSelect" disabled>
                                            <option v-if="cart.range">{{ cart.range.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group w-100 d-flex align-items-center">
                                        <label for="quantitySelect">Qty:</label>
                                        <!-- <select v-model="cart.quantity" class="form-control-sm ms-2" id="quantitySelect"
                                            @change="updateQuantity(cart)">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select> -->
                                        <select v-model="cart.quantity" class="form-control-sm ms-2" id="quantitySelect"
                                            @change="updateQuantity(cart)">
                                            <option v-for="quantity in getQuantityOptions(cart)" :key="quantity"
                                                :value="quantity">{{ quantity }}</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-2 my-1">
                                    <p class="mb-0">Color: </p>
                                    <p v-if="cart.option" class="mb-0">{{ cart.option.name }}</p>
                                </div>
                            </div>
                            <div class="">
                                <p class="mb-0 fw-bold">₹ {{ cart.price }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-md-none d-flex gap-2 p-2">
                        <button class="btn btn-outline-dark btn-sm w-100" @click="removeFromCart(cart)"><i
                                class="bi bi-trash3 pe-2"></i> Remove</button>
                        <button class="btn btn-outline-dark btn-sm w-100" @click="saveProduct(cart)"><i
                                class="bi bi-heart pe-2"></i>Move to
                            WishList</button>
                    </div>
                    <div class="d-md-flex d-none justify-content-end gap-2 p-2">
                        <button class="btn btn-outline-dark " @click="removeFromCart(cart)"><i
                                class="bi bi-trash3 pe-2"></i>
                            Remove</button>
                        <button class="btn btn-outline-dark " @click="saveProduct(cart)"><i
                                class="bi bi-heart pe-2"></i> Move to
                            WishList</button>
                    </div>
                </div>
                <div class="">
                    <YouMayLike />
                </div>
            </div>

            <div class="col-12 col-md-4">
                <div v-if="cartProducts && cartProducts.products && cartProducts.products.length > 0"
                    class="d-none d-md-block list-group rounded-0">
                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <span class="fw-bold">Subtotal:</span>
                        <span>₹ {{ cartProducts.amount }}</span>
                    </div>

                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <span class="fw-bold">GST:</span>
                        <span>₹ {{ cartProducts.tax }}</span>
                    </div>

                    <div class="d-flex justify-content-between py-2 list-group-item">
                        <span class="fw-bold">Grand Total:</span>
                        <span>₹ {{ cartProducts.total }}</span>
                    </div>
                    <router-link to="/my-address" v-if="Object.keys(address).length === 0"
                        class="btn btn-danger rounded-0 d-flex align-items-center justify-content-center">Add Address
                    </router-link>
                    <router-link to="/payment-page" v-else
                        class="btn btn-danger rounded-0 d-flex align-items-center justify-content-center">Checkout
                    </router-link>

                </div>
                <!-- <router-link to="/payment-page" class="d-md-block d-none">
                        <button class="btn btn-outline-dark w-100">Checkout</button>
                    </router-link>
                    <div class="accordion mb-2" id="accordionExample">
                        <div class="accordion-item my-2">
                            <h2 class="accordion-header">
                                <button class="accordion-button d-flex align-item-center collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#coupon" aria-expanded="true"
                                    aria-controls="coupon">
                                    <i class="bi bi-tag fs-4 me-2"></i> Apply Coupon
                                </button>
                            </h2>
                            <div id="coupon" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Coupon Code"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        <span class="input-group-text" id="basic-addon2">Apply</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item my-2">
                            <h2 class="accordion-header">
                                <button class="accordion-button d-flex align-item-center collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#voucher" aria-expanded="false"
                                    aria-controls="voucher">
                                    <i class="bi bi-tag fs-4 me-2"></i> Gift Voucher
                                </button>
                            </h2>
                            <div id="voucher" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Gift Voucher Code"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        <span class="input-group-text" id="basic-addon2">Apply</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border py-2 d-flex justify-content-between container">
                        <p class="mb-0">
                            <i class="fs-5  mx-2 bi bi-gift"></i> Gift Wrap (₹ 25)
                        </p>
                        <input class="form-check-input mt-2" type="checkbox" v-model="giftWrapChecked"
                            id="giftWrapCheckbox">

                    </div> -->
                <PriceDetails :cartProducts="cartProducts" />
                <!-- <div class="my-2">
                    <p class="mb-0 text-muted ms-3 ">Billing Details</p>
                </div> -->
            </div>

        </div>
    </div>
    <div v-if="cartProducts && cartProducts.products && cartProducts.products.length > 0"
        class="btn-group rounded-0 d-md-none w-100 position-fixed"
        style="z-index: 10;height: 63px; bottom: 0; background: #f6f6f6;">
        <div class="btn btn-dark rounded-0 d-flex flex-column" data-bs-toggle="offcanvas" data-bs-target="#priceDetails"
            aria-controls="priceDetails">
            <span class="">₹ {{ cartProducts.total }}</span>
            <div class="d-flex justify-content-center">
                <small>View Detials</small> <i class="ps-1 bi bi-caret-up-fill"></i>
            </div>
        </div>
        <router-link to="/my-address" v-if="Object.keys(address).length === 0"
            class="btn btn-danger rounded-0 d-flex align-items-center justify-content-center">Add Address
        </router-link>
        <router-link to="/payment-page" v-else
            class="btn btn-danger rounded-0 d-flex align-items-center justify-content-center">Checkout
        </router-link>
    </div>
</template>

<script>
import YouMayLike from '@/modules/macHiddle/components/YouMayLike.vue';
import PriceDetails from './PriceDetails.vue';
import CartStepper from './CartStepper.vue';
import CartTopNav from '@/modules/macHiddle/components/navbar/CartTopNav.vue';


export default {
    name: 'CartPage',
    components: {
        PriceDetails,
        CartStepper,
        YouMayLike,
        CartTopNav
    },
    data() {
        return {
            selectedQuantity: '',
            reqAmt: 1000,
        };
    },
    computed: {
        cartProducts() {
            return this.$store.getters['LoggedInUserStore/getCart'];
        },
        address() {
            return this.$store.getters['LoggedInUserStore/getAddresses']
        }
    },
    mounted() {
        this.$store.dispatch('LoggedInUserStore/fetchCart')
            .then((response) => {
                console.log('length check', response)
                this.checkCartLength();
            });
        this.$store.dispatch('LoggedInUserStore/fetchAddresses');
    },
    methods: {
        checkCartLength() {
            if (this.cartProducts.length <= 0) {
                this.$router.push('/login-page');
            }
        },
        getQuantityOptions(cart) {
            const options = [];
            for (let i = cart.boq; i <= cart.moq; i++) {
                options.push(i);
            }
            return options;
        },
        removeFromCart(cart) {
            const data = {
                product_sid: cart.sid,
                option_sid: cart.option.sid,
                range_sid: cart.range.sid,
                quantity: 0,
                cartId: this.cartProducts.sid
            };
            console.log('component', data)
            this.$store.dispatch('LoggedInUserStore/removeCartProduct', data)

        },
        saveProduct(cart) {
            const data = {
                product_sid: cart.sid,
                option_sid: cart.option.sid,
                range_sid: cart.range.sid,
                quantity: 0,
                cartId: this.cartProducts.sid,
            };
            this.$store.dispatch('LoggedInUserStore/removeFromCartSaveToWishlist', data)
        },
        updateQuantity(cart) {
            const data = {
                product_sid: cart.sid,
                option_sid: cart.option.sid,
                range_sid: cart.range.sid,
                quantity: cart.quantity,
                cartId: this.cartProducts.sid
            };
            this.$store.dispatch('LoggedInUserStore/updateCartProductQuantity', data)
        }
    }
}
</script>