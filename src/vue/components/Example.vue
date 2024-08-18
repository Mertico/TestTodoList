<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div :class="$style.root">
    count is {{ count }}
    <button type="button" @click="count++"><Plus /></button>
  </div>
</template>

<style module>
.root {
  color: #888;
}
</style>
