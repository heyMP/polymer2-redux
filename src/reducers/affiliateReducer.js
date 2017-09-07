const affiliateInitialState = {
  items: [],
  loading: false
};

function affiliateReducer(state, action) {
  if (state === undefined) {
    return affiliateInitialState;
  }

  switch (action.type) {
    case 'FETCH_AFFILIATES_LOADING':
      return Object.assign({}, state,
        {
          loading: true
        }
      );

    case 'FETCH_AFFILIATES_SUCCESS':
      return Object.assign({}, state,
        {
          loading: false,
          items: action.payload,
        }
      );

    case 'FETCH_AFFILIATE_LOADING':
      return Object.assign({}, state,
        {
          loading: true,
        }
      );

    case 'FETCH_AFFILIATE_SUCCESS':
      return Object.assign({}, state,
        {
          loading: false,
          items: state.items.map((item) => {
            if (item === action.payload.id) {
              return action.payload;
            }
            else { return item };
          })
        }
      );

    default:
      return state
  }
}

