import SocialLinks from './SocialLinks';

export default function SiteFooter(){return <footer className="border-t border-[#d6a936]/40 px-5 py-9"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"><p className="text-center text-sm text-white/40 sm:text-left">© ২০২৬ রিচ ডিজাইন ক্লাব। সর্বস্বত্ব সংরক্ষিত।</p><div className="flex flex-col items-center gap-3 sm:items-end"><span className="text-xs font-bold tracking-[.15em] text-[#f6c542]">আমাদের অনুসরণ করুন</span><SocialLinks showLabels/></div></div></footer>}
