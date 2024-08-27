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
        { description: 'Return "1984" by George Orwell', completed: false },
        { description: 'Pick up reserved book', completed: false },
        { description: 'Pay late fee', completed: false }
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