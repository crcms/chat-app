<template>
  <v-ons-page id="app">
    <v-ons-navigator swipeable
                     :page-stack="pageStack"
                     :pop-page="storePop"
    ></v-ons-navigator>
  </v-ons-page>
</template>

<script>
  import LoginComponent from './components/Login'
  export default {
    name: 'app',
    beforeCreate() {
      this.$store.commit('navigation/push',LoginComponent)
    },
    data() {
      return {
      }
    },
    methods:{
      storePop() {
          this.$store.commit('navigation/pop',LoginComponent)
      }
    },
    computed: {
      pageStack() {
          return this.$store.state.navigation.stack;
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
