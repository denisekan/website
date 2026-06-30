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
                        <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="Dr. Kan's Redwood City concierge practice is conveniently accessible via Highway 101 near Woodside Road." />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <span className="text-white/80 uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Exclusive Practice Gatherings</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white serif mb-8">Member Events</h1>
                    </div>
                </section>

                {/* Event Details Section */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        
                        {/* Upcoming Event Card */}
                        <div className="bg-slate-50/90 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm relative overflow-hidden mb-12 animate-fade-in-up">
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                                <img src={LOGO_URL} className="w-full h-full object-contain" alt="Dr. Kan and Seaport Health invite wellness event attendees to pilates, yoga, sound baths, and health seminars." />
                            </div>
                            <span className="text-[#d18dbd] uppercase tracking-[0.3em] font-bold text-xs block mb-3">Group Wellness Session</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#9ba37a] serif mb-4">Move Better, Feel Better: Stretch & Mobility Class</h2>

                            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8 max-w-3xl">
                                Join us for a guided stretch and mobility class led by <strong className="font-semibold text-slate-800"><a href="https://www.drmichellele.com" target="_blank" rel="noopener noreferrer" className="text-[#d18dbd] hover:underline">Dr. Michelle Le</a></strong>! Whether you're dealing with everyday stiffness, recovering from an injury, or just want to move more freely, this class is designed to help you feel your best. We'll focus on improving flexibility, releasing tension, and building the kind of mobility that makes daily life easier — from bending down to tying your shoes to keeping up with your summer adventures. All levels welcome. Space is limited, so grab your spot early!
                            </p>

                            {/* Detail Grid */}
                            <div className="grid sm:grid-cols-3 gap-6 mb-10">
                                <div className="bg-white p-6 rounded-lg border border-slate-100 text-center sm:text-left">
                                    <div className="text-3xl mb-3">📅</div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Date</h4>
                                    <p className="text-[#8db56d] font-bold serif text-lg">Thursday, July 9th</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-slate-100 text-center sm:text-left">
                                    <div className="text-3xl mb-3">🕒</div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Time</h4>
                                    <p className="text-[#8db56d] font-bold serif text-lg font-mono">8:00 AM</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-slate-100 text-center sm:text-left">
                                    <div className="text-3xl mb-3">📍</div>
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-[#8db56d] font-bold serif text-sm leading-snug">
                                        400 Seaport Court<br />
                                        Suite 203, Redwood City, CA
                                    </p>
                                </div>
                            </div>

                            {/* RSVP Block */}
                            <div className="bg-[#9ba37a]/10 border border-[#9ba37a]/20 p-8 rounded-lg mb-10 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg text-[#9ba37a] serif">Reserve Your Spot</h3>
                                        <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
                                            Please fill out our online RSVP form to register and secure your spot.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScAP5d4tuCXNCP28qn6VPyZM15R9O6U7qeHFSaBtvHWGnL5DQ/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="bg-[#d18dbd] hover:bg-[#d18dbd]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-sm shadow-md hover:-translate-y-0.5 transition-all text-center">
                                            RSVP Online Form
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* What to bring */}
                            <div className="pt-6 border-t border-slate-200/50">
                                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4 text-[#d18dbd]">Required Items:</h4>
                                <ul className="grid sm:grid-cols-3 gap-3 text-slate-600 text-sm">
                                    <li className="flex items-center space-x-3">
                                        <span className="text-[#8db56d] text-lg">✓</span>
                                        <span>Yoga Mat</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Past Events Section */}
                        <div className="mt-12 bg-slate-50/90 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm relative overflow-hidden animate-fade-in-up">
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                                <img src={LOGO_URL} className="w-full h-full object-contain" alt="Dr. Kan and Seaport Health invite wellness event attendees to pilates, yoga, sound baths, and health seminars." />
                            </div>
                            <span className="text-[#9ba37a] uppercase tracking-[0.3em] font-bold text-xs block mb-6">Previous Gatherings</span>
                            <div className="space-y-8">
                                <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100">
                                    <span className="text-[#d18dbd] uppercase tracking-[0.3em] font-bold text-xs block mb-2">June 2026</span>
                                    <h3 className="font-bold text-xl text-[#9ba37a] serif mb-3">Pilates at the Clinic</h3>
                                    <p className="text-slate-600 leading-relaxed font-light mb-4 text-md">
                                        We hosted another successful Pilates class on Monday, June 29th. Certified instructor Stella Lorvan guided our members through a warm, small-group session focused on building core strength, posture, and wellness connections.
                                    </p>
                                </div>
                                <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100">
                                    <span className="text-[#d18dbd] uppercase tracking-[0.3em] font-bold text-xs block mb-2">June 2026</span>
                                    <h3 className="font-bold text-xl text-[#9ba37a] serif mb-3">It's Not Hysteria: Perimenopause and Personalized Women's Care</h3>
                                    <p className="text-slate-600 leading-relaxed font-light mb-4 text-md">
                                        We hosted an informative wellness seminar on Saturday, June 13th at the Sequoia Yacht Club with guest speaker Dr. Mary Pravdin, exploring personalized women's care and navigating perimenopause.
                                    </p>
                                </div>
                                <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100">
                                    <span className="text-[#d18dbd] uppercase tracking-[0.3em] font-bold text-xs block mb-2">June 2026</span>
                                    <h3 className="font-bold text-xl text-[#9ba37a] serif mb-3">Pilates at Seaport Health</h3>
                                    <p className="text-slate-600 leading-relaxed font-light mb-4 text-md">
                                        We hosted a successful group wellness session on Monday, June 1st. Many thanks to certified instructor Stella Lorvan for guiding our members through a restorative Pilates session designed for all movement levels.
                                    </p>
                                </div>
                                <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-100">
                                    <span className="text-[#d18dbd] uppercase tracking-[0.3em] font-bold text-xs block mb-2">April 2026</span>
                                    <h3 className="font-bold text-xl text-[#9ba37a] serif mb-3">Patient Appreciation Open House</h3>
                                    <p className="text-slate-600 leading-relaxed font-light text-md">
                                        Thank you for attending our Patient Appreciation Open House! We enjoyed meeting your friends and family, and are deeply grateful for your support.
                                    </p>
                                </div>
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
                                    <img src={LOGO_3_URL} className="w-24 h-24 rounded shadow-lg border-2 border-white/20 object-cover" alt="Concierge medicine on the Peninsula" />
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
                                    <a href="tel:650-727-1940" className="text-lg font-bold block hover:opacity-80 transition-opacity">650-727-1940</a>
                                    
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
