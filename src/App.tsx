import { useState } from "react"
import "./App.css"
import Greeting from "./Greeting"
import UserForm from "./UserForm"
import GreetingInput from "./GreetingInput"
import TodoList from "./TodoList"

type UserCardProps = {
  name: string
  age: number
  email: string
}

type ButtonProps = {
  label: string
  disabled?: boolean
}

function UserCard({ name, age, email }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>年齢: {age}歳</p>
      <p>メール: {email}</p>
    </div>
  )
}

function Button({ label, disabled = false }: ButtonProps) {
  return (
    <button disabled={disabled} className="custom-button">
      {label}
    </button>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => {
    setCount((prev) => prev - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <p>カウンタ：{count}</p>
      <button onClick={increment}>カウントアップ</button>
      <button onClick={decrement}>カウントダウン</button>
      <button onClick={reset}>リセット</button>
    </div>
  )
}

function Display({count}: { count: number}) {
  return <p>カウント：{count}</p>
}

function Controller({ onIncrement }: { onIncrement: () => void }) {
  return <button onClick={onIncrement}>+1</button>
}

function Parent() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <Display count={count} />
      <Controller onIncrement={handleIncrement} />
    </div>
  )
}

function App() {
  return (
    <>
      <Greeting name="Alice222" age={25} />
      <UserCard name="Bob" age={30} email="bob@example.com" />
      <Button label="クリックしてね" />
      <Button label="無効なボタン" disabled />
      <Counter />
      <UserForm />
      <GreetingInput />
      <TodoList />
      <Parent />
    </>
  )
}

export default App
