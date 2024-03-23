<template>
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="priceDetails" aria-labelledby="priceDetails" style="height: 50%;">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Billing Details</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex justify-content-between py-2">
        <span class="fw-bold">Subtotal:</span>
        <span>₹ {{ cartProducts.amount }}</span>
      </div>

      <div class="d-flex justify-content-between py-2">
        <span class="fw-bold">GST:</span>
        <span>₹ {{ cartProducts.tax }}</span>
      </div>

      <div class="d-flex justify-content-between py-2">
        <span class="fw-bold">Grand Total:</span>
        <span>₹ {{ cartProducts.total }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartProducts'],
}
</script>
