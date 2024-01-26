/* eslint-disable react/prop-types */
const Hello = ({ name, age }) => {

  const bornYear = () => {
    return new Date().getFullYear() - age
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
      <hr></hr>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Pepe" age={29} />
      <Hello name={name} age={age} />
    </div>
  )
}


export default App;
