import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import InputForm from './InputForm'
import WriteStory from './WriteStory'

function App() {
  // some useState thing needs to be here

  const [inputs, setInputs] = useState([])

  useEffect(() => {
    console.log(inputs)
  }, [inputs])

  return (
    <div>
      <h1>A Surrogate Title</h1>
      <InputForm setInputs={setInputs} />
      <WriteStory inputs={inputs} />
    </div>
  )
}

export default App
