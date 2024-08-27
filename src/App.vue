<template>
  <div id="app">
    <Header @toggle-sidebar="visible = !visible" />
    <Sidebar v-model:visible="visible">
      <SideBar />
    </Sidebar>
    <TaskList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SideBar from './components/SideBar.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SideBar,
    TaskList,
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>