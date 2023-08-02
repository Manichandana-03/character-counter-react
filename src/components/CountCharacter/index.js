import './index.css'

const CountCharacter = params => {
  const {word} = params
  return (
    <li>
      <p>
        {word} : {word.length}
      </p>
    </li>
  )
}

export default CountCharacter
