import Input, { InputCard } from './MyHOC/Input.js'

const App = () => {
  return (
    <>
      <Input label="userName" type="text" condition={10} />
      <InputCard label="age" type="number" condition={20} /> {/* higher order component */}
    </>
  )
}

export default App
