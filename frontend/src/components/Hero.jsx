import { useState , useEffect} from 'react';
import api from '../utils/api.js';

const PROGRAMS = [
  'B.Tech Computer Science','B.Tech Electronics','B.Tech Mechanical',
  'MBA','BBA','LLB','MBBS','B.Des','MCA',
];
const STATES = [
  'Andhra Pradesh','Delhi','Gujarat','Haryana','Karnataka',
  'Maharashtra','Punjab','Rajasthan','Tamil Nadu','Telangana',
  'Uttar Pradesh','West Bengal','Other',
];

const INITIAL = { fullName:'', email:'', phone:'', program:'', state:'' };

function validate(f) {
  const e = {};
  if (!f.fullName.trim() || f.fullName.trim().length < 2) e.fullName = 'Required';
  if (!f.email || !/^\S+@\S+\.\S+$/.test(f.email))       e.email   = 'Valid email required';
  if (!f.phone || !/^\+?[\d\s\-]{8,15}$/.test(f.phone))  e.phone   = 'Valid phone required';
  if (!f.program) e.program = 'Select a program';
  if (!f.state)   e.state   = 'Select your state';
  return e;
}

const STATS = [
  { icon: '🏆', label: 'RANKING',   bold: '#1',   rest: ' Private'  },
  { icon: '🎯', label: 'DIVERSITY', bold: '95+',  rest: ' Nations'  },
  { icon: '🎓', label: 'PLACEMENT', bold: '100%', rest: ' Support'  },
];

export default function Hero() {
  const [form,    setForm]    = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [apiErr,  setApiErr]  = useState('');

  useEffect(() => {
    api.get('/api/health').catch(() => {});
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
    setSuccess(''); setApiErr('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const res = await api.post('/api/admissions', form);
      setSuccess(res.data.message || "Application submitted! We'll contact you shortly.");
      setForm(INITIAL); setErrors({});
    } catch (err) {
      setApiErr(err.message || 'Submission failed. Please try again.');
    } finally { setLoading(false); }
  };

  const inp = (field) =>
    `w-full px-3.5 py-2.5 text-sm border rounded-lg outline-none transition-all duration-200
     placeholder-gray-400 bg-white text-gray-800
     ${errors[field]
       ? 'border-red-400 focus:ring-2 focus:ring-red-100'
       : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'}`;

  return (
    <section id="home" className="bg-white pt-[72px]">
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-20
        grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        <div className="flex flex-col">

          <div className="inline-flex items-center gap-2 mb-8 self-start
            border border-gray-200 rounded-full px-4 py-1.5 bg-white shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
            <span className="text-[12px] font-bold text-gray-700 tracking-wide">
              ADMISSIONS OPEN 2025-26
            </span>
          </div>

          <div className="mb-6">

            <h1 className="font-black text-[#0d1b3e] leading-none mb-1"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontFamily: 'inherit' }}>
              Empowering
            </h1>


            <div className="relative inline-block">
              <h1 className="font-black leading-tight relative z-10"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontFamily: 'inherit' }}>
                <span className="text-[#1a3a6b]">Future </span>
                <span className="text-red-600">Leaders</span>
              </h1>

              <div className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 -z-0 rounded-sm opacity-60" />
            </div>
          </div>
          <div className="mb-10 text-gray-600 text-[15px] leading-relaxed max-w-md">
            <p>
              Join a vibrant community where{' '}
              <strong className="text-gray-800 font-semibold">innovation meets tradition.</strong>
            </p>
            <p className="mt-1">
              We foster academic excellence and holistic development for students
              from over 95 countries.
            </p>
          </div>


          <div className="flex items-start gap-12 mt-auto">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">{s.icon}</span>
                  <span className="text-[10px] font-bold text-gray-400 tracking-[2px] uppercase">
                    {s.label}
                  </span>
                </div>
                <div className="text-[22px] font-black text-gray-900 leading-none">
                  {s.bold}
                  <span className="text-[15px] font-medium text-gray-500 ml-0.5">
                    {s.rest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">


          <div className="relative h-44 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br
              from-amber-200 via-orange-300 to-rose-400" />

            <div className="absolute inset-0 opacity-60"
              style={{
                background: 'linear-gradient(135deg, #d4894a 0%, #c17b3a 30%, #a86432 60%, #8b4513 100%)'
              }} />

            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-30">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-14 h-14 rounded-full bg-amber-100 border-2 border-white/40" />
              ))}
            </div>


            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-yellow-300 text-[10px] font-bold tracking-[2px] uppercase">
                  Premium Education
                </span>
              </div>
              <h2 className="text-white font-bold text-xl leading-tight">
                Start Your Journey
              </h2>
            </div>
          </div>
          <div className="p-6">
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg
                text-green-700 text-sm">{success}</div>
            )}
            {apiErr && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg
                text-red-700 text-sm">{apiErr}</div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500
                    uppercase tracking-widest mb-1.5">
                    Full Name
                  </label>
                  <input name="fullName" type="text" placeholder="John Doe"
                    value={form.fullName} onChange={handleChange}
                    className={inp('fullName')} />
                  {errors.fullName &&
                    <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500
                    uppercase tracking-widest mb-1.5">
                    Email Address
                  </label>
                  <input name="email" type="email" placeholder="john@example.com"
                    value={form.email} onChange={handleChange}
                    className={inp('email')} />
                  {errors.email &&
                    <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500
                  uppercase tracking-widest mb-1.5">
                  Phone Number
                </label>
                <input name="phone" type="tel" placeholder="+91 98765 43210"
                  value={form.phone} onChange={handleChange}
                  className={inp('phone')} />
                {errors.phone &&
                  <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500
                    uppercase tracking-widest mb-1.5">
                    Program
                  </label>
                  <select name="program" value={form.program} onChange={handleChange}
                    className={inp('program')}>
                    <option value="">Select Program</option>
                    {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.program &&
                    <p className="text-red-500 text-[10px] mt-1">{errors.program}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500
                    uppercase tracking-widest mb-1.5">
                    State
                  </label>
                  <select name="state" value={form.state} onChange={handleChange}
                    className={inp('state')}>
                    <option value="">Select State</option>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state &&
                    <p className="text-red-500 text-[10px] mt-1">{errors.state}</p>}
                </div>
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white
                  bg-[#1a3a6b] hover:bg-[#152e58] transition-colors duration-200
                  disabled:opacity-60 disabled:cursor-not-allowed mt-1
                  flex items-center justify-center gap-2">
                {loading
                  ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white
                      rounded-full animate-spin" />Submitting...</>
                  : 'Get Started Now'}
              </button>

              <p className="text-gray-400 text-[11px] text-center">
                By registering, you agree to our Terms &amp; Conditions
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}