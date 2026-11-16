import './globals.css';

export const metadata = {
  title: 'RICH DESIGN CLUB™ | এমব্রয়ডারি ডিজাইন প্রশিক্ষণ',
  description: 'বেসিক থেকে অ্যাডভান্স এমব্রয়ডারি ডিজাইন শিখুন। অনলাইন ও অফলাইন ভর্তি চলছে।',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
