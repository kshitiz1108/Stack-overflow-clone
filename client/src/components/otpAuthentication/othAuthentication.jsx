import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, verifyOtp } from '../../actions/otpActions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './OtpAuthentication.css';
const OtpAuthentication = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
//   const [error,setError] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { verificationId,error } = useSelector((state) => state.otp);
  useEffect(() => {
    if (verificationId) {
      localStorage.setItem('verificationId', `${verificationId}`);
    }
    // if(error){ localStorage.setItem('error', `${error}`);}
       
      
  }, [verificationId]);
//  console.log(verificationId);
  const handleSendOtp = () => {
    dispatch(sendOtp(phone))
      .then(() => {
        if(phone === ""){
            alert("Please enter your number to continue")
        }
        else{// Save the verificationId in localStorage
            // const ver_id = verificationId;
            // console.log(ver_id);
        // localStorage.setItem('verificationId', verificationId);
        
        setIsOtpSent(true);
        // const ver_id = verificationId;
        // console.log(ver_id);
    }
      })
      .catch((error) => {
        // Handle any error that occurs during OTP sending
        console.log('Error sending OTP:', error);
      });

  };

  const handleVerifyOtp = () => {
    const verification_Id = localStorage.getItem('verificationId');
  
    dispatch(verifyOtp(verification_Id,otp))
      .then((response) => {
        console.log(response);
        if (response && response.message === 'OTP verified successfully') {
            // OTP verification success
            localStorage.removeItem('verificationId');
            navigate('/askChatBot');
          } else {
            // OTP verification failed
            alert('Invalid OTP. Please try again.');
          }
      })
      .catch((error) => {
        // Handle any error that occurs during OTP verification
        console.log('Error verifying OTP:', error);
      });
  };

  return (
    <div className={`otp-auth-container ${isOtpSent ? 'otp-form-slide-up' : ''}`}>
    <h1 className='otp-heading'>Phone Authentication</h1>
    {isOtpSent ? (
      <>
        <p className='otp-info'>OTP Sent! Please enter the OTP received on your phone.</p>
        <input className="otp-input" type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <button className="otp-button" onClick={handleVerifyOtp}>Verify OTP</button>
        {error && <p>{error}</p>}
      </>
    ) : (
      <>
        <p className="otp-info">Enter your phone number to receive the OTP:</p>
        <input className="otp-input" type="text" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className="otp-button" onClick={handleSendOtp}>Send OTP</button>
        {error && <p className="error-message">{error}</p>}
      </>
    )}
  </div>
  );
};

export default OtpAuthentication;
