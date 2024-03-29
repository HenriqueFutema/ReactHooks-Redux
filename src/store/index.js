import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["ReactJs", "ReactNative", "NodeJs"]
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [action.title, ...state.data] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
