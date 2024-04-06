<template>
    <div>
        <div class="nav nav-tabs align-items-center pt-2 d-flex justify-content-around px-2 position-fixed w-100 bg-white top-0 border border-2"
            style="font-size: 12px;z-index: 12; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">
            <router-link class="nav-link" to="template"
                :class="currentRouteName === 'NotificationPromotionPage' ? 'active' : ''">Promotions</router-link>

            <router-link class="nav-link " to="draft"
                :class="currentRouteName === 'PromotionDraft' ? 'active' : ''">Offers</router-link>

            <router-link class="nav-link " to="schedule"
                :class="currentRouteName === 'PromotionSchedule' ? 'active' : ''">Intimations</router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationsLinks',
    computed: {
        currentRouteName() {
            return this.$route.name;
        }

    }
}
</script>

<style lang="scss" scoped></style>