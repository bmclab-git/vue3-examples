import { inject } from 'vue'

// 필터 설정
export const useFilter = () => {

  const today = inject('today')

  // 데이터 정열
  const fnSort = (a, b) => {
    const a_date = Date.parse(a.date)
    const b_date = Date.parse(b.date)
    if (a_date > b_date) return 1
    else if (a_date < b_date) return 0
    else return a.id - b.id
  }

  // 해야 할 작업
  const getPendingTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date < today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  // 오늘의 해야 할 일
  const getActiveTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  // 오늘 완료한 작업
  const getCompletedTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  // 오늘의 모든 기록
  const getAllTodayTodos = (todos) => {
    return getActiveTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos))
      .slice()
      .sort(fnSort)
  }

  // 모든 작업
  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  }

}
