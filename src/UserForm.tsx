import { useState } from "react"

type User = {
  name: string
  age: number
  email: string
}

function UserForm() {
  const [user, setUser] = useState<User>({ name: "", age: 0, email: "" })
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, name: e.target.value }))
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, email: e.target.value }))
  }

  return (
    <div>
      <input value={user.name} onChange={handleNameChange} placeholder="名前" />

      <input
        type="number"
        value={user.age}
        onChange={handleAgeChange}
        placeholder="年齢"
      />

      <input
        type="email"
        value={user.email}
        onChange={handleEmailChange}
        placeholder="email"
      />

      <p>
        {user.name}さん {user.age}歳 email: {user.email}
      </p>
    </div>
  )
}

export default UserForm
