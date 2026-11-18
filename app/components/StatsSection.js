import Icon from './Icon';

const stats=[
  {value:'৭+',label:'Established',icon:'sparkle',accent:'from-[#f6c542]/30 to-[#f6c542]/5',iconColor:'text-[#ffd66b]'},
  {value:'১০০০+',label:'প্রশিক্ষিত শিক্ষার্থী',icon:'graduation',accent:'from-[#a70831]/40 to-[#a70831]/5',iconColor:'text-[#ff7898]'},
  {value:'৫০K+',label:'অনলাইন পরিবার',icon:'users',accent:'from-[#1877f2]/35 to-[#1877f2]/5',iconColor:'text-[#69a7ff]'},
  {value:'৫০০০+',label:'ডিজাইন সংগ্রহ',icon:'briefcase',accent:'from-[#8b5cf6]/35 to-[#8b5cf6]/5',iconColor:'text-[#b89cff]'}
];

export default function StatsSection(){return <section className="relative overflow-hidden border-y border-[#d6a936]/45 bg-[#070c0b] py-10"><div className="pointer-events-none absolute left-1/2 top-0 h-36 w-3/4 -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(214,169,54,.12),transparent_70%)]"/><div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 sm:gap-5 lg:grid-cols-4">{stats.map(x=><article key={x.label} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${x.accent} p-5 text-center shadow-[0_16px_45px_rgba(0,0,0,.2)] transition hover:-translate-y-1 hover:border-[#d6a936]/45 sm:p-7`}><div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/10"/><span className={`mx-auto grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-black/30 ${x.iconColor}`}><Icon name={x.icon} className="h-6 w-6"/></span><b className="mt-4 block font-display text-3xl font-extrabold text-white sm:text-4xl">{x.value}</b><p className="mt-2 text-xs font-bold tracking-wide text-white/60 sm:text-sm">{x.label}</p></article>)}</div></section>}
