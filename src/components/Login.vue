<template>
  <v-ons-page>
    <div class="login">
      <div class="container">
        <header>
          <img src="../assets/login-banner.jpg" alt="" style="max-width: 100%;margin:0px auto;">
        </header>
        <div class="content">
          <v-ons-list modifier="noborder">
            <v-ons-list-item modifier="longdivider">
              <div class="left">
                <v-ons-icon icon="fa-user-circle-o" size="23px"></v-ons-icon>
              </div>
              <div class="center">
                <v-ons-input class="input-text" placeholder="" v-model="data.name"></v-ons-input>
              </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="longdivider">
              <div class="left">
                <v-ons-icon icon="fa-lock" size="30px"></v-ons-icon>
              </div>
              <div class="center">
                <v-ons-input type="password" class="input-text" placeholder="" v-model="data.password"></v-ons-input>
              </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="nodivider">
              <div class="center">
                <v-ons-button modifier="large" @click="login()">登&nbsp;&nbsp;&nbsp;录</v-ons-button>
              </div>
            </v-ons-list-item>
            <v-ons-list-item modifier="nodivider">
              <div class="left">
                <v-ons-checkbox :value="1" v-model="data.save"></v-ons-checkbox>
                <span style="margin-left: 5px">记住密码</span>
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
          name: '',
          password: '',
          save: true
        }
      }
    },
    methods: {
      login() {
        this.$store.commit('navigation/push', SplitterComponent);
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



<style scoped lang="scss">
  .login {
    background-color: #01A4FF;
    height: 100vh;

    header {
      margin-bottom:30px;
    }

    .list {
      background: none;

      .list-item {
        border-bottom: 1px solid #14C1F8;

        .list-item__left {
          .ons-icon {
            color: #FFFFFF;
          }
        }

        .list-item__center {
          .input-text {
            .text-input {
              color: #FFFFFF!important;
              font-weight: 600;
              font-size: 14px;
            }

          }
        }

        .button--large {
          margin-top: 30px;
          cursor: pointer;
          background-color: #D8EEFB;
          color: #2EA1F5;
        }
      }
      .list-item:nth-child(3) {
        border:0px;
      }

      .list-item:last-child {
        .list-item__left,.list-item__right {
          color: #CAF0F7;
        }
      }
    }
    /**/

  }


</style>
