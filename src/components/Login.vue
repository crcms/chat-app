<style scoped lang="scss">
  .button--large {
    margin-top: 30px;
    cursor: pointer;
  }
  /*.text-input {
    display: block;
    width: 100%;
  }*/
/*.login {

  background: #FFFFFF;

  .container {
    padding-left:5%;
    padding-right:5%;

    header {
      margin-bottom:70px;
    }

    .content {


    }
  }

}*/
</style>
<template>
  <v-ons-page>
    <div class="login">
      <div class="container">
        <header>
          登录系统
        </header>
        <div class="content">
          <v-ons-list modifier="noborder">
            <v-ons-list-item modifier="longdivider">
              <div class="left">
                <v-ons-icon icon="fa-user-circle-o"></v-ons-icon>
              </div>
              <div class="center">
                <v-ons-input placeholder="请输入用户名" v-model="data.name"></v-ons-input>
              </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="longdivider">
              <div class="left">
                <v-ons-icon icon="fa-lock"></v-ons-icon>
              </div>
              <div class="center">
                <v-ons-input placeholder="请输入密码"  v-model="data.password"></v-ons-input>
              </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="nodivider">
              <div class="center">
                  <v-ons-button modifier="large" @click="login()">登&nbsp;&nbsp;&nbsp;录</v-ons-button>
              </div>
            </v-ons-list-item>
            <v-ons-list-item  modifier="nodivider">
              <div class="left">
                <v-ons-checkbox :value="1" v-model="data.save"></v-ons-checkbox>记住密码
              </div>
              <div class="right">
                <span>忘记密码</span>
              </div>
            </v-ons-list-item>
          </v-ons-list>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import SplitterComponent from './layout/Splitter'
  export default {
    name: 'login',
    data () {
      return {
          data: {
              name:'',
              password:'',
              save:true
          }
      }
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



