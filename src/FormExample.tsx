import { useState } from "react"

function FormExample() {
  const [name, setName] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('送信:', name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
        />
        <button type='submit'>送信</button>
      </form>
    </div>
  )

}

export default FormExample
