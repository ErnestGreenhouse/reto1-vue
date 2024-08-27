<template>
  <Menu :model="items" />
</template>

<script>
import Menu from 'primevue/menu';

export default {
  name: 'SideBar',
  components: {
    Menu
  },
  data() {
    return {
      items: [
        {
          label: 'Books',
          icon: 'pi pi-book'
        },
        {
          label: 'Authors',
          icon: 'pi pi-user'
        },
        {
          label: 'Genres',
          icon: 'pi pi-list'
        }
      ]
    }
  }
}
</script>