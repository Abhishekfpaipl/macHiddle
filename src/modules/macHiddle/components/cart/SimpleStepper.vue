<template>
    <div>
        <div class="d-flex justify-content-center">
            <progress :value="progress" max="100" class="" style="width: 80%;">25</progress>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "SimpleStepper",
    props: ['step'],
    computed: {
        progress: function () {
            return Math.round(100 / 4) * this.step;
        }
    }
};
</script>

<style>
.step {
    background-color: green !important;
    opacity: 75%;
}

progress::-webkit-progress-bar {
    background-color: rgb(198, 208, 218);
}
</style>
  

