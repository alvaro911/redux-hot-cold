const initialState = {
  guesses: [],
  randomNum: Math.floor(Math.random() * 100) + 1,
  message: 'PICK A NUMBER BETWEEN 1 AND 100',
  haveWin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_GUESS':
      return {
        ...state,
        guesses: [...state.guesses, action.guess],
      };
    case 'SHOW_MESSAGE':
      return {
        ...state,
        message: action.message,
      };
    case 'USER_WIN':
      return {
        ...state,
        message: 'VITORY!!!',
        haveWin: true,
      };
    case 'RESET_GAME':
      return {
        ...initialState,
        randomNum: Math.floor(Math.random() * 100) + 1,
      };
    default:
      return state;
  }
};
