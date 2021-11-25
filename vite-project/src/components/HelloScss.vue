<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
const lifecycle = ref([])

onBeforeMount(() => {
  lifecycle.value.push('onBeforeMount')
})

onMounted(() => {
  lifecycle.value.push('onMounted')
})

onBeforeUpdate(() => {
  lifecycle.value.push('onBeforeUpdate')
})

onBeforeUnmount(() => {
  lifecycle.value.push('onBeforeUnmount')
})

lifecycle.value.push('Created')

</script>

<template>
  <h1>{{ msg }}</h1>

  <h3>* 생명 주기 테스트 *</h3>
  <div id="board">
    <p v-for="(item, idx) in lifecycle" v-text="item" />
  </div>
  
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
    <button type="button" class="btn btn-sm btn-primary">Primary</button>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </p>
</template>

<style lang="sass">
div {
  color: $bgColor;
}
</style>
