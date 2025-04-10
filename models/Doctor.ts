import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: Number, required: true },
  qualification: { type: String, required: true },
  rating: { type: Number, required: true },
  consultationTime: { type: Number, required: true },
  consultationFee: { type: Number, required: true },
  availability: { type: String, required: true },
  image: { type: String, required: true }
});

export const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema); 