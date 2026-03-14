import Admission from '../models/admission.js';

// POST /api/admissions  — submit a new enquiry
export const createAdmission = async (req, res) => {
  try {
    const { fullName, email, phone, program, state } = req.body;

    if (!fullName || !email || !phone || !program || !state) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: fullName, email, phone, program, state',
      });
    }

    const existing = await Admission.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'An application with this email already exists.',
      });
    }

    const admission = await Admission.create({ fullName, email, phone, program, state });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our team will contact you within 24 hours.',
      data: {
        id:        admission._id,
        fullName:  admission.fullName,
        email:     admission.email,
        program:   admission.program,
        status:    admission.status,
        createdAt: admission.createdAt,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'An application with this email already exists.',
      });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getAllAdmissions = async (req, res) => {
  try {
    const { status, program } = req.query;
    const filter = {};
    if (status)  filter.status  = status;
    if (program) filter.program = program;

    const admissions = await Admission.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: admissions.length, data: admissions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getStats = async (req, res) => {
  try {
    const [total, pending, accepted, rejected] = await Promise.all([
      Admission.countDocuments(),
      Admission.countDocuments({ status: 'pending' }),
      Admission.countDocuments({ status: 'accepted' }),
      Admission.countDocuments({ status: 'rejected' }),
    ]);
    res.json({ success: true, data: { total, pending, accepted, rejected } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['pending', 'under-review', 'accepted', 'rejected'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: `Status must be one of: ${allowed.join(', ')}` });
    }
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!admission) {
      return res.status(404).json({ success: false, message: 'Admission not found' });
    }
    res.json({ success: true, message: 'Status updated', data: admission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};