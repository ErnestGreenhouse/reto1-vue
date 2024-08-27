<template>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
  <div class="p-toolbar p-component" role="toolbar">
    <div class="p-toolbar-group-left">
      <Button icon="pi pi-bars" @click="$emit('toggle-sidebar')" />
      <img src="https://seeklogo.com/images/U/universidad-peruana-de-ciencias-aplicadas-upc-logo-B98C3A365C-seeklogo.com.png" alt="Logo" class="logo">
    </div>
    <div class="p-toolbar-center">
      <h1 class="open-sans">Library Center</h1> </div>
  </div>
</template>

<script>
import Button from 'primevue/button';


export default {
  name: 'Header',
  components: {
    Button
  }
}
</script>

<style scoped>


.p-toolbar {
  display: flex;
  align-items: center;
  position: relative;
}

.p-toolbar-group-left {
  display: flex;
  align-items: center;
}

.p-toolbar-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  height: 40px;
  margin-left: 10px;
}

h1 {
  margin: 0;
  font-size: 24px;
  line-height: 40px;
}

.open-sans {  font-family: 'Open Sans', sans-serif;
}
</style>