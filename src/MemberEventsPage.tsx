import React from 'react';
import { ViewType } from './App';

interface MemberEventsPageProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

const MemberEventsPage: React.FC<MemberEventsPageProps> = ({ onNavigate }) => {
    const LOGO_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026.jpg";
    const LOGO_3_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_40.jpg";

    return (
        <div className="animate-fade-in relative min-h-screen bg-white">
            <div className="relative z-10">
                {/* Hero Header */}
                <section className="pt-80 pb-16 bg-sage-light relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 pointer-events-none">
                        <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <span className="text-white/80 uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Exclusive Practice Gatherings</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white serif mb-8">Member Events</h1>
                    </div>
                </section>

                {/* Event Details Section */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        
                        {/* Event Card */}
                        <div className="bg-slate-50/90 p-8 md:p-16 rounded-lg border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                                <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
                            </div>

                            {/* Section: Main Header */}
                            <div className="text-center md:text-left border-b border-slate-200/60 pb-8 mb-10">
                                <span className="text-[#d18dbd] uppercase tracking-[0.3em] font-bold text-xs block mb-3">Group Wellness Session</span>
                                <h2 className="text-4xl font-bold text-[#9ba37a] serif mb-4">Pilates at Seaport Health</h2>
                                <p className="text-slate-500 italic text-lg leading-relaxed">No experience necessary. All fitness and experience levels are warmly welcome.</p>
                            </div>

                            {/* Detail Blocks Grid */}
                            <div className="grid sm:grid-cols-3 gap-6 mb-12">
                                <div className="bg-white p-6 rounded-lg border border-slate-100 text-center sm:text-left">
                                    <div className="text-3xl mb-3">📅</div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Date</h4>
                                    <p className="text-[#8db56d] font-bold serif text-lg">Monday, June 1st</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-slate-100 text-center sm:text-left">
                                    <div className="text-3xl mb-3">🕒</div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Time</h4>
                                    <p className="text-[#8db56d] font-bold serif text-lg font-mono">3:00 PM</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-slate-100 text-center sm:text-left">
                                    <div className="text-3xl mb-3">📍</div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-[#8db56d] font-bold serif text-sm leading-snug">
                                        400 Seaport Court<br />
                                        Suite 203, Redwood City
                                    </p>
                                </div>
                            </div>

                            {/* About the Instructor */}
                            <div className="bg-white p-8 rounded-lg border border-slate-100 mb-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-1.5 h-12 bg-[#d18dbd] rounded-full"></div>
                                    <div>
                                        <h3 className="font-bold text-xl text-[#9ba37a] serif">Meet Your Instructor: Stella Lorvan</h3>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Certified Pilates Practitioner</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-md mb-4 font-light">
                                    We're thrilled to welcome Stella Lorvan as our instructor. Stella has been studying and teaching pilates since 1989, is certified through St. Francis Hospital's Center for Dance Medicine, and has worked with everyone from Olympic-level athletes to stroke survivors.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-md font-light">
                                    She opened her own studios, taught the first mat class in a gym in San Francisco, and has extensive experience in chiropractic and physical therapy settings — so she truly understands how the body moves and heals.
                                </p>
                            </div>

                            {/* RSVP Block (Accent colored) */}
                            <div className="bg-[#9ba37a]/10 border border-[#9ba37a]/20 p-8 rounded-lg mb-10 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg text-[#9ba37a] serif">Reserve Your Spot</h3>
                                        <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
                                            Spots are limited to **14 participants** to ensure personalized, attentive instruction. Reserve your spot today.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <a href="mailto:care@denisekanmd.com?subject=RSVP for Pilates at Seaport Health" className="bg-[#d18dbd] hover:bg-[#d18dbd]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-sm shadow-md hover:-translate-y-0.5 transition-all text-center">
                                            RSVP via Email
                                        </a>
                                        <a href="tel:650-267-2098" className="bg-white hover:bg-slate-50 text-[#9ba37a] border border-[#9ba37a]/30 font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-sm shadow-sm hover:-translate-y-0.5 transition-all text-center">
                                            Call 650-267-2098
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* What to bring & Waiver columns */}
                            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-200/50">
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4 text-[#d18dbd]">What to bring:</h4>
                                    <ul className="space-y-3 text-slate-600 text-sm">
                                        <li className="flex items-center space-x-3">
                                            <span className="text-[#8db56d]">✓</span>
                                            <span>A thick yoga mat</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <span className="text-[#8db56d]">✓</span>
                                            <span>Water bottle</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <span className="text-[#8db56d]">✓</span>
                                            <span>Comfortable, form-fitting clothing</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1 text-[#d18dbd]">Arrival Details:</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                                            We'll have a waiver for you to sign when you arrive in Suite 203. Please try to arrive 5–10 minutes early so we can get settled and start on time!
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Past Events Section */}
                        <div className="mt-12 bg-slate-50/90 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm relative overflow-hidden animate-fade-in-up">
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                                <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
                            </div>
                            <span className="text-[#9ba37a] uppercase tracking-[0.3em] font-bold text-xs block mb-6">Previous Gatherings</span>
                            <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100">
                                <h3 className="font-bold text-xl text-[#d18dbd] serif mb-3">Patient Appreciation Open House</h3>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Thank you for attending our Patient Appreciation Open House! We enjoyed meeting your friends and family, and are deeply grateful for your support.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Shared Footer Section */}
                <section className="py-24 bg-[#9ba37a] text-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
                            <div className="space-y-4">
                                <div className="flex items-center justify-center md:justify-start space-x-4">
                                    <img src={LOGO_3_URL} className="w-24 h-24 rounded shadow-lg border-2 border-white/20 object-cover" alt="Denise Kan, MD Logo" />
                                    <h3 className="text-xl font-bold serif">Denise Kan, MD</h3>
                                </div>
                            </div>
                            <a href="mailto:care@denisekanmd.com" className="space-y-2 hover:opacity-80 transition-opacity block">
                                <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Location</p>
                                <p className="text-lg">400 Seaport Court, Suite 203</p>
                                <p className="text-sm opacity-80">Redwood City, CA 94063</p>
                            </a>
                            <div className="space-y-2">
                                <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Contact</p>
                                <div className="space-y-1">
                                    <a href="tel:650-643-3702" className="text-lg font-bold block hover:opacity-80 transition-opacity">650-643-3702 <span className="text-xs font-normal opacity-60">(New Patients & Inquiries)</span></a>
                                    <a href="tel:650-727-1940" className="text-lg font-bold block hover:opacity-80 transition-opacity">650-727-1940 <span className="text-xs font-normal opacity-60">(Current Patients)</span></a>
                                </div>
                                <a href="mailto:care@denisekanmd.com" className="text-lg font-bold block hover:opacity-80 transition-opacity">care@denisekanmd.com</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MemberEventsPage;
