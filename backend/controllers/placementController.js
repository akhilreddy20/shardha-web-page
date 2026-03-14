import Placement from '../models/Placement.js';

const SEED_DATA = [
  { name: 'Rohit Jain',    degree: 'B.Tech CSE', company: 'Amazon',       package: '₹1 Crore', year: 2024 },
  { name: 'Aakanksha',     degree: 'MBA',         company: 'Google',       package: '₹50 LPA',  year: 2024 },
  { name: 'Amit Sharma',   degree: 'B.Tech ECE',  company: 'Microsoft',    package: '₹45 LPA',  year: 2024 },
  { name: 'Priya Singh',   degree: 'LLB',         company: 'Khaitan & Co', package: '₹25 LPA',  year: 2024 },
  { name: 'Rahul Verma',   degree: 'B.Des',       company: 'Adobe',        package: '₹30 LPA',  year: 2024 },
];

const seedIfEmpty = async () => {
  const count = await Placement.countDocuments();
  if (count === 0) {
    await Placement.insertMany(SEED_DATA);
    console.log('✅ Placements seeded');
  }
};

export const getPlacements = async (req, res) => {
  try {
    await seedIfEmpty();
    const { year } = req.query;
    const filter = year ? { year: Number(year) } : {};
    const placements = await Placement.find(filter).sort({ package: -1 });
    res.json({ success: true, count: placements.length, data: placements });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPlacementById = async (req, res) => {
  try {
    const placement = await Placement.findById(req.params.id);
    if (!placement) {
      return res.status(404).json({ success: false, message: 'Placement record not found' });
    }
    res.json({ success: true, data: placement });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};