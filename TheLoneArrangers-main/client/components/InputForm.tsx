import StoryData from '../../data/storyData'
import { useState } from 'react'
import { Thing } from '../models/thing'

// iterate over userInputs array (array of formLable and identifier for each madlib space)
// and use that to generate number of buttons. Use formLable to lable buttons and assign
// the identifier the value of the users input string

//export the form data

interface Props {
  setInputs: (inputs: Thing[]) => void
}

export default function InputForm({ setInputs }: Props) {
  //const [text, setText] = useState('')
  const [adjective, setAdjective] = useState('')
  const [creature, setCreature] = useState('')
  const [verb, setVerb] = useState('')
  const [name, setName] = useState('')
  const [action, setAction] = useState('')
  const [object, setObject] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'adjective':
        setAdjective(event.target.value)
        break
      case 'creature':
        setCreature(event.target.value)
        break
      case 'verb':
        setVerb(event.target.value)
        break
      case 'object':
        setObject(event.target.value)
        break
      case 'name':
        setName(event.target.value)
        break
      case 'action':
        setAction(event.target.value)
        break
      default:
        break
    }
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const things: Thing[] = []

    for (let i = 0; i < 6; i++) {
      things.push({
        identifier: String(event.target[i].name),
        input: String(event.target[i].value),
      })
    }
    // console.log(things);
    
    setInputs(things)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="An adjective"
          name="adjective"
          id="adjective"
          value={adjective}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="A creature"
          name="creature"
          id="creature"
          value={creature}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="An object"
          name="object"
          id="object"
          value={object}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="A verb"
          name="verb"
          id="verb"
          value={verb}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="A name"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="A action"
          name="action"
          id="action"
          value={action}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

// example dynamic input creation for future substitution
StoryData[101].userInputs.map((input) => {
  return (
    <input
      key={input.identifier}
      type="text"
      placeholder={input.identifier}
      name={input.identifier}
      id={input.identifier}
      value={'???'} // something goes here
      // onChange={handleChange}
    ></input>
  )
})
