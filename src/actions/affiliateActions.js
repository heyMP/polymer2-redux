class affiliateActions {
  static fetchAffiliates() {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'FETCH_AFFILIATES_LOADING'
      });
      return window.fetch('http://localhost:1337/api/affiliates')
        .then((response) => {
          response.json().then(data => {
            dispatch({
              type: 'FETCH_AFFILIATES_SUCCESS',
              items: data
            })
          })
        });
    });
  }
}

