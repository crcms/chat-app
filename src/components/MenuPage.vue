<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent"></v-ons-toolbar>

    <v-ons-list-title>Onsen UI Essential Links</v-ons-list-title>

    <v-ons-list>
      <v-ons-list-item v-for="page in pages"
                       tappable modifier="chevron"
                       @click="currentPage = page; openSide = true"
      >
        <div class="center">{{ page }}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import Setting from '@/components/Setting'
export default {
  name: 'menu',
  data () {
    return {
      currentPage: 'setting',
      pages: ['setting'],
      openSide: false
    }
  },
  methods: {
  },
  components: {
    Setting
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-item {
  cursor: pointer;
}
</style>
