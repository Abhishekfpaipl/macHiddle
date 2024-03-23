<template>
  <TopNav v-if="!hide" />
  <!-- <div style="margin-top: 60px;"> -->
    <router-view />
  <!-- </div> --> 
  <bottom-nav v-if="!hidden" />
</template>

<script>
import BottomNav from '@/modules/macHiddle/components/navbar/BottomNav.vue';
import TopNav from '@/modules/macHiddle/components/navbar/TopNav.vue' 
export default {
  name: 'E-comApp',
  components: {
    BottomNav,
    TopNav, 
  },
  computed: {
    hide() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage','CartPage','NotificationPage','OrdersListPage','EmailVerificationPage']
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'ProductPage','NotificationPage','EmailVerificationPage',]
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
.truncate2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 3em;
  overflow: hidden;
}

.bill {
  overflow: hidden;
  text-align: center;
}

.bill>span {
  position: relative;
  display: inline-block;
  color: var(--primary-color);
}

.bill>span:before,
.bill>span:after {
  content: '';
  position: absolute;
  top: 50%;
  border-bottom: 2px solid var(--primary-color);
  width: 591px;
  margin: 0 20px;
}

.bill>span:before {
  right: 100%;
}

.bill>span:after {
  left: 100%;
}


#scroll::-webkit-scrollbar {
  background-color: none;
  display: none;
}
</style>
