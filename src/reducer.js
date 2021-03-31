export const initialState = {
  index: 0,
  loading: false,
  apiData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_SLIDE':
      return { ...state, index: state.index + action.payload };
    case 'PREV_SLIDE':
      return { ...state, index: state.index + action.payload };
    case 'LOADING_TRUE':
      return { ...state, loading: (state.loading = action.payload) };
    case 'LOADING_FALSE':
      return { ...state, loading: (state.loading = action.payload) };
    case 'SET_DATA':
      return { ...state, apiData: [...(state.apiData = action.payload)] };
    case 'SET_ACTIVE_DOT':
      return { ...state, index: (state.index = action.payload) };
    case 'SET_INDEX_LAST':
      return { ...state, index: (state.index = action.payload) };
    case 'SET_INDEX_FIRST':
      return { ...state, index: (state.index = action.payload) };
    case 'ADD_INDEX':
      return { ...state, index: state.index + action.payload };
    default:
      return state;
  }
};

export default reducer;
