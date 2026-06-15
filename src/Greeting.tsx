type GreetingProps = {
  name: string
  age: number
}

function Greeting({ name, age }: GreetingProps) {
  return (
    <h2>
      こんにちは、 {name} さん！（{age}歳）
    </h2>
  )
}

export default Greeting
