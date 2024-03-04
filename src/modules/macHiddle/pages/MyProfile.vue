<template>
    <div>
        {{ user.id }}<br>
        {{ user.name }}
    </div>
</template>

<script>
import axiosInstance from '../axiosInstance'
export default {
    name: 'MyProfile',
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        const token = localStorage.getItem('token')
        axiosInstance.get('user', { headers: { "Authorization": `Bearer ${token}` } })
        .then((response)=>{
            this.user = response.data
        })
        }
}
</script>

<style lang="scss" scoped></style>