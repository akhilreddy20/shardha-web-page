const AWARDS = [
  {
    icon: '🏆',
    color: 'bg-amber-500',
    badge: 'Top 150',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'NIRF Ranking',
    desc: 'Ranked among top universities in India by Ministry of Education',
  },
  {
    icon: '🛡️',
    color: 'bg-green-500',
    badge: 'Accredited',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'NAAC A+',
    desc: 'Highest grade accreditation for quality education and infrastructure',
  },
  {
    icon: '⭐',
    color: 'bg-blue-500',
    badge: 'Gold Rating',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'QS I-Gauge',
    desc: 'Awarded Gold University rating for overall excellence',
  },
  {
    icon: '🎯',
    color: 'bg-purple-500',
    badge: 'Best University',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'ASSOCHAM',
    desc: 'Recognized for excellence in industry interface and placements',
  },
];

const LEGACY_STATS = [
  { icon: '📅', number: '27+',  label: 'Year Legacy'          },
  { icon: '🤝', number: '250+', label: 'Partner Universities'  },
  { icon: '🚀', number: '100+', label: 'Startups Incubated'    },
  { icon: '📄', number: '500+', label: 'Patents Published'      },
];

export default function HallOfFame() {
  return (
    <section id="highlights" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
              🏛 Hall of Fame
            </span>
          </div>
          <h2 className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            <span className="text-white">Excellence</span>
            <span className="text-green-400"> Recognized</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Our commitment to academic quality and student success has been consistently
            acknowledged by prestigious national and international bodies.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {AWARDS.map((a) => (
            <div key={a.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6
                hover:border-gray-700 transition-colors duration-300">
              <div className={`w-12 h-12 ${a.color} rounded-full flex items-center
                justify-center text-2xl mb-4`}>
                {a.icon}
              </div>

              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full
                uppercase tracking-wider ${a.badgeColor} inline-block mb-3`}>
                {a.badge}
              </span>
              <h3 className="text-white font-bold text-base mb-2">{a.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {LEGACY_STATS.map((s) => (
            <div key={s.label}
              className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-5
                flex items-center gap-4">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="text-white font-extrabold text-2xl leading-none mb-0.5">
                  {s.number}
                </div>
                <div className="text-gray-400 text-xs font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}