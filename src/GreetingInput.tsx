import { useState } from "react"

function GreetingInput() {
  const [name, setName] = useState("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="なまえ"
      />
      {name && <p>こんにちは、{name}さん！！</p>}
    </div>
  )
}

export default GreetingInput
