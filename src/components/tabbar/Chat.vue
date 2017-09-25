<template>
  <v-ons-page>
    <div class="chat">
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
          <v-ons-list-item modifier="longdivider">
            <div class="left">
              <img class="list-item__thumbnail" src="http://placekitten.com/g/70/70" style="border-radius: 50%">
            </div>
            <div class="center">
              <span class="list-item__title">普通昵称</span>
              <span class="list-item__subtitle">明天有空吗?</span>
            </div>
            <div class="right">
              <div class="chat-time">2017-09-02</div>
              <div class="chat-notify-num" >10</div>
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
        name: 'chat',
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
//              console.log(done)
//            setTimeout(() => {
//              this.items = [...this.items, this.items.length + 1];
//              done();
//            }, 400);
          }
        }
    }
</script>


<style scoped lang="scss">

.content {
  .list-item {
    background: #EEEEEE;
    border-bottom:1px solid #8E8E8E;
    .list-item__title {
      color: #4B4B4B;
    }
    .list-item__subtitle {
      color: #9A9A9A;
    }
  }

  .list-item--longdivider__right {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    .chat-time {
      font-size: 0.6em;
      color:#8E8E8E;
    }
    .chat-notify-num {
      color: #FFFFFF;
      background: red;
      font-size: 0.4em;
      padding:0px  3px;
      border-radius: 50% 50%;
    }
  }
}



</style>
