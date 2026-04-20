import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { SERVICES } from './constants';
import AboutPage from './AboutPage';
import MdvipPage from './MdvipPage';
import ReferralsPage from './ReferralsPage';

export type ViewType = 'home' | 'about' | 'mdvip' | 'referrals';

const App = () => {
    const [view, setView] = useState<ViewType>('home');

    // Handle initial load and browser back/forward buttons
    useEffect(() => {
        const handleNavigation = () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            // Map common variants if needed, or stick to ViewType
            if (['home', 'about', 'mdvip', 'referrals'].includes(hash)) {
                setView(hash as ViewType);
            }
        };

        // Initial check
        handleNavigation();

        window.addEventListener('popstate', handleNavigation);
        window.addEventListener('hashchange', handleNavigation);
        return () => {
            window.removeEventListener('popstate', handleNavigation);
            window.removeEventListener('hashchange', handleNavigation);
        };
    }, []);

    const LOGO_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026.jpg";
    const OFFICE33_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/office33.jpg";
    const OFFICE50_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/office50.jpg";
    const KAN2026_11_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_11.jpg";
    const KAN2026_22_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_22.jpg";
    const KAN2026_40_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_40.jpg";
    const NINA_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/SMP03193.jpg";
    const ADD2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Additional_2.jpg";

    const ORCHIDS_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Orchids.jpeg";

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [view]);

    const navigateTo = (newView: ViewType, hash?: string) => {
        const targetHash = hash || `#${newView}`;
        
        if (window.location.hash !== targetHash) {
            window.history.pushState(null, '', targetHash);
            setView(newView);
        } else {
            // If already on the view, just scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash.replace('#', ''));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const LandingPage = () => (
        <>
            <header id="home" className="relative pt-80 pb-24 bg-sage-light overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-5 space-y-8 animate-fade-in relative z-10">
                        <div className="space-y-4">
                            <div className="text-left">
                                <h1 className="text-4xl md:text-6xl font-bold text-[#5b6d64] serif leading-tight whitespace-nowrap">Denise Kan, MD</h1>
                                <p className="text-xl md:text-2xl tracking-[0.4em] uppercase text-[#c5a059] font-bold mt-2">Primary Care Physician</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#5b6d64] serif leading-tight italic">
                                A personalized <br className="hidden md:block" />
                                healthcare experience.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="bg-[#5b6d64] text-white px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#c5a059] transition-all shadow-xl hover:-translate-y-1 text-center">About Dr. Kan</a>
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative animate-fade-in lg:translate-x-12">
                        <div className="absolute -inset-8 bg-[#8da399] opacity-10 -rotate-2 blur-3xl"></div>
                        <img src={KAN2026_40_URL} alt="Clinic Office" className="relative z-10 shadow-2xl object-cover object-[center_35%] aspect-[4/3] w-full" />
                    </div>
                </div>
            </header>

            <section id="about-preview" className="py-32 bg-sage-light/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="max-w-xs w-full relative group">
                            <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-3 group-hover:rotate-0 transition-transform blur-lg"></div>
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                                <img src={NINA_URL} alt="Dr. Denise Kan" className="w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 object-cover object-[70%_center] aspect-[4/5]" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-[#c5a059] text-white px-8 py-5 rounded shadow-2xl z-20 border-2 border-white/10">
                                <p className="font-bold text-lg serif italic leading-none">Dr. Denise Kan, MD</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mt-2">Founder & Physician</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="flex items-center space-x-4">
                            <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs">Meet Your Doctor</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d64] serif leading-tight">A Higher Standard of Healthcare</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>Being in private practice allows me to focus on my patients by providing long visits, easy availability, and a warm and welcoming atmosphere.</p>
                        </div>
                        <div className="pt-6">
                             <button onClick={() => navigateTo('about')} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.2em] hover:text-[#5b6d64] flex items-center group">
                                Read Full Bio <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                             </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 mt-24">
                    <div className="relative group overflow-hidden rounded-lg shadow-2xl border-8 border-white">
                        <img 
                            src={KAN2026_11_URL} 
                            alt="Dr. Kan's Practice" 
                            className="w-full aspect-[21/9] object-cover [object-position:center_75%]" 
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 lg:py-32 bg-[#5b6d64] text-white relative z-10">
                <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none -rotate-12 translate-x-1/4">
                          <img src={LOGO_URL} className="w-[1000px] h-[1000px] object-contain invert scale-[1.5]" alt="" />
                     </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                    <div className="space-y-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold serif leading-tight">Schedule Your Appointment</h2>
                        <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-lg opacity-90">
                            Learn more becoming a member.
                        </p>
                        <div className="space-y-10 pt-10">
                            <a href="mailto:care@denisekanmd.com" className="flex items-center space-x-6 group hover:opacity-80 transition-opacity">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner group-hover:bg-white/20 transition-colors">📍</div>
                                <div>
                                    <p className="font-bold text-lg md:text-xl">400 Seaport Court, Suite 203</p>
                                    <p className="text-sm opacity-60">Redwood City, CA 94063</p>
                                    <p className="text-xs italic opacity-80 mt-2 max-w-[280px]">Turn right upon entering the marina, and look for the sign that says "Seaport Health Collective"</p>
                                </div>
                            </a>
                            <div className="flex items-start space-x-6 group">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner">📞</div>
                                <div className="space-y-4">
                                    <a href="tel:650-643-3702" className="block hover:opacity-80 transition-opacity">
                                        <p className="font-bold text-lg md:text-xl">650-643-3702</p>
                                        <p className="text-sm opacity-60">New Patients & Membership Inquiries</p>
                                    </a>
                                    <a href="tel:650-727-1940" className="block hover:opacity-80 transition-opacity">
                                        <p className="font-bold text-lg md:text-xl">650-727-1940</p>
                                        <p className="text-sm opacity-60">Current Patients</p>
                                    </a>
                                </div>
                            </div>
                            <a href="mailto:care@denisekanmd.com" className="flex items-center space-x-6 group hover:opacity-80 transition-opacity">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner group-hover:bg-white/20 transition-colors">✉️</div>
                                <div><p className="font-bold text-lg md:text-xl">care@denisekanmd.com</p><p className="text-sm opacity-60">Membership Inquiries</p></div>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 md:p-8 lg:p-12 rounded shadow-2xl relative text-slate-800 flex flex-col items-center justify-center min-h-[300px]">
                        <div className="relative lg:absolute lg:-top-44 lg:-left-12 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-white rounded flex items-center justify-center shadow-2xl border-4 border-[#c5a059] transform hover:rotate-12 transition-transform overflow-hidden p-0 z-20 mb-8 lg:mb-0">
                            <img src={KAN2026_22_URL} className="w-full h-full object-cover" alt="Clinic" />
                        </div>
                        <div className="text-center space-y-8 w-full">
                            <p className="text-slate-600 serif italic text-lg">A better healthcare experience starts here.</p>
                            <a 
                                href="mailto:care@denisekanmd.com"
                                className="flex items-center justify-center w-full bg-[#c5a059] text-white py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#5b6d64] transition-all shadow-xl hover:-translate-y-1 text-center pl-[0.4em] md:pl-0 md:block"
                            >
                                Schedule your appointment now
                            </a>
                            <div className="pt-8 flex justify-center">
                                <img src={ORCHIDS_URL} alt="Orchids" className="w-24 h-24 object-cover rounded shadow-md" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

    const renderContent = () => {
        switch (view) {
            case 'about': return <AboutPage onNavigate={navigateTo} />;
            case 'mdvip': return <MdvipPage onNavigate={navigateTo} />;
            case 'referrals': return <ReferralsPage />;
            default: return <LandingPage />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onNavigate={navigateTo} />
            
            {renderContent()}
        </div>
    );
};

export default App;
