import React from 'react'

import './numImput.css'

const NumInput = props => (
  <form onSubmit={props.onSubmit}>
    <input
      value={props.guess}
      type="text"
      onChange={props.onChange}
      placeholder="1-100"
      maxLength={2}
    />
  </form>
)

export default NumInput
