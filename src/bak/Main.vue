<template>
    <v-ons-page>
      <div class="main">
        <v-ons-toolbar>
          <div class="center">{{ title }}</div>
        </v-ons-toolbar>

        <v-ons-tabbar position="auto"
                      :tabs="tabs"
                      :visible="true"
                      :index.sync="activeIndex"
        >
        </v-ons-tabbar>
      </div>
    </v-ons-page>

</template>

<script>
    export default {
        name: 'main',
        data () {
            return {}
        }
    }
</script>


<style scoped>

</style>
