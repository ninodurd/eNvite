export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';


export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("/users")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.products));
          return json.products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
  });