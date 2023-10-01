// reducers/subscriptionReducer.js
const initialState = {
    plan: null,
    expiryDate: null,
    loading: false,
    error: null,
  };
  
  const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBSCRIBE_SUCCESS':
        return {
          ...state,
          plan: action.payload.plan,
          expiryDate: action.payload.expiryDate,
          loading: false,
          error: null,
        };
      case 'SUBSCRIBE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'GET_SUBSCRIPTION_SUCCESS':
        return {
          ...state,
          plan: action.payload.plan,
          expiryDate: action.payload.expiryDate,
          loading: false,
          error: null,
        };
      case 'GET_SUBSCRIPTION_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default subscriptionReducer;
  