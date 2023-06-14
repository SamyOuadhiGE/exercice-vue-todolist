<template>
  <div class="w-full max-w-xl bg-[#2e303d] text-amber-600 rounded-lg overflow-hidden">
    <h1 class="text-xl font-semibold p-6 text-center">Todo !</h1>
      <ul class="flex flex-col">
        <!-- Code aller ici -->
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>
