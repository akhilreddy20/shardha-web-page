const CHECKLIST = [
  'NAAC A+ Accredited University',
  '100 acres of lush green eco friendly campus',
  "Top Ranked Among India's Top 50 Universities",
  '40,000+ Alumni Network across the globe',
  'Distinguished faculty with global experience',
  'On campus 1200+ bed super specialty hospital',
];

const ADVANTAGES = [
  { icon: '🌍', title: 'Global Exposure',    desc: 'Tie ups with 250+ global universities for exchange programs.' },
  { icon: '🏭', title: 'Industry Ready',     desc: 'Curriculum designed by industry experts to ensure employability.' },
  { icon: '👥', title: 'Sharda Community',  desc: 'Students from 95+ countries creating a rich cultural mosaic.' },
];

const BIG_STATS = [
  { number: '03',    label: 'Nobel Laureates' },
  { number: '1023+', label: 'Patents'         },
  { number: '200+',  label: 'Startups'        },
  { number: '7+',    label: 'Students'        },
  { number: '1100+', label: 'Faculty'         },
];

export default function WhyStudy() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Checklist ── */}
          <div>
            <span className="text-green-600 text-xs font-bold uppercase tracking-widest
              block mb-2">Discover Excellence</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Why Study at<br />
              <span className="text-red-600">Sharda University?</span>
            </h2>

            <ul className="flex flex-col gap-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600
                    flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Advantages dark card ── */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <h3 className="text-white font-bold text-base mb-5">Sharda Advantages</h3>

            <div className="flex flex-col gap-4">
              {ADVANTAGES.map((a) => (
                <div key={a.title}
                  className="flex items-start gap-4 bg-gray-800 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center
                    justify-center text-xl flex-shrink-0">
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{a.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Big stats row ── */}
        <div className="mt-14 grid grid-cols-3 sm:grid-cols-5 gap-4">
          {BIG_STATS.map((s) => (
            <div key={s.label} className="text-center py-6 bg-white rounded-xl
              border border-gray-100 shadow-sm">
              <div className="text-3xl font-extrabold text-indigo-600 mb-1">
                {s.number}
              </div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}