import { useState, useEffect } from 'react';
import api from '../utils/api.js';

const CATEGORIES = ['Engineering', 'Management', 'Law', 'Medical', 'Sciences'];

const CARD_GRADIENTS = {
  Engineering: 'from-blue-600 to-blue-800',
  Management:  'from-purple-600 to-purple-800',
  Law:         'from-amber-600 to-amber-800',
  Medical:     'from-green-600 to-green-800',
  Sciences:    'from-teal-600 to-teal-800',
};

const CARD_EMOJIS = {
  Engineering: '💻', Management: '📊', Law: '⚖️', Medical: '🏥', Sciences: '🔬',
};

const FALLBACK = [
  { _id:'1', name:'B.Tech Computer Science', category:'Engineering', specialization:'AI & Machine Learning Specialization', tags:['AI & ML','Cloud Computing','Data Science'] },
  { _id:'2', name:'B.Tech Electronics',       category:'Engineering', specialization:'VLSI & Embedded Systems',               tags:['IoT','Robotics','Automation']            },
  { _id:'3', name:'B.Tech Mechanical',         category:'Engineering', specialization:'Mechatronics & Auto',                   tags:['Automotive','Thermodynamics','Design']   },
  { _id:'4', name:'MBA',                        category:'Management',  specialization:'Business Analytics',                   tags:['Finance','Marketing','HR']               },
  { _id:'5', name:'LLB',                        category:'Law',         specialization:'Corporate Law',                        tags:['Civil','Criminal','IPR']                 },
  { _id:'6', name:'MBBS',                       category:'Medical',     specialization:'General Medicine',                     tags:['Surgery','Pediatrics','Oncology']        },
];

export default function Programs() {
  const [programs,  setPrograms]  = useState(FALLBACK);
  const [active,    setActive]    = useState('Engineering');
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    api.get('/api/programs')
      .then(res => { if (res.data.data?.length) setPrograms(res.data.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = programs.filter(p => p.category === active);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-10">
          <span className="text-green-600 text-xs font-bold uppercase tracking-widest
            block mb-2">Academics</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Programs</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Explore our diverse range of industry aligned programs designed to launch your career.
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === cat
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {cat}
            </button>
          ))}
        </div>


        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl bg-gray-100 animate-pulse h-72" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program, i) => (
              <div key={program._id}
                className="rounded-xl border border-gray-100 overflow-hidden
                  shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">


                <div className={`h-44 bg-gradient-to-br
                  ${CARD_GRADIENTS[program.category] || 'from-gray-600 to-gray-800'}
                  flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl opacity-30">
                    {CARD_EMOJIS[program.category] || '📚'}
                  </span>

                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-1">
                    {program.name || program.title}
                  </h3>
                  {program.specialization && (
                    <p className="text-gray-400 text-xs mb-3">{program.specialization}</p>
                  )}


                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {program.tags?.map(tag => (
                      <span key={tag}
                        className="text-[11px] font-medium text-gray-500
                          bg-gray-100 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#admissions"
                    className="inline-flex items-center gap-1 text-sm font-semibold
                      text-green-600 hover:text-green-700 transition-colors duration-200">
                    View Details
                    <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}