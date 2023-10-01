// import axios from 'axios';
import * as api from "../api";
// const API_URL = 'http://localhost:5000/api';

export const sendOtp = (phone) => async (dispatch) => {
  try {
    const response = await api.sendOtp( phone );
    dispatch({ type: 'SEND_OTP_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SEND_OTP_FAILURE', payload: error.response.data.message || 'Failed to send OTP.' });
  }
};

export const verifyOtp = ( verificationId,otp) => async (dispatch) => {
  try {
    console.log(verificationId);
    const response = await api.verifyOtp({ verificationId, otp });
    return response.data;
    // console.log("verifyOtp response:", response.data);
    // dispatch({ type: 'VERIFY_OTP_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'VERIFY_OTP_FAILURE', payload: error.response.data.message || 'Failed to verify OTP.' });
  }
};
