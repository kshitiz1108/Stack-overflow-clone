// components/Subscription.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeAndFetchDetails, fetchSubscriptionDetails } from '../../actions/subscription';

const Subscription = () => {
  const dispatch = useDispatch();
  const { plan, expiryDate, loading, error } = useSelector((state) => state.subscription);

  useEffect(() => {
    // Fetch the user's subscription details when the component mounts
    dispatch(fetchSubscriptionDetails());
  }, [dispatch]);

  const handleSubscribe = (plan) => {
    dispatch(subscribeAndFetchDetails(plan));
  };

  return (
    <div>
      <h2>Subscription Plans</h2>
      <button onClick={() => handleSubscribe('free')}>Subscribe to Free Plan</button>
      <button onClick={() => handleSubscribe('silver')}>Subscribe to Silver Plan</button>
      <button onClick={() => handleSubscribe('gold')}>Subscribe to Gold Plan</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {plan && (
        <div>
          <h3>Your Subscription Details</h3>
          <p>Plan: {plan}</p>
          <p>Expiry Date: {expiryDate}</p>
        </div>
      )}
    </div>
  );
};

export default Subscription;
