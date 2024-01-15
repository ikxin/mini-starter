<script setup lang="ts">
import dayjs from 'dayjs'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const currentYear = ref(dayjs().year())
</script>

<template>
  <header class="sticky top-0 border-b border-gray-200 shadow-md dark:border-gray-800">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <div class="flex-1">
        <div class="h-8 w-32 rounded bg-slate-200" />
      </div>
      <ul class="flex items-center gap-2">
        <li>Activate</li>
        <li>Tools</li>
        <li>Monitor</li>
      </ul>
      <div class="flex flex-1 items-center justify-end">
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'"
            color="gray"
            variant="ghost"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="h-8 w-8" />
          </template>
        </ClientOnly>
      </div>
    </div>
  </header>
  <section class="min-h-[calc(100vh-4rem)]">
    <slot />
  </section>
  <footer class="text-sm font-light text-gray-500 dark:text-gray-400">
    <div class="mx-auto flex h-14 items-center justify-center gap-2 border-t border-gray-200 dark:border-gray-800">
      <div>
        <span>Copyright &copy; {{ currentYear }}</span>
        <UButton to="https://github.com/ikxin/quick-hub" target="_blank" variant="link" square class="font-light">
          QuickHub
        </UButton>
      </div>
      <div>
        <span>Code with by</span>
        <UButton to="https://www.ikxin.com" target="_blank" variant="link" square class="font-light"> ikxin </UButton>
      </div>
    </div>
  </footer>
</template>
