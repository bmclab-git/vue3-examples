<template>
  <todo-list-new />
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main />
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoListContainer",
}
</script>

<script setup>
import { ref, readonly, provide } from "vue"
import { useStorage } from "../compositions/storage"
import TodoListNew from "./TodoListNew.vue"
import TodoListMain from "./TodoListMain.vue"

const todos = ref([])
const { loadTodos, saveTodos, storage_id } = useStorage()

provide("todos", readonly(todos))

// Todo 초기화
const initTodos = (init_todos) => {
  todos.value = init_todos
}

// Todo 추가
const addTodo = (job, date, time) => {
  todos.value.push({
    id: storage_id.value++,
    job: job,
    date: date,
    currentTime: time,
    completed: false,
  })
  saveTodos(todos)
}

// Todo 삭제
const removeTodo = (id) => {
  todos.value.splice(id, 1)
  todos.value.forEach((todo, idx) => {
    todo.id = idx
  })
  saveTodos(todos)
}

// Todo 완료
const completeTodo = (id) => {
  todos.value.find((todo) => todo.id == id).completed = true
  saveTodos(todos)
}

provide("addTodo", addTodo)
provide("removeTodo", removeTodo)
provide("completeTodo", completeTodo)

// Todo 읽기
loadTodos(initTodos)
</script>
