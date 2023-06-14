<template>
  <li
      class="flex items-center gap-8  w-full px-8 py-4 border-t border-slate-600 transition-colors hover:bg-slate-700 cursor-pointer"
      @click="isActive = !isActive"
  >
    <div
        class="w-6 aspect-square border  rounded-full"
         :class="isActive ? 'bg-green-600 border-green-600' : 'border-slate-100'">
    </div>

    <slot
        name="todoItem"
        :todo="todo"
        :isActive="isActive"
    >
      <span class="text-slate-500 font-bold">
        {{ todo }} {{ isActive }}
      </span>
    </slot>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: [String, Object],
      required: true,
    },
  },
  data() {
    return {
      isActive: false
    }
  },
}
</script>
