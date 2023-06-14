<template>
  <div class="h-screen bg-[#272430]">
    <div class="h-full grid place-items-center p-4">
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
            <span>[{{ todo.id }}]</span>
            <span>{{ todo.text }}</span>
            <span>{{ todo.emoji }}</span>
          </div>
        </template>
      </TodoList>
    </div>
  </div>

</template>

<script>
import TodoList from "./components/TodoList.vue";

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
