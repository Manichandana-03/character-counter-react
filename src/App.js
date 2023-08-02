import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CountCharacter from './components/CountCharacter'

import './App.css'

// Replace your code her
class App extends Component {
  state = {
    textInput: '',
    characterList: [],
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  addItem = event => {
    event.preventDefault()
    const {textInput} = this.state

    const newItem = {
      id: uuidv4(),
      text: textInput,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newItem],
      textInput: '',
    }))
  }

  render() {
    const {textInput, characterList} = this.state

    return (
      <div className="main-container">
        <div className="con-1">
          <div className="header">
            <h1>Count the characters like a Boss...</h1>
          </div>
          {characterList.length > 0 ? (
            <ul>
              {characterList.map(each => (
                <CountCharacter key={each.id} word={each.text} />
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </div>
        <div className="con-2">
          <h1 className="heading">Character Counter</h1>
          <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onChangeText}
              className="text-input"
              value={textInput}
            />
            <button type="submit" onClick={this.addItem} className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
