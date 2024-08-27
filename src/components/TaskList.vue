<template>
  <Card>
    <template #title>
      Tasks
    </template>
    <template #content>
      <TaskItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task.description"
          :completed="task.completed"
          @toggle="toggleTask(index)"
      />
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    Card,
    TaskItem
  },
  data() {
    return {
      tasks: [
        { description: 'librito 1', completed: false },
        { description: 'librito 2', completed: false },
        { description: 'librito 3', completed: false }
      ]
    }
  },
  methods: {
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
}
</script>