import { useState } from "react"

function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState("")

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const addTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [...prev, input])
      setInput("")
    }
  }

  const createRemoveHandler = (index: number) => () => {
    setTodos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      <input value={input} onChange={handlerInputChange} />
      <button onClick={addTodo}>追加</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={createRemoveHandler(index)}>削除</button>
        </li>
      ))}
    </div>
  )
}

export default TodoList
