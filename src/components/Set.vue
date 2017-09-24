<template>
  <v-ons-page @init="init">
    <div class="set">
      set
      <div class="left">
        <v-ons-back-button>Page 1</v-ons-back-button>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
    export default {
        name: 'set',
        data () {
            return {}
        },
      beforeCreate() {
//        console.log(this.$ons.NavigatorElement)
//        console.log(this.$ons.PageElement)
        //console.log(this.$ons.NavigatorElement.getCurrentPage().options)
      },
      methods:{
            init() {
                console.log(this.a)
                //console.log(event.target.data.a)
            }
      }
    }
</script>


<style scoped>

</style>
