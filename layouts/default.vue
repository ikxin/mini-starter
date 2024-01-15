<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <header class="shadow-md">
    <div class="h-16 px-4 max-w-6xl flex mx-auto justify-between items-center">
      <div class="flex-1">
        <div class="w-32 h-8 bg-slate-200 rounded" />
      </div>
      <ul class="flex items-center gap-2">
        <li>Activate</li>
        <li>Tools</li>
        <li>Monitor</li>
      </ul>
      <div class="flex-1 flex items-center justify-end">
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'"
            color="gray"
            variant="ghost"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
