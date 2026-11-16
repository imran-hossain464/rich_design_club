import { Hind_Siliguri, Manrope } from 'next/font/google';
import './globals.css';
const bn = Hind_Siliguri({ subsets:['bengali','latin'], variable:'--font-bn', weight:['400','500','600','700'] });
const display = Manrope({ subsets:['latin'], variable:'--font-display', weight:['700','800'] });
export const metadata={title:'রিচ ডিজাইন ক্লাব | এমব্রয়ডারি ডিজাইন প্রশিক্ষণ',description:'বেসিক থেকে অ্যাডভান্স এমব্রয়ডারি ডিজাইন শিখুন। অনলাইন ও অফলাইন ভর্তি চলছে।'};
export default function RootLayout({children}){return <html lang="bn" className="scroll-smooth"><body className={`${bn.variable} ${display.variable}`}>{children}</body></html>}

