<template>
    <div class="order-stepper">
      <ul class="list-unstyled">
        <li v-for="(step, index) in steps" :key="index" :class="{ active: index <= activeIndex }">
          {{ step }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      activeIndex: {
        type: Number,
        default: 0, // Set the default active index (order placed)
      },
    },
    data() {
      return {
        steps: ['Order Placed', 'Shipped', 'In Transit', 'Out for Delivery', 'Delivered'],
      };
    },
  };
  </script>
  
  <style scoped>
  .order-stepper {
    display: flex;
    flex-direction: column;
  }
  
  .order-stepper li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 20px;
  }
  
  .order-stepper li:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  
  .order-stepper .active:before {
    background-color: green;
  }
  
  .order-stepper li:not(:last-child):after {
    content: '';
    position: absolute;
    top: 10px;
    left: 5px;
    height: 100%;
    border-left: 2px dashed green;
  }
  </style>
  