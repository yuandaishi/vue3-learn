import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    console.log('asdasdasd')
    count.value++
  }
  return { count, doubleCount, increment }
})

export const useNameStore = defineStore('name', () => {
  const name = ref('yds');
  function add() {
    name.value += 'a'
  }
  return { name, add }
})
