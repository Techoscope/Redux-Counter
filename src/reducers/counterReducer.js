import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/counterAction';

const initialState = {
  count: 0
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { count: state.count + 1};
    case DECREASE_COUNT:
      return { count: state.count - 1};
  }
}

export default counterReducer;