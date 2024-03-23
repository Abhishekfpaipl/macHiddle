const RouteTrackingMixin = {
    data() {
      return {
        previousRoute: null,
        currentRoute: this.$route.path
      };
    },
    created() {
      this.previousRoute = this.$route.path;
    },
    watch: {
      '$route'(to, from) {
        this.previousRoute = from.path;
        this.currentRoute = to.path;
        // Call a method or perform any action you need with the previous and current routes
        this.handleRouteChange();
      }
    },
    methods: {
      handleRouteChange() {
        console.log('Previous Route:', this.previousRoute);
        console.log('Current Route:', this.currentRoute);
        // You can perform any actions based on the route change here
      }
    }
  };
  
  export default RouteTrackingMixin;
  