import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  name:        { type: String, required: [true, 'Partner name is required'] },
  country:     { type: String, required: [true, 'Country is required'] },
  type: {
    type: String,
    enum: ['Online Certification', 'Student Exchange', 'Research Collaboration', 'Dual Degree'],
  },
  logo:        { type: String },
  established: { type: Number },
  description: { type: String },
  featured:    { type: Boolean, default: false },
});

export default mongoose.model('Partner', partnerSchema);