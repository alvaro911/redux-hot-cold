import React from 'react'

import './guessedItmes.css'

const GuessedTimes = props => (
  <footer>
    <h5>Number of guesses # {props.guesses.length}</h5>
    <ul>
      {props.guesses.map((guess, i) => (
        <li key={i}>
          {guess}
        </li>
      ))}
    </ul>
  </footer>
)

export default GuessedTimes
