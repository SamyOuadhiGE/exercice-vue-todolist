<template>
  <div class="h-full grid grid-cols-2 place-items-center gap-6 p-4">
    <TodoList :todos="todoArray" />

    <TodoList :todos="todoObject" />
  </div>
</template>
<script>
import TodoList from "../components/TodoList.vue";

export default {
  components: {TodoList},
  data() {
    return {
      todoArray: [
        'Ajouter la feature',
        'Fix les bugs',
        'Mettre en prod',
        'Faire la recette',
      ],
      todoObject: [
        {id: 0, text: 'Ajouter la feature', emoji: '✨'},
        {id: 1, text: 'Fix les bugs', emoji: '🐛'},
        {id: 2, text: 'Mettre en prod', emoji: '🚀'},
        {id: 3, text: 'Faire la recette', emoji: '👷'},
      ]
    }
  },
}
</script>
