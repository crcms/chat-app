import Vue from 'vue'
import Vuex from 'vuex'
import SplitterComponent from './components/layout/Splitter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation: {
      namespaced: true,
      state: {
        stack: []
      },
      mutations: {
        push(state, component) {
          //login不允许返回
          if (component.name === 'splitter') {
            state.stack.pop();
          }
          state.stack.push(component);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        }
      }
    },

    splitter: {
      namespaced: true,
      state: {
        status: false
      },
      mutations: {
        toggle (state, openStatus) {
            state.status = !openStatus
        }
      }
    },
    tabbar:{
      namespaced:true,
      state:{
        currentIndex:0,
        title:''
      },
      mutations: {
        setTitle(state,title) {
          state['title'] = title
        }
      }
    }
  }
})
