import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, enum: ['engineering', 'management', 'law', 'medical', 'sciences'], required: true },
  specialization: { type: String },
  tags: [String],
  duration: { type: String, default: '4 Years' },
  description: { type: String },
  featured: { type: Boolean, default: false }
});

export default mongoose.model('Program', programSchema);