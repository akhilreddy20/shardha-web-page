export default function Footer() {
  return (
    <footer className="bg-[#0F1E3C] py-10">
      <div className="flex justify-center mb-7">
        <div className="bg-white rounded-lg px-6 py-3 flex items-center gap-3 shadow-md">

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <polygon points="20,2 24,14 38,14 27,22 31,34 20,26 9,34 13,22 2,14 16,14" fill="#1a3a6b" opacity="0.15"/>
                <polygon points="20,4 23,13 36,13 26,20 29,32 20,25 11,32 14,20 4,13 17,13" fill="#C9A84C" />
                <polygon points="20,8 22,14 30,14 24,18 26,26 20,22 14,26 16,18 10,14 18,14" fill="#1a3a6b" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#1a3a6b] font-black text-lg tracking-wide leading-none">
                SHARDA
              </span>
              <span className="text-[#1a3a6b] font-black text-lg tracking-wide leading-none">
                UNIVERSITY
              </span>
              <span className="text-[#8a9bb5] text-[9px] tracking-[3px] mt-0.5">
                Beyond Boundaries
              </span>
            </div>
          </div>


          <div className="w-px h-12 bg-gray-200 mx-1" />


          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-[#1a3a6b]
              flex flex-col items-center justify-center bg-white">
              <span className="text-[#1a3a6b] font-black text-xs leading-none">NAAC</span>
              <span className="text-[#1a3a6b] font-black text-base leading-none">A+</span>
            </div>
            <span className="text-[8px] text-[#8a9bb5] mt-1 uppercase tracking-wider font-semibold">
              ACCREDITED
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-[#8a9bb5] text-[13px] leading-relaxed
        max-w-3xl mx-auto px-6 mb-7">
        University Grants Commission has empowered Sharda University to award the degrees
        under Section 22 of UGC Act 1956. It is a full-fledged University and not a
        deemed University.
      </p>


      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1e3056]" />
      </div>


      <p className="text-center text-[#6a7d9a] text-[13px] mt-6">
        © {new Date().getFullYear()} Sharda University. All Rights Reserved.
      </p>
    </footer>
  );
}
