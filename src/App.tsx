import "./App.css"
import Greeting from "./Greeting"

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

function App() {
  return (
    <>
      <Greeting name="Alice222" age={25} />
      <UserCard name="Bob" age={30} email="bob@example.com" />
      <Button label="クリックしてね" />
      <Button label="無効なボタン" disabled />
    </>
  )
}

export default App
