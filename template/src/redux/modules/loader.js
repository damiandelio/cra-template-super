// Actions
const SHOW = "SHOW";
const HIDE = "HIDE";

// Reducer
const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW: {
      return true;
    }
    case HIDE: {
      return false;
    }
    default:
      return state;
  }
};

// Actions Creators
export const showLoader = () => {
  return { type: SHOW };
};

export const hideLoader = () => {
  return { type: HIDE };
};

// Selectors
export const loaderVisibleSelector = state => state.loaderReducer;

export default loaderReducer;
