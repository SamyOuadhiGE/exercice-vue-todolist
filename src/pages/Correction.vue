<template>
  <div class="h-full grid grid-cols-1 place-items-center gap-6 p-4 md:grid-cols-2">
    <TodoList :todos="todoArray" class="w-full max-w-xl bg-[#2e303d] text-amber-400">
      <template #header="{ todoNumber }">
        Il y a {{ todoNumber }} todos
      </template>

      <template #todoItem="{ todo, isActive }">
          <span
              class="text-slate-300"
              :class="{'line-through' : isActive === true }">
            {{ todo }}
          </span>
      </template>
    </TodoList>

    <TodoList :todos="todoObject" class="w-full max-w-xl bg-[#2e303d] text-amber-600">
      <template #todoItem="{ todo, isActive }">
        <div
            class="flex items-center gap-4 text-slate-400"
            :class="{'blur-[2px]' : isActive === true }"
        >
          <span>{{ todo.text }}</span>
          <span>{{ todo.emoji }}</span>
        </div>
      </template>
    </TodoList>
  </div>
</template>

<script>
import TodoList from "../components/correction/TodoList.vue";

export default {
  components: {
    TodoList,
  },
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
