<script setup lang="ts">
import dayjs from 'dayjs'

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
          <template #fallback>
            <div class="h-8 w-8" />
          </template>
        </ClientOnly>
      </div>
    </div>
  </header>
  <section class="mx-auto min-h-[calc(100vh-4rem)] max-w-6xl p-4">
    <slot />
  </section>
  <ALayoutFooter>
    <div class="mx-auto flex h-14 items-center justify-center gap-1 border-t border-gray-200">
      <div>
        <span>Copyright &copy; {{ currentYear }}</span>
        <ALink target="_blank" href="https://github.com/ikxin/super-starter">Super Starter</ALink>
      </div>
      <div>
        <span>Code with by</span>
        <ALink target="_blank" href="https://www.ikxin.com">ikxin</ALink>
      </div>
    </div>
  </ALayoutFooter>
</template>
