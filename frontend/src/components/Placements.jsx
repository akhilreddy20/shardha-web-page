import { useState, useEffect } from 'react';
import api from '../utils/api.js';

const COMPANY_COLORS = {
  Amazon:       '#FF9900',
  Google:       '#4285F4',
  Microsoft:    '#00A4EF',
  KhaitanCo:    '#2C5530',
  Adobe:        '#FF0000',
  Flipkart:     '#2874F0',
};

const AVATAR_COLORS = [
  'from-orange-400 to-red-500',
  'from-blue-400 to-indigo-600',
  'from-sky-400 to-blue-600',
  'from-emerald-400 to-teal-600',
  'from-rose-400 to-pink-600',
];

const FALLBACK = [
  { _id:'1', name:'Rohit Jain',   degree:'B.Tech CSE', company:'Amazon',       package:'₹ 1 Crore' },
  { _id:'2', name:'Aakanksha',    degree:'MBA',         company:'Google',       package:'₹ 50 LPA'  },
  { _id:'3', name:'Amit Sharma',  degree:'B.Tech',      company:'Microsoft',    package:'₹ 45 LPA'  },
  { _id:'4', name:'Priya Singh',  degree:'Law',         company:'Khaitan & Co', package:'₹ 25 LPA'  },
  { _id:'5', name:'Rahul Verma',  degree:'B.Des',       company:'Adobe',        package:'₹ 30 LPA'  },
];

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export default function Placements() {
  const [placements, setPlacements] = useState(FALLBACK);

  useEffect(() => {
    api.get('/api/placements')
      .then(res => { if (res.data.data?.length) setPlacements(res.data.data); })
      .catch(() => {});
  }, []);

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-green-600 text-xs font-bold uppercase tracking-widest
            block mb-2">Success Stories</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Top Placements</h2>
          <p className="text-gray-500 text-sm">
            Our students are making a mark in top global companies with record breaking packages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {placements.map((p, i) => (
            <div key={p._id}
              className="flex flex-col items-center text-center p-6 rounded-2xl
                bg-gray-50 border border-gray-100 hover:shadow-lg
                hover:-translate-y-1 transition-all duration-300">

              <div className={`w-16 h-16 rounded-full bg-gradient-to-br
                ${AVATAR_COLORS[i % AVATAR_COLORS.length]}
                flex items-center justify-center
                font-bold text-white text-lg mb-3 shadow-md`}>
                {getInitials(p.name)}
              </div>

              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-0.5">
                {p.name}
              </h3>
              <p className="text-gray-400 text-xs mb-3">{p.degree}</p>

              <p className="text-sm font-bold mb-1.5"
                style={{ color: COMPANY_COLORS[p.company] || '#374151' }}>
                {p.company}
              </p>

              <span className="text-sm font-extrabold text-gray-800 bg-gray-200
                px-3 py-1 rounded-full">
                {p.package}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
