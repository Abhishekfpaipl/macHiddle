<template>
  <TopNav v-if="!hide" />
  <router-view />
  <FooterBar v-if="!hide" />
  <bottom-nav v-if="!hidden" />
</template>
<script>
import BottomNav from '@/modules/macHiddle/components/navbar/BottomNav.vue';
import TopNav from '@/modules/macHiddle/components/navbar/TopNav.vue'
import FooterBar from '@/modules/macHiddle/components/navbar/FooterBar.vue'
export default {
  name: 'E-comApp',
  components: {
    BottomNav,
    TopNav,
    FooterBar
  },
  computed: {
    hide() {
      const hiddenPages = ['Category', '', 'LoginPage', 'RegistrationPage', 'ForgotPasswordPage']
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage','ProductPage']
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>
<style>
:root {
  --primary-color: #EDC3AB;
  --secondary-color: #231F20;
}

.smaller {
  font-size: 12px;
}

.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-height: 3em;
  overflow: hidden;
}
</style>
