import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  program: {
    type: String,
    required: [true, 'Program selection is required'],
    enum: [
      'B.Tech Computer Science',
      'B.Tech Electronics',
      'B.Tech Mechanical',
      'MBA',
      'BBA',
      'LLB',
      'MBBS',
      'B.Des',
      'MCA',
    ],
  },
  state: {
    type: String,
    required: [true, 'State is required']
  },
  status: {
    type: String,
    enum: ['pending', 'under-review', 'accepted', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Admission', admissionSchema);