<template>
  <v-ons-page>
    <div class="splitter">
      <v-ons-splitter>
        <v-ons-splitter-side
          swipeable width="50%" collapse="" side="left"
          :open.sync="status"
        >
          <side-component></side-component>
        </v-ons-splitter-side>
          <ons-splitter-content id="content">
            <component :is="currentPage" :toggle-menu="status"></component>
          </ons-splitter-content>
      </v-ons-splitter>
    </div>
  </v-ons-page>
</template>

<script>
  import TabbarComponent from './Tabbar'
  import SideComponent from './SplitterSide'
  export default {
    name: 'splitter',
    data () {
      return {
        currentPage: TabbarComponent,
      }
    },
    computed: {
      status: {
          get() {
            return this.$store.state.splitter.status
          },
          set() {
              this.setStatus()
          }
      }
    },
    methods: {
      setStatus() {
          return this.$store.commit('splitter/toggle',this.$store.state.splitter.status)
      }
    },
    components: {
      TabbarComponent,SideComponent
    }
  }
</script>


<style scoped>

</style>
