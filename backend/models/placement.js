import mongoose from 'mongoose';

const placementSchema = new mongoose.Schema({
  name:    { type: String, required: [true, 'Name is required'] },
  degree:  { type: String, required: [true, 'Degree is required'] },
  company: { type: String, required: [true, 'Company is required'] },
  package: { type: String, required: [true, 'Package is required'] },
  year:    { type: Number, default: new Date().getFullYear() },
  avatar:  { type: String },
});

export default mongoose.model('Placement', placementSchema);