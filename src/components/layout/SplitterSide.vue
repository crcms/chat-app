<template>
  <v-ons-page>
    <div class="splitter-side">
      <header style="height: 150px;background: #EEEEEE">
        很高的头部
      </header>
      <v-ons-list>
        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="fa-cogs"></v-ons-icon>
          </div>
          <div class="center" @click="push">个人设置</div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>


</template>

<script>
  import SetComponent from '../Set'
    export default {
        name: 'splitter-side',
        data () {
            return {}
        },

      methods:{
            push() {
                this.$store.commit('navigation/push',{
                    extends:SetComponent,
                    data:function(){
                        return {
                            a:'aaaaaaaaaa',
                        }
                    }
                })
            }
      }
    }
</script>


<style scoped>

</style>
