const API_URL = "http://localhost:5031"

export async function getAllTodos() {
    const response = await fetch(`${API_URL}/todos`)
    const data = await response.json()
    return data
}

export async function getTodoById(id) {
  const response = await fetch(`${API_URL}/todos/${id}`)
  const data = await response.json()
  return data
}

export async function createTodo(todo) {
  const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
  })
  const data = await response.json()
  return data
}

export async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
  })
  const data = await response.json()
  return data
}

export async function updateTodo(id, todo) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
  })
  const data = await response.json()
  return data
}