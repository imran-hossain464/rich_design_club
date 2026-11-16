'use client';

import { useState } from 'react';
import { ArrowUpRight, BadgeCheck, BookOpen, ChevronDown, Clock3, Facebook, Menu, MonitorPlay, Play, Sparkles, Users, X, Youtube } from 'lucide-react';

const courses = [
  ['০১', 'ফ্ল্যাট এমব্রয়ডারি', 'Flat Design'],
  ['০২', 'সিকুইন ডিজাইন', 'Sequin Design'],
  ['০৩', 'আড়ি ডিজাইন', 'Aari Design'],
  ['০৪', 'কর্ডিং ডিজাইন', 'Cording Design'],
  ['০৫', 'চেনিল ডিজাইন', 'Chenille Design'],
  ['০৬', 'লেজার কাটিং ডিজাইন', 'Laser Cutting'],
  ['০৭', '২ ইন সিকুইন ডিজাইন', '2 in Sequin'],
  ['০৮', 'বিডস বিশেষ ক্লাস', 'Beads Special'],
  ['০৯', 'লোগো ডিজাইন', 'Logo Design'],
];

const onlineSteps = [
  ['যোগাযোগ করুন', 'অফিসিয়াল ফেসবুক পেজ অথবা WhatsApp-এ যোগাযোগ করুন।'],
  ['তথ্য প্রদান', 'নাম, ঠিকানা, মোবাইল নম্বর ও প্রয়োজনীয় তথ্য দিন।'],
  ['ভর্তি ফি জমা', 'নির্ধারিত ফি বিকাশ/নগদ অথবা নির্ধারিত মাধ্যমে পরিশোধ করুন।'],
  ['পেমেন্ট নিশ্চিত করুন', 'Transaction ID (TrxID) ও পেমেন্টের স্ক্রিনশট পাঠান।'],
  ['ভর্তি নিশ্চিত', 'পেমেন্ট যাচাই শেষে আপনার ভর্তি নিশ্চিত করা হবে।'],
  ['ক্লাস শুরু', 'ক্লাসের নিয়ম, সফটওয়্যার ও প্রয়োজনীয় নির্দেশনা দেওয়া হবে।'],
];

const offlineSteps = [
  ['সরাসরি উপস্থিতি', 'ভর্তি হতে প্রশিক্ষণ কেন্দ্রে সরাসরি আসতে হবে।'],
  ['ভর্তি ফরম', 'নিজের প্রয়োজনীয় তথ্য দিয়ে ভর্তি ফরম পূরণ করুন।'],
  ['ভর্তি ফি জমা', 'নির্ধারিত ভর্তি ফি সরাসরি জমা দিন।'],
  ['আসন নিশ্চিতকরণ', 'ফি ও তথ্য যাচাইয়ের পর আসন নিশ্চিত করা হবে।'],
  ['ক্লাসে অংশগ্রহণ', 'নির্ধারিত সময় অনুযায়ী ক্লাসে অংশ নিন।'],
  ['নিয়ম মেনে চলুন', 'প্রতিষ্ঠানের নিয়মকানুন ও শৃঙ্খলা মেনে চলুন।'],
];

function Logo() {
  return <a className="logo" href="#home" aria-label="Rich Design Club হোম"><span>R</span><b>RICH DESIGN<br/><em>CLUB™</em></b></a>;
}

