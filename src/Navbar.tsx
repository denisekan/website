import React, { useState } from 'react';
import { ViewType } from './App';

interface NavbarProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleLinkClick = (e: React.MouseEvent, view: ViewType, hash?: string) => {
        e.preventDefault();
        onNavigate(view, hash);
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-32 items-center justify-center">
                    <div className="hidden md:flex space-x-12 lg:space-x-16 items-center">
                        <a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="text-slate-600 hover:text-[#d18dbd] nav-link whitespace-nowrap">Home</a>
                        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-slate-600 hover:text-[#d18dbd] nav-link whitespace-nowrap">Meet Dr. Kan</a>
                        <a href="#mdvip" onClick={(e) => handleLinkClick(e, 'mdvip')} className="text-slate-600 hover:text-[#d18dbd] nav-link whitespace-nowrap">MDVIP</a>
                        <a href="#referrals" onClick={(e) => handleLinkClick(e, 'referrals')} className="text-slate-600 hover:text-[#d18dbd] nav-link whitespace-nowrap">Referrals</a>
                        <div className="flex space-x-2">
                            <a href="mailto:care@denisekanmd.com" className="bg-[#d18dbd] text-white px-6 py-3.5 rounded-sm nav-link hover:bg-white hover:text-[#9ba37a] whitespace-nowrap">Schedule Appointment</a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center absolute left-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[#9ba37a] p-2">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 py-6 px-4 space-y-4 animate-fade-in shadow-2xl overflow-y-auto max-h-[calc(100vh-96px)]">
                    <a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="block text-slate-600 nav-link">Home</a>
                    <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="block text-slate-600 nav-link">Meet Dr. Kan</a>
                    <a href="#mdvip" onClick={(e) => handleLinkClick(e, 'mdvip')} className="block text-slate-600 nav-link">MDVIP</a>
                    <a href="#referrals" onClick={(e) => handleLinkClick(e, 'referrals')} className="block text-slate-600 nav-link">Referrals</a>
                    <a href="mailto:care@denisekanmd.com" className="block bg-[#d18dbd] text-white text-center py-4 rounded-sm nav-link">Schedule Appointment</a>
                </div>
            )}
        </nav>
    );
};
