import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import GuessedTimes from './GuessedTimes'
import Message from './Message'
import NumInput from './NumInput'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      guess: '',
    };

    this._onSubmitForm = this._onSubmitForm.bind(this);
    this._onChangeNumber = this._onChangeNumber.bind(this);
    this._resetGame = this._resetGame.bind(this);
  }

  _onSubmitForm(e) {
    e.preventDefault();
    this.props.userGuess(this.state.guess);
    this.setState({
      guess: '',
    });
  }

  _onChangeNumber(e) {
    this.setState({
      guess: e.target.value,
    });
  }

  _resetGame() {
    this.props.resetGame();
  }

  render() {
    return (
      <div className="app">
        <Message message={this.props.message} />
        <NumInput
          onSubmit={this._onSubmitForm}
          onChange={this._onChangeNumber}
          guess={this.state.guess}
        />
        <GuessedTimes guesses={this.props.guesses} />
        <hr />
        {this.props.userWin &&
          <button onClick={this._resetGame}>New Game</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { guesses, message, haveWin, } = state
  return { guesses, message, haveWin, }
};

export default connect(
  mapStateToProps,
  actions
)(App);
