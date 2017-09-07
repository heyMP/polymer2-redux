const affiliateInitialState = {
  items: [],
  loading: false,
  selectedAffiliate: null
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
          items: action.items,
          totalUnread: action.items.reduce((prev, current) => {
            return prev - current.read;
          }, action.items.length)

        }
      );

    default:
      return state
  }
}

