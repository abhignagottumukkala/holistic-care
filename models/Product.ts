import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  condition: { type: String },
  treatmentType: { type: String, enum: ['ayurveda', 'allopathy', 'homeopathy', 'traditional'] }
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema); 