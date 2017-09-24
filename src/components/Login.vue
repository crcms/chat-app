<template>
  <v-ons-page>
    <div class="login">
      <v-ons-button @click="login()">Login</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
  import SplitterComponent from './layout/Splitter'
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      login() {
        this.$store.commit('navigation/push',SplitterComponent);
        /*this.$emit('push-page', {
          extends: SplitterComponent,
          data() {
            return {
                id: 123,
                myCustomDataHere: 42
            }
          }
        })*/
      }
    }
  }
</script>


<style scoped>

</style>
