<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left" style="margin-left: 10px">
        <v-ons-icon
          icon="fa-user-circle-o" size="30px"
          @click="$store.commit('splitter/toggle',$store.state.splitter.status)"
        >
        </v-ons-icon>
      </div>

      <div class="center">{{title}}</div>
      <div class="right">

      </div>


    </v-ons-toolbar>
    <v-ons-tabbar swipeable position="bottom"
                  :tabs="tabs"
                  :visible="true"
                  :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import ChatComponent from '../tabbar/Chat';
  import ContactComponent from '../tabbar/Contact';
  import DynamicComponent from '../tabbar/Dynamic';
  export default {
    name: 'tabbar',
    data () {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: 'fa-comments',//this.md() ? null : 'ion-home',
            label: '消息',
            page: ChatComponent,
            key: "chat"
          },
          {
            icon: 'fa-user-circle',
            label: '联系人',
            page: ContactComponent,
            badge: 7,
            key: "contact"
          },
          {
            icon: 'fa-star-half-o',
            label: '动态',
            page: DynamicComponent,
            key: "dynamic"
          }
        ]
      }
    },
    computed: {
      title() {
        //return this.$store.state.tabbar.title
        return this.tabs[this.activeIndex].label
      }
    },
    methods: {
      toggleMenu() {
        this.$store.commit('splitter/toggle', this.$store.state.splitter.status)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>
