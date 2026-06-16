import { useState } from "react"

type Todo = {
  id: number
  text: string
  completed: boolean
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState("")

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Todo追加
  const addTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [...prev,
        {
          id: Date.now(),
          text: input,
          completed: false
        }])
      setInput("")
    }
  }

  // 完了未完了切り替え
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id == id ? { ...todo, completed: !todo.completed} : todo
      )
    )
  }

  // Todo削除
  const removeTodo = (id: number) => () => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <input value={input} onChange={handlerInputChange} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type='checkbox' checked={todo.completed} onChange={() => { toggleTodo(todo.id) }} />
              <span style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : 'inherit'
              }}>
            {todo.text}
            </span>
            </label>
            <button onClick={removeTodo(todo.id)}>削除</button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default TodoList
