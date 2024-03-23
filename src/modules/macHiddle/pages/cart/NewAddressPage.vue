<template>
    <div class="container pb-5 mb-5">
        <div class="card card-body my-2">
            <form @submit.prevent="saveAddress()">
                <div class="d-flex mb-4">
                    <i class="bi bi-telephone-fill fs-4"></i>
                    <h5 class="m-0 mt-1 ms-1">Contact Details</h5>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="fnameInput" v-model="formData.fname" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="nameInput">First Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="lnameInput" v-model="formData.lname" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="nameInput">Last Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="phoneInput" v-model="formData.contact_no" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="phoneInput">Phone Number</label>
                </div>

                <div class="d-flex mt-4 mb-4">
                    <i class="bi bi-geo-alt-fill fs-4"></i>
                    <h5 class="m-0 mt-1 ms-1">Registered Address Details</h5>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="houseInput" v-model="formData.line1" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="houseInput">House no./Building Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="roadInput" v-model="formData.line2" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="roadInput">Road Name/Area/Colony</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="pincodeInput" v-model="formData.pincode" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="pincodeInput">Pincode</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="cityInput" v-model="formData.district" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="cityInput">District</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="stateInput" v-model="formData.state" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="stateInput">State</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="countryInput" v-model="formData.country" required
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="countryInput">Country</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="locationInput" v-model="nearby"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="locationInput">Nearby Location (optional)</label>
                </div>
                <!-- <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultAddress" v-model="formData.is_primary">
                    <label class="form-check-label" for="defaultAddress">
                        Make Default Address
                    </label>
                </div> -->
                <div class="d-flex justify-content-center mt-3">
                    <button class="btn btn-success rounded-0">
                        Save Address & Continue
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewAddressPage',
    data() {
        return {
            formData: {
                fname: '',
                lname: '',
                contact_no: '',
                line1: '',
                line2: '',
                district: '',
                state: '',
                country: '',
                pincode: '',
                nearby: '',
            },
        }
    },
    methods: {
        saveAddress() {
            const data = {
                fname: this.formData.fname,
                lname: this.formData.lname,
                contact_no: this.formData.contact_no,
                line1: this.formData.line1,
                line2: this.formData.line2,
                district: this.formData.district,
                state: this.formData.state,
                country: this.formData.country,
                pincode: this.formData.pincode,
                type: 'shipping'
            };
            console.log(data)
            this.$store.dispatch('LoggedInUserStore/createAddress', data)
                .then(() => {
                    this.formData.fname = '',
                        this.formData.lname = '',
                        this.formData.contact = '',
                        this.formData.line1 = '',
                        this.formData.line2 = '',
                        this.formData.district = '',
                        this.formData.state = '',
                        this.formData.country = '',
                        this.formData.pincode = ''
            });

        }
    }

}
</script>
