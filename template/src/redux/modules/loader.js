// Actions
const SHOW = "SHOW";
const HIDE = "HIDE";

// Reducer
const loaderReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case SHOW: {
      return { show: true };
    }
    case HIDE: {
      return { show: false };
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
export const LOADER_VISIBLE_SELECTOR = (state) => state.loaderReducer.show;

export default loaderReducer;
