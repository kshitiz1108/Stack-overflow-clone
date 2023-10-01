// models/Subscription.js
import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  plan: { type: String, enum: ['free', 'silver', 'gold'], default: 'free' },
  expiryDate: { type: Date },
});

export default mongoose.model('Subscription', subscriptionSchema);

