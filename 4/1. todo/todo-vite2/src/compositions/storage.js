import { reactive, toRefs } from 'vue'

// 저장소 관리
export const useStorage = () => {

  const KEY = 'my-todo-list'
  const storage_obj = reactive({ storage_id: 0 })

  // Todo 읽기
  const loadTodos = (initTodos) => {
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
    temp_todos.forEach((todo, idx) => {
      todo.id = idx
    })
    storage_obj.storage_id = temp_todos.length
    initTodos(temp_todos)
  }

  // Todo 저장
  const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos.value))
  }

  return {
    ...toRefs(storage_obj),
    loadTodos,
    saveTodos,
  }

}
