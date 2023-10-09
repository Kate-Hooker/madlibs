interface Story {
  id: number
  title: string
  content: string
  userInputs: UserInput[]
}

//formLable = the lable that will be on the form for the user to fill out
//identifier = a unique identifier that can be inbedded in the stories and used to call the users input
interface UserInput {
  formLable: string
  identifier: string
}

// Use Story as the value type, and ID number as the key type to access
export type StoryData = Record<number, Story>

const StoryData: StoryData = {
  101: {
    id: 101,
    title: 'A Lord Of The Rings Story',
    content:
      'In a whimsical land filled with ${adjective} creatures and unexpected adventures, a ${creature} discovers an ancient ${object} that holds the power to ${verb} the very fabric of reality. With the help of a quirky and determined ${name}, they embark on a hilarious journey to protect their world from impending ${action}, proving that true friendship and a dash of magic can overcome even the most comically chaotic challenges.',
    userInputs: [
      { formLable: 'An adjective', identifier: 'adjective' },
      { formLable: 'A creature', identifier: 'creature' },
      { formLable: 'A object', identifier: 'object' },
      { formLable: 'A verb', identifier: 'verb' },
      { formLable: 'A name', identifier: 'name' },
      { formLable: 'An action', identifier: 'action' },
    ],
  },
  // 102: {
  //   id: 102,
  //   title: 'The story we will add during stretch',
  //   content: 'This is where the 2nd story needs to be'
  //     }
}

export default StoryData
