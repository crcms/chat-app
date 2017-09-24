<template>
  <v-ons-page>
    <div class="contact">
      <div class="add-user-relation">
        <v-ons-list>
          <v-ons-list-item modifier="longdivider chevron">
            <div class="left">
              <v-ons-icon icon="fa-user-plus"></v-ons-icon>
            </div>
            <div class="center">新的朋友</div>
          </v-ons-list-item>
        </v-ons-list>
      </div>
      <div class="content">
        <v-ons-pull-hook
          :action="loadItem"
          @changestate="state = $event.state"
        >

          <span v-show="state === 'initial'"> Pull to refresh </span>
          <span v-show="state === 'preaction'"> Release </span>
          <span v-show="state === 'action'"> Loading... </span>
        </v-ons-pull-hook>
        <v-ons-list>
          <v-ons-list-item >
            {{state}}
          </v-ons-list-item>
          <v-ons-list-header>
            <b>A</b>
          </v-ons-list-header>
          <v-ons-list-item modifier="longdivider chevron">
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/70/70" style="border-radius: 50%">
            </div>
            <div class="center">
              老男孩
            </div>
          </v-ons-list-item>
          <v-ons-list-header>
            <b>B</b>
          </v-ons-list-header>
          <v-ons-list-item modifier="longdivider chevron">
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/70/70" style="border-radius: 50%">
            </div>
            <div class="center">
              老男孩
            </div>
          </v-ons-list-item>
          <v-ons-list-item v-for="item in items" :key="item">
            {{item}}
          </v-ons-list-item>
        </v-ons-list>

      </div>
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        state: 'initial',
        items: [1,2,3,4,5],
      }
    },
    methods: {
      loadItem(done) {
        this.items.push(10);
        done();
      }
    }
  }
</script>


<style scoped lang="scss">

.add-user-relation {
  margin-bottom: 10px;
}


</style>