function Steps({ items }) {
  return <div className="steps">{items.map(([title, text], i) => <article className="step" key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h4>{title}</h4><p>{text}</p></div></article>)}</div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState('online');

  return <main>
    <header className="nav-wrap">
      <nav className="nav container">
        <Logo />
        <div className={`nav-links ${menu ? 'open' : ''}`}>
          <a href="#courses" onClick={() => setMenu(false)}>কোর্স</a>
          <a href="#benefits" onClick={() => setMenu(false)}>সুবিধা</a>
          <a href="#admission" onClick={() => setMenu(false)}>ভর্তির নিয়ম</a>
          <a href="#contact" onClick={() => setMenu(false)}>যোগাযোগ</a>
          <a className="nav-cta" href="#admission" onClick={() => setMenu(false)}>ভর্তি হোন <ArrowUpRight size={17}/></a>
        </div>
        <button className="menu-btn" aria-label="মেনু" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <section className="hero" id="home">
      <div className="orb orb-one"/><div className="orb orb-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> ডিজাইন শিখুন, ক্যারিয়ার গড়ুন</div>
          <h1>আপনার সৃজনশীলতাকে<br/><span>দক্ষতায় রূপ দিন</span></h1>
          <p>প্রফেশনাল এমব্রয়ডারি ডিজাইনের বেসিক থেকে অ্যাডভান্স—হাতে-কলমে শিখুন অভিজ্ঞ গাইডলাইনে।</p>
          <div className="hero-actions">
            <a className="btn primary" href="#admission">আজই ভর্তি হোন <ArrowUpRight size={19}/></a>
            <a className="btn ghost" href="https://youtube.com/@richdesignclub-pt3iw?si=p3n-fXHCJ1hGwf5z" target="_blank" rel="noreferrer"><Play size={18} fill="currentColor"/> ভিডিও দেখুন</a>
          </div>
          <div className="mini-proof"><div className="avatars"><i>RD</i><i>✦</i><i>DC</i></div><p><b>৩০ দিনের</b><br/>Basic to Advance কোর্স</p></div>
        </div>
        <div className="hero-art" aria-label="এমব্রয়ডারি ডিজাইন শেখার প্রতীকী চিত্র">
          <div className="stitch-card main-card"><div className="hoop"><div className="flower"><i/><i/><i/><i/><i/><b/></div></div><span>CREATE<br/><b>WITH PURPOSE</b></span></div>
          <div className="float-card top"><BadgeCheck/><div><b>সার্টিফিকেট</b><small>কোর্স শেষে</small></div></div>
          <div className="float-card bottom"><Users/><div><b>আজীবন সাপোর্ট</b><small>সবসময় আপনার পাশে</small></div></div>
          <div className="thread-line"/>
        </div>
      </div>
      <div className="marquee"><div>FLAT DESIGN <b>✦</b> SEQUIN <b>✦</b> AARI <b>✦</b> CORDING <b>✦</b> CHENILLE <b>✦</b> LASER CUTTING <b>✦</b> BEADS DESIGN</div></div>
    </section>

    <section className="section courses" id="courses">
      <div className="container">
        <div className="section-head"><div><span className="kicker">আমাদের পাঠ্যক্রম</span><h2>যা যা শেখানো হয়</h2></div><p>ইন্ডাস্ট্রির চাহিদা অনুযায়ী আধুনিক ও প্রফেশনাল এমব্রয়ডারি ডিজাইন তৈরির পূর্ণাঙ্গ প্রশিক্ষণ।</p></div>
        <div className="course-grid">{courses.map(([no, title, en]) => <article className="course-card" key={no}><span>{no}</span><div className="course-icon">✦</div><h3>{title}</h3><p>{en}</p><ArrowUpRight className="corner"/></article>)}</div>
      </div>
    </section>

    <section className="section benefits" id="benefits">
      <div className="container benefit-grid">
        <div className="benefit-intro"><span className="kicker light">কেন আমাদের সাথে শিখবেন</span><h2>শুধু কোর্স নয়,<br/>ক্যারিয়ারের প্রস্তুতি</h2><p>শেখার প্রতিটি ধাপে প্রয়োজনীয় দিকনির্দেশনা—যাতে আপনি আত্মবিশ্বাসের সাথে নিজের কাজ শুরু করতে পারেন।</p><a href="#admission">ভর্তির নিয়ম দেখুন <ArrowUpRight size={18}/></a></div>
        <div className="benefit-list">
          {[[Clock3,'৩০ দিনের কোর্স','Basic থেকে Advance পর্যন্ত সাজানো পাঠক্রম'],[MonitorPlay,'অনলাইন ক্লাস','ঘরে বসে নিয়মিত শেখার সুবিধা'],[Users,'আজীবন সাপোর্ট','কোর্স শেষেও প্রয়োজনীয় আপডেট ও সহায়তা'],[BadgeCheck,'সার্টিফিকেট','সফলভাবে কোর্স শেষে স্বীকৃতির সনদ'],[BookOpen,'কাজের সুযোগ','শেখার পাশাপাশি কাজের প্রস্তুতি ও সুযোগ']].map(([Icon,t,d],i)=><article key={t}><span><Icon/></span><div><small>০{i+1}</small><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="section admission" id="admission">
      <div className="container">
        <div className="section-head center"><div><span className="kicker">ভর্তি প্রক্রিয়া</span><h2>শেখার যাত্রা শুরু করুন</h2></div><p>আপনার সুবিধামতো অনলাইন অথবা অফলাইন পদ্ধতি বেছে নিন।</p></div>
        <div className="tabs" role="tablist"><button className={mode === 'online' ? 'active' : ''} onClick={() => setMode('online')}>অনলাইনে ভর্তি</button><button className={mode === 'offline' ? 'active' : ''} onClick={() => setMode('offline')}>অফলাইনে ভর্তি</button></div>
        <div className="admission-panel">
          <div className="admission-title"><span>{mode === 'online' ? 'ONLINE' : 'OFFLINE'}</span><h3>{mode === 'online' ? 'অনলাইনে ভর্তি হওয়ার নিয়মাবলি' : 'অফলাইনে ভর্তি হওয়ার নিয়মাবলি'}</h3><p>আসসালামু আলাইকুম। আমাদের {mode === 'online' ? 'অনলাইন' : 'অফলাইন'} কোর্সে ভর্তি হতে নিচের নিয়মগুলো অনুসরণ করুন।</p></div>
          <Steps items={mode === 'online' ? onlineSteps : offlineSteps}/>
        </div>
        {mode === 'offline' && <div className="bring"><b>ভর্তির সময় সঙ্গে আনুন</b><span>জাতীয় পরিচয়পত্র/জন্মনিবন্ধনের কপি</span><span>১ কপি পাসপোর্ট সাইজ ছবি</span><span>সচল মোবাইল নম্বর</span><span>নির্ধারিত ভর্তি ফি</span></div>}
      </div>
    </section>

    <section className="social-section" id="contact">
      <div className="container social-card">
        <div><span className="kicker light">এখনই যোগাযোগ করুন</span><h2>আপনার দক্ষতা,<br/><em>আপনার ভবিষ্যৎ।</em></h2><p>কোর্স, ক্লাসের সময় ও ভর্তি সম্পর্কে বিস্তারিত জানতে আমাদের অফিসিয়াল চ্যানেলে যোগাযোগ করুন।</p></div>
        <div className="social-actions"><a href="https://www.facebook.com/share/1DFPZpsJ8m/" target="_blank" rel="noreferrer"><Facebook/><span><small>মেসেজ করুন</small>Facebook</span><ArrowUpRight/></a><a href="https://youtube.com/@richdesignclub-pt3iw?si=p3n-fXHCJ1hGwf5z" target="_blank" rel="noreferrer"><Youtube/><span><small>ভিডিও দেখুন</small>YouTube</span><ArrowUpRight/></a></div>
      </div>
    </section>

    <footer><div className="container footer-grid"><Logo/><p>Learn <b>•</b> Design <b>•</b> Earn</p><div><a href="https://www.facebook.com/share/1DFPZpsJ8m/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a><a href="https://youtube.com/@richdesignclub-pt3iw?si=p3n-fXHCJ1hGwf5z" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube/></a></div></div><div className="container copyright">© ২০২৬ RICH DESIGN CLUB™ — সর্বস্বত্ব সংরক্ষিত।</div></footer>
  </main>;
}
