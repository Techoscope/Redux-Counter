import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/counterAction';

const initialState = {
  count: 0
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { count: state.count + action.payload};
    case DECREASE_COUNT:
      return { count: state.count - action.payload};
    default:
      return state;
  }
}

export default counterReducer;