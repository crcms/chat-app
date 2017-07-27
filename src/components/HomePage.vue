<template>
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$emit('toggleMenu')">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <div class="header">
      <img src="../assets/logo.png">
    </div>

    <v-ons-tabbar position="fixed"
                  :tabs="tabs"
                  :visible="true"
                  :index.sync="activeIndex"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import vueMessage from '@/components/Test'
//import vueGroup from '@/components/Group'
//import vueContact from '@/components/Contact'
export default {
  name: 'home',
  data () {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Message',
          page: vueMessage
          /*,
          props: {
            myProp: 'This is a page prop!'
          }*/
        }

        /*,
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'Contact',
          page: vueContact,

          badge: 7
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Group',
          page: vueGroup,
        }*/
      ]
    }
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item, ons-card {
  cursor: pointer;
}
</style>
