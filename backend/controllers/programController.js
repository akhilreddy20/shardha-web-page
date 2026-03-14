import Program from '../models/Program.js';

const defaultPrograms = [
  { title: 'B.Tech Computer Science', slug: 'btech-cse', category: 'engineering', specialization: 'AI & Machine Learning', tags: ['AI & ML', 'Cloud Computing', 'Data Science'], featured: true },
  { title: 'B.Tech Electronics', slug: 'btech-ece', category: 'engineering', specialization: 'VLSI & Embedded Systems', tags: ['IoT', 'Robotics', 'Automation'], featured: true },
  { title: 'B.Tech Mechanical', slug: 'btech-mech', category: 'engineering', specialization: 'Mechatronics & Auto', tags: ['Automotive', 'Thermodynamics', 'Design'], featured: true },
  { title: 'MBA', slug: 'mba', category: 'management', specialization: 'Business Analytics', tags: ['Finance', 'Marketing', 'HR'], featured: true },
  { title: 'LLB', slug: 'llb', category: 'law', specialization: 'Corporate Law', tags: ['Criminal', 'Corporate', 'IPR'], featured: true },
  { title: 'MBBS', slug: 'mbbs', category: 'medical', specialization: 'General Medicine', tags: ['Surgery', 'Pediatrics', 'Oncology'], featured: true }
];

export const getPrograms = async (req, res) => {
  try {
    let programs = await Program.find();
    if (programs.length === 0) {
      programs = await Program.insertMany(defaultPrograms);
    }
    const { category } = req.query;
    if (category && category !== 'all') {
      programs = programs.filter(p => p.category === category);
    }
    res.json({ success: true, data: programs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};