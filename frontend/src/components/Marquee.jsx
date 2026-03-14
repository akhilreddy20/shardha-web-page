const ITEMS = [
  'GLOBAL OPPORTUNITIES',
  'ADMISSIONS OPEN 2025',
  'NAAC A+ ACCREDITED',
  'GLOBAL OPPORTUNITIES',
  'ADMISSIONS OPEN 2025',
  'NAAC A+ ACCREDITED',
  'GLOBAL OPPORTUNITIES',
  'ADMISSIONS OPEN 2025',
  'NAAC A+ ACCREDITED',
];

export default function Marquee() {
  return (
    <div className="bg-gray-900 py-3 overflow-hidden">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {ITEMS.concat(ITEMS).map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6">
            <span className="text-white text-[11px] font-bold tracking-[3px] uppercase">
              {item}
            </span>
            <span className="text-gray-600 text-lg">•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}