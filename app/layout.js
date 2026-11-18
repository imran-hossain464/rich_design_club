import { Hind_Siliguri, Manrope } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
const bn = localFont({ src:'./fonts/Bornomala.woff2', variable:'--font-bn', display:'swap' });
const display = Manrope({ subsets:['latin'], variable:'--font-display', weight:['700','800'] });
export const metadata={
  title:'রিচ ডিজাইন ক্লাব | এমব্রয়ডারি ডিজাইন প্রশিক্ষণ',
  description:'বাংলাদেশে বেসিক থেকে অ্যাডভান্স কম্পিউটার ও মেশিন এমব্রয়ডারি ডিজাইন শিখুন। অনলাইন ও অফলাইন কোর্স, সার্টিফিকেট এবং প্রফেশনাল প্রশিক্ষণ।',
  keywords:[
    'Embroidery Course in Bangladesh','Online Embroidery Course BD','Embroidery Training in Bangladesh','Machine Embroidery Course BD','Digital Embroidery Course','Computerised Embroidery Course','Embroidery Design Course','Embroidery Designing Course BD','Professional Embroidery Training','Embroidery Course Online','Embroidery Learning in Bangladesh','Best Embroidery Course in Bangladesh','Online Embroidery Training BD','Embroidery Course with Certificate',
    'এমব্রয়ডারি কোর্স','এমব্রয়ডারি ডিজাইন কোর্স','অনলাইন এমব্রয়ডারি কোর্স','বাংলাদেশে এমব্রয়ডারি প্রশিক্ষণ','কম্পিউটার এমব্রয়ডারি কোর্স','মেশিন এমব্রয়ডারি প্রশিক্ষণ','ডিজিটাল এমব্রয়ডারি ডিজাইন','এমব্রয়ডারি ডিজাইন শেখার উপায়','ঘরে বসে এমব্রয়ডারি শিখুন','অনলাইনে এমব্রয়ডারি শিখুন','প্রফেশনাল এমব্রয়ডারি ট্রেনিং','এমব্রয়ডারি ডিজাইন তৈরি','গার্মেন্টস এমব্রয়ডারি ডিজাইন','ফ্রিল্যান্সিং এমব্রয়ডারি ডিজাইন',
    'Wilcom Embroidery Studio Course','Wilcom E4 Training','Wilcom Embroidery Software Training','Embroidery Digitizing Course','Embroidery Digitizing Training','Embroidery Digitizing for Beginners','Computerized Embroidery Design','Embroidery Punching Course','Embroidery Design Software','Digital Embroidery Digitizing','Professional Embroidery Digitizing',
    'Embroidery Design Freelancing','Embroidery Digitizing Freelancing','Embroidery Designer Training','Embroidery Business in Bangladesh','Learn Embroidery for Beginners','Online Earning Through Embroidery Design','Embroidery Designer Career','Garments Embroidery Training','Embroidery Job Training BD','Professional Embroidery Designer','Work from Home Embroidery Design'
  ],
  robots:{index:true,follow:true}
};
export default function RootLayout({children}){return <html lang="bn" className="scroll-smooth"><body className={`${bn.variable} ${display.variable}`}>{children}</body></html>}

