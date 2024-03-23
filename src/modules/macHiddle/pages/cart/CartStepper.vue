<template>
  <div class="cart-stepper">
    <div v-for="(step, index) in steps" :key="index" :class="stepClass(step)" class="mt-2">
      <RouterLink :to="step.route" class="text-decoration-none" :class="stepClass(step)">
        <span>{{ step.name }}</span>
      </RouterLink>
      <span v-if="index !== steps.length - 1" class="separator">-----</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: "",
      steps: [
        {
          name: "CartPage",
          route: '/cart-page'
        }, 
        {
          name: "Checkout",
          route: '/payment-page'
        },
      ],
    };
  },
  methods: {
    updateCurrentStep() {
      this.currentStep = this.$route.name;
    },
    stepClass(step) {
      if (step.name === this.currentStep) {
        return 'active';
      } else if (this.steps.findIndex(s => s.name === this.currentStep) > this.steps.findIndex(s => s.name === step.name)) {
        return 'previous';
      }
      return '';
    },
  },
  created() {
    this.updateCurrentStep();
  },
};
</script>

<style>
.cart-stepper {
  display: flex;
  justify-content: center;
}

.cart-stepper .separator {
  margin: 0 8px;
}

.cart-stepper .active {
  font-weight: 700;
  color: red ;
}

.cart-stepper .previous {
  color: green;
  font-weight: 600;
}</style>
