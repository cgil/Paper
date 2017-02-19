const initialState = {
  displayType: 'all', // expected values: 'all', 'completed', 'active'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state, displayType: action.displayType,
      };
    default:
  }
  return state;
}