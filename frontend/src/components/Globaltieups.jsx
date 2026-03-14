import { useState, useEffect } from 'react';
import api from '../utils/api.js';

const FLAGS = {
  USA: '🇺🇸', 'United Kingdom': '🇬🇧',
  Canada: '🇨🇦', Australia: '🇦🇺',
};

const TYPE_COLORS = {
  'Online Certification':   'text-blue-400',
  'Student Exchange':       'text-green-400',
  'Research Collaboration': 'text-orange-400',
  'Dual Degree':            'text-purple-400',
};

const FALLBACK = [
  { _id:'1', name:'Harvard Business School', country:'USA',            type:'Online Certification',   established:2018, description:'Executive education programs and case study methodologies for business students.', programs:'15+' },
  { _id:'2', name:'University of Plymouth',  country:'United Kingdom', type:'Student Exchange',       established:2019, description:'Semester exchange opportunities for engineering and science students.', programs:'8+'  },
  { _id:'3', name:'Western University',       country:'Canada',         type:'Research Collaboration', established:2020, description:'Joint research initiatives in AI and biotechnology fields.', programs:'12+' },
  { _id:'4', name:'Curtin University',        country:'Australia',      type:'Dual Degree',            established:2017, description:'Dual degree programs across engineering and business disciplines.', programs:'6+'  },
];

export default function GlobalTieUps() {
  const [partners,  setPartners]  = useState(FALLBACK);
  const [selected,  setSelected]  = useState(FALLBACK[0]);

  useEffect(() => {
    api.get('/api/partners')
      .then(res => {
        if (res.data.data?.length) {
          setPartners(res.data.data);
          setSelected(res.data.data[0]);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-green-600 text-xs font-bold uppercase tracking-widest
            block mb-2">🌐 Global Tie-Ups</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Connecting You to<br />
            <span>The World's </span>
            <span className="text-red-600">Best.</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            We have established strategic partnerships with over{' '}
            <span className="text-green-600 font-semibold">250+ Prestigious Universities</span>{' '}
            across the globe to provide our students with limitless opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">


          <div className="flex flex-col gap-2">
            {partners.map((p) => (
              <button key={p._id}
                onClick={() => setSelected(p)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200
                  flex items-center gap-4
                  ${selected?._id === p._id
                    ? 'bg-gray-900 border-gray-700 shadow-lg'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
              >

                <div className="flex flex-col items-center gap-0.5 flex-shrink-0 w-14">
                  <span className="text-2xl">{FLAGS[p.country] || '🌍'}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wide
                    ${selected?._id === p._id ? 'text-gray-400' : 'text-gray-400'}`}>
                    {p.country}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm truncate
                    ${selected?._id === p._id ? 'text-white' : 'text-gray-800'}`}>
                    {p.name}
                  </p>
                  <p className={`text-xs mt-0.5
                    ${selected?._id === p._id
                      ? TYPE_COLORS[p.type] || 'text-gray-400'
                      : 'text-gray-400'}`}>
                    {p.type}
                  </p>
                </div>


                {selected?._id === p._id && (
                  <span className="text-green-400 text-sm flex-shrink-0">›</span>
                )}
              </button>
            ))}
          </div>

          {selected && (
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">

              <div className="h-48 bg-gradient-to-br from-amber-800 to-amber-950
                relative flex items-end p-6">

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-300 text-[10px] font-bold uppercase
                      tracking-widest bg-amber-900/60 px-2 py-0.5 rounded">
                      {selected.country}
                    </span>
                    {selected.established && (
                      <span className="text-amber-300 text-[10px] font-bold
                        bg-amber-900/60 px-2 py-0.5 rounded">
                        Est. {selected.established}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight">
                    {selected.name}
                  </h3>
                </div>
              </div>
              <div className="bg-gray-900 p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {selected.description}
                </p>
                <div className="flex items-center gap-6">
                  {selected.programs && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-green-400 text-xs font-bold">
                        {selected.programs} Programs
                      </span>
                      <span className="text-gray-500 text-xs">Active</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-gray-300 text-xs font-semibold">Verified</span>
                  </div>
                </div>
                <p className="text-gray-500 text-[11px] mt-1">Partnership Status</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}