

const otpReducer = (state =  {
  verificationId: null,
 
  error: null,
}, action) => {
  switch (action.type) {
    case 'SEND_OTP_SUCCESS':
      return {
        ...state,
        verificationId: action.payload.verificationId,
        error: null,
      };
    case 'SEND_OTP_FAILURE':
      return {
        ...state,
        verificationId: null,
        error: action.payload.error,
      };
    case 'VERIFY_OTP_SUCCESS':
      return {
        ...state,
        error: null,
      };
    case 'VERIFY_OTP_FAILURE':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default otpReducer;

  
  
  
  