// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
import twilio from 'twilio';

import readLine  from 'readline';
const accountSid = "ACcdd31ae7a7cb4f4af6657b023fc255de";
const authToken = "ca7382f04b055a99e6b22db4aad14362";
const verifySid = "VA52f4e5f1e4c441601f03e8e5f1a6f742";
const client = twilio(accountSid, authToken);

// client.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: "+916300346239", channel: "sms" })
//   .then((verification) => console.log(verification.status))
//   .then(() => {
//     const readline = readLine.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question("Please enter the OTP:", (otpCode) => {
//       client.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: "+917989517241", code: otpCode })
//         .then((verification_check) => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
//   });


  
export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  try {
    const verification = await client.verify.v2
      .services(verifySid)
      .verifications.create({
         to: `+${phone}`,
        channel: 'sms',
      });
      console.log(verification.to)
      res.status(200).json({ message: 'OTP sent successfully', verificationId: verification.sid, phone:verification });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { verificationId,otp  } = req.body;
 try {
    const verification_check = await client.verify.v2.services(verifySid)
    .verificationChecks
    .create({
      verificationSid: `${verificationId}`,
       code: `${otp}`
     })
    console.log(verification_check.status)
    // .then(verification_check => console.log(verification_check.status));
    if (verification_check.status === 'approved') {
      res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ message: 'Invalid OTP.' });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};
  

