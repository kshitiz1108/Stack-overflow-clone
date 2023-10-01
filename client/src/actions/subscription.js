// actions/index.js
import * as api from '../api';

export const subscribeAndFetchDetails = (plan) => async (dispatch) => {
  try {
    const{data} = await api.subscribeToPlan(plan);
    dispatch({ type: 'SUBSCRIBE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'SUBSCRIBE_FAILURE', payload: error.message });
  }
};
// { plan, expiryDate: calculateExpiryDate(plan) }
export const fetchSubscriptionDetails = () => async (dispatch) => {
  try {
    const {response} = await api.getSubscriptionDetails();
    dispatch({ type: 'GET_SUBSCRIPTION_SUCCESS', payload: response.data.subscription });
  } catch (error) {
    dispatch({ type: 'GET_SUBSCRIPTION_FAILURE', payload: error.message });
  }
};

// Helper function to calculate the expiry date based on the chosen plan
// const calculateExpiryDate = (plan) => {
//   // Add your logic here to calculate the expiry date based on the chosen plan
//   // Example:
//   if (plan === 'free') {
//     return null; // Free plan has no expiry
//   } else if (plan === 'silver') {
//     // Calculate the expiry date for the silver plan
//   } else if (plan === 'gold') {
//     // Calculate the expiry date for the gold plan
//   }
// };

  