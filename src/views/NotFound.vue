<template>
    <div class="d-flex flex-column justify-content-cetner align-items-center bg-light">
        <h1 class="text-danger">Oops !!!</h1>
        <h1 class="text-warning">Page Not Found</h1>
        <img :src="img" class="d-block d-md-none" style="width: 100%; object-fit: cover;">
        <img :src="img" class="d-none d-md-block" style="">
        <router-link to="/" class="btn btn-dark rounded-0 my-2">Reload</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            // img: '/img/404_page.jpeg',
            img: '/img/404.png'
        }
    }
}
</script>