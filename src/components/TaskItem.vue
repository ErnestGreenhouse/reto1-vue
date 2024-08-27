<template>
  <div class="p-field-checkbox">
    <Checkbox :modelValue="completed" @change="$emit('toggle')" :binary="true" />
    <label>{{ task }}</label>
  </div>
</template>

<script>
import Checkbox from 'primevue/checkbox';

export default {
  name: 'TaskItem',
  components: {
    Checkbox
  },
  props: ['task', 'completed']
}
</script>