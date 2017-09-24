<style scoped lang="scss">
.login {

  background: #FFFFFF;

  .container {
    padding-left:5%;
    padding-right:5%;

    header {
      margin-bottom:70px;
    }

    .content {
      div.center {
        .input-text {
          padding-top:12px;
          display: block;
          margin-bottom: 10px!important;
        }

        .button-box {
          margin-top: 30px;
        }
          /*.input-button {
            margin-top:10px;
            display: block;
            text-align: center;
          }*/
      }




    }
  }

}
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
            <v-ons-item>
              <div class="center">
                <v-ons-input class="input-text" modifier="underbar" placeholder="请输入用户名" v-model="data.name"></v-ons-input>
              </div>
            </v-ons-item>
            <v-ons-item modifier="nodivider">
              <div class="center">
                <v-ons-input class="input-text" placeholder="请输入密码" modifier="underbar" v-model="data.password"></v-ons-input>
              </div>
            </v-ons-item>
            <v-ons-item>
              <div class="center">
                <div class="button-box">
                  <v-ons-button modifier="large" @click="login()">登&nbsp;&nbsp;&nbsp;录</v-ons-button>
                </div>
              </div>
            </v-ons-item>
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
              password:''
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



