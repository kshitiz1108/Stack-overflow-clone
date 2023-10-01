// routes/Subscription.js

import Subscription from '../models/Subscription.js';
// import authMiddleware from '../middleware/auth.js';



// Middleware to protect subscription routes, only authenticated users should access
// router.use(authMiddleware);
export const subscribe = async (req, res) => {
    const { plan } = req.body;
    const { userId } = req.user; // Assuming you have a user object available after authentication
  
    // Add your logic here to calculate the expiryDate based on the plan
    // ...
  
    try {
      // Check if the user already has a subscription
      const existingSubscription = await Subscription.findOne({ userId });
      if (existingSubscription) {
        // Update the existing subscription with the new plan and expiry date
        existingSubscription.plan = plan;
        existingSubscription.expiryDate = expiryDate;
        await existingSubscription.save();
      } else {
        // Create a new subscription for the user
        const newSubscription = new Subscription({
          userId,
          plan,
          expiryDate,
        });
        await newSubscription.save();
      }
  
      res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      res.status(500).json({ message: 'Subscription failed', error: error.message });
    }
  }
// Route to create a new subscription for the user


// Route to get the current user's subscription details
export const subscription =  async (req, res) => {
    const { userId } = req.user;
  
    try {
      const subscription = await Subscription.findOne({ userId });
      res.status(200).json({ subscription });
    } catch (error) {
      res.status(500).json({ message: 'Failed to get subscription details', error: error.message });
    }
  }



