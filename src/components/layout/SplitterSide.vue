<template>
  <v-ons-page>
    <div class="splitter-side">
      <v-ons-list>
        <v-ons-list-item>
          <div class="center" @click="push">舟桥1</div>
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
