import React from 'react';
import { ViewType } from './App';

interface AboutPageProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    const LOGO_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026.jpg";
    const LOGO_3_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_40.jpg";
    const NINA_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_6.jpg";
    const BIO_IMG_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/SMP03232.jpg";
    const ADD4_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Additional_4.jpg";
    const ADD5_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Additional_5.jpg";
    const ADD6_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Additional_6.jpg";
    const ADD7_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Additional_7.jpg";

    return (
        <div className="animate-fade-in">
            <section className="pt-80 pb-20 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="mb-12 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg blur-lg"></div>
                            <img 
                                src={NINA_URL} 
                                alt="Dr. Denise Kan" 
                                className="relative z-10 w-64 h-80 md:w-96 md:h-[500px] rounded-lg shadow-2xl border-8 border-white object-cover object-center" 
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-[#5b6d64] serif mb-8">Dr. Denise Kan, MD</h1>
                    <p className="text-xl text-slate-600 serif italic leading-relaxed max-w-2xl mx-auto">
                        A patient-centered healthcare experience
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-px bg-[#c5a059]"></div>
                            <h2 className="text-3xl font-bold text-[#5b6d64] serif">About my practice</h2>
                        </div>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                As a primary care physician, my passions are prevention and earlier detection, and being an Internal Medicine doctor gives me the tools to better help you manage any chronic and complex conditions. My medical interests include cardiovascular health, nutrition, and integrative health. I also have a particular interest in women’s health, including perimenopause and menopause care. My partnership with MDVIP means that I stay up to date on the latest advances in preventative medicine.
                            </p>
                            <p>
                                My goal is to provide personalized care in a warm and welcoming atmosphere. As a physician in private practice, I have more time to delve deeply in discussions with you about your personal health history, and we can partner to tailor action plans according to your individual needs and goals.
                            </p>
                            <p>
                                We offer conveniences, like same- or next-day appointments with minimal waiting. Thanks to my affiliation with MDVIP, I offer services, including comprehensive, advanced health screenings and diagnostic tests, that go far beyond those found in concierge medicine practices.
                            </p>
                            <p>
                                My practice serves patients across the Peninsula of the San Francisco Bay Area, including Hillsborough, Foster City, San Mateo, Half Moon Bay, Belmont, San Carlos, Redwood City, Woodside, Atherton, Menlo Park, Palo Alto, and Portola Valley.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs block mb-4">What I Stand For</span>
                        <h2 className="text-4xl font-bold text-[#5b6d64] serif">Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Time & Access', text: "I value spending time with my patients and making sure they have direct access to me. No phone trees- a person will always answer your call. And same or next-day appointments are available when you're sick." },
                            { title: 'Seeing the Whole Person', text: "Everything from your history, family background, and lifestyle plays a role in how we approach your health and wellness. I take every aspect into account and understand how to treat you as an individual, not just a set of numbers." },
                            { title: 'High Quality Expertise', text: "I can connect you with the best specialists in our area, knowing who will be a good fit for you. The MDVIP Medical Centers of Excellence Program helps me connect you with the premier academic and research hospitals across the country and make sure the process goes smoothly." },
                            { title: 'Value & Transparent Pricing', text: "One predictable fee covers your personalized Annual Wellness Program and preventive services not typically reimbursed by insurance.\n\nYou can continue using your insurance for routine medical care, specialist visits, and hospitalization expenses." }
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-8 rounded border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#8da399] serif mb-4">{v.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-48">
                        <div className="relative group max-w-sm mx-auto lg:mx-0">
                            <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-2 blur-lg"></div>
                            <img 
                                src={BIO_IMG_URL} 
                                alt="Dr. Denise Kan" 
                                className="relative z-10 w-full rounded-lg shadow-2xl border-8 border-white object-cover aspect-[4/5]" 
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-4xl font-bold text-[#5b6d64] serif">Biography</h2>
                        </div>
                        
                        <div className="space-y-6 text-slate-700 leading-relaxed text-lg font-light">
                            <p>
                                I grew up here on the Peninsula where my interest in medicine was sparked by my childhood love of science and discovery and my time as a volunteer at Peninsula Hospital. Naturally, I've dedicated my professional life to expanding my knowledge and applying it to helping people get and stay healthy.
                            </p>
                            <p>
                                I earned my undergraduate degree in Molecular and Cell Biology at the University of California at Berkeley, followed by doing research at UCSF's Cardiovascular Research Institute. I earned my Doctor of Medicine degree from Wayne State University and completed my Internal Medicine Residency in the Mount Carmel Health System. I am board-certified by the American Board of Internal Medicine and a member of the American College of Physicians and the American College of Lifestyle Medicine.
                            </p>
                            <p>
                                Being in private practice allows me to focus on my patients by providing long visits, easy availability, and a warm and welcoming atmosphere. I truly value the meaningful relationships I am able to build with my patients and their families, and am honored to be their partner in health and wellness.
                            </p>
                            <p>
                                Outside of the office, I can be found with my nose in book, connecting with friends over a good meal, and taking my daughter and our dogs on local adventures.
                            </p>
                        </div>

                        <div className="pt-12 space-y-6">
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                                <a 
                                    href="mailto:drkan@denisekanmd.com"
                                    className="bg-[#c5a059] text-white px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5b6d64] transition-all shadow-lg hover:-translate-y-1 text-center"
                                >
                                    Schedule Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 mt-24">
                    <div className="flex flex-wrap md:flex-nowrap overflow-hidden shadow-2xl">
                        {[
                            { url: ADD4_URL, pos: 'center', caption: "Hiking The Narrows in Zion National Park" },
                            { url: ADD6_URL, pos: 'center', caption: "Deer in Nara, Japan" },
                            { 
                                url: ADD7_URL, 
                                pos: 'center 85%', 
                                caption: "Gray whale encounters in Guerrero Negro, Baja California Sur\nExpedition led by @natsoffthegrid\nPhoto credit: @job_olguin" 
                            },
                            { url: ADD5_URL, pos: 'center 15%', caption: "Hiking in Mount Rainier National Park" }
                        ].map((item, i) => (
                            <div key={i} className="relative group aspect-square flex-1 min-w-[50%] md:min-w-0 overflow-hidden border-r border-white/10 last:border-0">
                                <img 
                                    src={item.url} 
                                    alt={`Life outside work ${i + 1}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectPosition: item.pos }}
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                                    <div className="text-center text-white p-6">
                                        <p className="text-sm font-medium serif leading-relaxed whitespace-pre-line">
                                            {item.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#5b6d64] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <img src={LOGO_3_URL} className="w-24 h-24 rounded shadow-lg border-2 border-white/20 object-cover" alt="Denise Kan, MD Logo" />
                                <h3 className="text-xl font-bold serif">Denise Kan, MD</h3>
                            </div>
                        </div>
                        <a href="mailto:drkan@denisekanmd.com" className="space-y-2 hover:opacity-80 transition-opacity block">
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
                            <a href="mailto:drkan@denisekanmd.com" className="text-lg font-bold block hover:opacity-80 transition-opacity">drkan@denisekanmd.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
