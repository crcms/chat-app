<template>
  <v-ons-page @init="init">
    <div class="set">

      <v-ons-toolbar>
        <div class="left">
          <v-ons-back-button>返回</v-ons-back-button>
        </div>
        <div class="center">
          个人设置
        </div>
      </v-ons-toolbar>

      <v-ons-list modifier="noborder">
        <v-ons-list-item modifier="longdivider">
          <div class="left">
            <v-ons-icon icon="fa-user-circle-o"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input placeholder="name" v-model="data.name"></v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item modifier="longdivider">
          <div class="left">
            <v-ons-icon icon="fa-user-circle-o"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input placeholder="name" v-model="data.truename"></v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item modifier="longdivider">
          <div class="left">
            <v-ons-icon icon="fa-user-circle-o"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input placeholder="password" v-model="data.password"></v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item modifier="longdivider">
          <div class="left">
            <v-ons-icon icon="fa-user-circle-o"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-radio :value="1" v-model="data.status"></v-ons-radio>在线
            <v-ons-radio :value="2" v-model="data.status"></v-ons-radio>隐身
            <v-ons-radio :value="3" v-model="data.status"></v-ons-radio>离线
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
    export default {
        name: 'set',
        data () {
            return {
              data:{
                  name:'name',
                  truename:'老男孩',
                  password:'',
                  status:'1'
              }
            }
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
