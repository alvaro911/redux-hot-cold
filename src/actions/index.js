export function userGuess(guess) {
  return (dispatch, getState) => {
    const diff = Math.abs(getState().randomNum - guess);

    // if (guesses.indexOf(guess) >= 0) {
    //   return alert(`${guess} has been used already`);
    // }

    dispatch({
      type: 'USER_GUESS',
      guess,
    });

    if (diff > 30) {
      dispatch(showMessage('COLD'));
    } else if (diff > 20) {
      dispatch(showMessage('WARM'));
    } else if (diff > 10) {
      dispatch(showMessage('GETTING HOT'));
    } else if (diff > 0) {
      dispatch(showMessage('HOT'));
    } else {
      dispatch(userWin());
    }
  };
}

const showMessage = message => ({
  type: 'SHOW_MESSAGE',
  message,
});

export function userWin() {
  return {
    type: 'USER_WIN',
  };
}

export function resetGame() {
  return {
    type: 'RESET_GAME',
  };
}
