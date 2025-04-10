import mongoose from 'mongoose';

const symptomSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // User ID or anonymous ID
  symptoms: [{ type: String, required: true }], // Array of symptoms
  severity: { type: Number, required: true, min: 1, max: 10 }, // Severity from 1-10
  duration: { type: String, required: true }, // How long they've experienced symptoms
  additionalNotes: { type: String }, // Any additional information
  createdAt: { type: Date, default: Date.now } // When the record was created
});

export const Symptom = mongoose.models.Symptom || mongoose.model('Symptom', symptomSchema); 