import Partner from '../models/Partner.js';

const SEED_DATA = [
  {
    name: 'Harvard Business School',
    country: 'USA',
    type: 'Online Certification',
    established: 2018,
    description: 'Executive education programs and case study methodologies.',
    featured: true,
  },
  {
    name: 'University of Plymouth',
    country: 'United Kingdom',
    type: 'Student Exchange',
    established: 2019,
    description: 'Semester exchange for engineering and science students.',
    featured: true,
  },
  {
    name: 'Western University',
    country: 'Canada',
    type: 'Research Collaboration',
    established: 2020,
    description: 'Joint research initiatives in AI and biotechnology.',
    featured: true,
  },
  {
    name: 'Curtin University',
    country: 'Australia',
    type: 'Dual Degree',
    established: 2017,
    description: 'Dual degree programs across engineering and business disciplines.',
    featured: true,
  },
];

const seedIfEmpty = async () => {
  const count = await Partner.countDocuments();
  if (count === 0) {
    await Partner.insertMany(SEED_DATA);
    console.log(' Partners seeded');
  }
};

export const getPartners = async (req, res) => {
  try {
    await seedIfEmpty();
    const { type, featured } = req.query;
    const filter = {};
    if (type)     filter.type     = type;
    if (featured) filter.featured = featured === 'true';
    const partners = await Partner.find(filter).sort({ established: -1 });
    res.json({ success: true, count: partners.length, data: partners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    res.json({ success: true, data: partner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};