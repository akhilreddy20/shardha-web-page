const STATS = [
  { icon: '🎓', number: '25,000+', label: 'Students Enrolled'    },
  { icon: '🌍', number: '85+',     label: 'Countries Represented' },
  { icon: '🤝', number: '500+',    label: 'Industry Partners'     },
  { icon: '📈', number: '95%',     label: 'Placement Rate'        },
  { icon: '💼', number: '₹1 Crore',label: 'Highest Package'       },
  { icon: '🏆', number: 'NAAC A+', label: 'Accreditation'         },
];

export default function StatsBanner() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-dark-section">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 relative z-10">

        <div className="mb-16">
          <span className="section-label" style={{ color: '#E8C97A' }}>
            Why Sharda University
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white
            leading-tight mb-4">
            A Legacy of Excellence<br />Since 1996
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Sharda University stands among India's top private universities, delivering
            transformative education that bridges academia and industry across 10 schools.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10
          rounded-2xl overflow-hidden">
          {STATS.map((stat) => (
            <div key={stat.label}
              className="bg-white/[0.04] hover:bg-white/[0.09] transition-colors duration-300
                p-10 flex flex-col gap-3">
              <span className="text-3xl">{stat.icon}</span>
              <span className="font-display text-4xl font-bold text-gold leading-none">
                {stat.number}
              </span>
              <span className="text-[12px] font-medium text-white/50 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}