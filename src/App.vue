<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import useNum from './hooks/useTest'
import { onMounted, getCurrentInstance, inject, provide, ref, reactive, toRefs } from 'vue';
let app = getCurrentInstance();
console.log(app)
console.log(this);
onMounted(() => {
  console.log(this, 'asdasd')
})
const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}
provide('a', 'asd');
let num = ref(10);
let me = reactive({
  name: 'yds',
  sex: 'man'
})
const { name, sex } = toRefs(me);
let btn = () => {
  num.value += 1;
}
let changeMe = () => {
  me.name += 1;
}
</script>

<template>
  <!-- <div class="some-class"></div> -->
  <!-- <loading></loading> -->
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" />
      <p>{{ useNum(10) }}</p>
      <Teleport to=".some-class">
        <p>{{ inject('message') }}xcaasda</p>
      </Teleport>
      <input type="text" v-focus> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/pinia">pinia</RouterLink>
      </nav>
    </div>
  </header>
  <!-- <p>{{ num }}</p>
  <p>{{ me.name }}</p>
  <p>{{ name }}</p>
  <el-button @click="btn" type="primary">点击按钮</el-button>
  <el-button @click="changeMe" type="primary">changeMe</el-button> -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
