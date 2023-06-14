<template>
  <div class="relative h-screen bg-[#272430]">
    <nav class="absolute left-0 top-0 flex items-center justify-center gap-10 w-full py-5 text-slate-200">
      <router-link to="/">Exercice</router-link>
      <router-link to="/correction">Correction</router-link>
    </nav>

    <router-view></router-view>
  </div>

</template>

<script>
import TodoList from "./components/correction/TodoList.vue";

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todoArray: [
        'TODO 1',
        'TODO 2',
        'TODO 3',
        'TODO 4',
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
