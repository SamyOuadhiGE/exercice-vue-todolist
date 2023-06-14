<template>
  <div class="rounded-lg overflow-hidden">
    <h1 class="text-xl font-semibold p-6 text-center">
      <slot name="header" :todoNumber="todos.length">
        Todo List ({{ todos.length }})
      </slot>
    </h1>
      <ul class="flex flex-col">
        <TodoListItem
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
        >
          <template #todoItem="{ todo, isActive }">
            <slot
                name="todoItem"
                :todo="todo"
                :isActive="isActive"
            >
            </slot>
          </template>
        </TodoListItem>
      </ul>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>
