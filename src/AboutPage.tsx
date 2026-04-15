import React from 'react';
import { ViewType } from './App';

interface AboutPageProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    const LOGO_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan_2026.jpg";
    const LOGO_3_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_3.jpg";
    const NINA_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/SMPO03195.jpg";
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
                        "Healthcare is a collaboration—an active process of restoring balance across mind, body, and spirit."
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
                                As a primary care physician, my passions are prevention and earlier detection where possible, and being an internal medicine doctor in the MDVIP model gives me the tools to better help you manage your chronic conditions. My medical interests include cardiovascular health, nutrition and integrative health. As a female physician, I also have a particular interest in women’s health, including perimenopause and menopause care.
                            </p>
                            <p>
                                My goal is to provide personalized care in a warm and welcoming atmosphere. In my MDVIP-affiliated practice, I have more time to delve deeply in discussions with you about your personal health history, and we can partner to tailor action plans according to your individual needs and goals.
                            </p>
                            <p>
                                My practice offers conveniences, like same- or next-day appointments with minimal waiting. My MDVIP-affiliated practice also offers services, including comprehensive, advanced health screenings and diagnostic tests, that go far beyond those found in concierge medicine practices.
                            </p>
                            <p>
                                My practice serves patients across the Peninsula in Northern California, including Hillsborough, Foster City, San Mateo, Half Moon Bay, Belmont, San Carlos, Redwood City, Woodside, Atherton, Menlo Park, Palo Alto, and Portola Valley.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs block mb-4">What We Stand For</span>
                        <h2 className="text-4xl font-bold text-[#5b6d64] serif">Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Relationship-Centered Care', text: 'I believe strong doctor–patient relationships are the foundation of excellent healthcare. I view healthcare as a collaboration.' },
                            { title: 'Whole-Person Medicine', text: 'I treat the body as an interconnected system. Care plans address physical, emotional, and lifestyle factors—not just isolated symptoms.' },
                            { title: 'Time & Access', text: 'I value time, availability, and continuity. Longer visits and direct communication allow for deeper understanding and better outcomes.' },
                            { title: 'Transparency & Integrity', text: 'I believe healthcare should be straightforward and honest. I am committed to clear pricing, ethical practice, and evidence-based care.' },
                            { title: 'Prevention & Sustainability', text: 'I focus on prevention, education, and long-term health—helping patients stay well, not just get well.' }
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
                                I bring an integrative approach to primary care shaped by growing up in California. Being immersed in two cultures from an early age influenced my interest in blending Western medicine with Eastern healing traditions and in caring for patients as whole individuals.
                            </p>
                            <p>
                                I completed my undergraduate education at Brown University in Neuroscience, earned my Doctor of Osteopathic Medicine degree from Marian University College of Osteopathic Medicine, and completed my Family Medicine residency at St. Joseph’s Medical Center in Stockton, CA.
                            </p>
                            <p>
                                I have always been drawn to family medicine because of its emphasis on whole-person care, continuity, and cultural awareness. I believe health is influenced not only by physical symptoms, but also by lifestyle, environment, and personal values. My goal is to offer integrative, patient-centered options for chronic illness and long-term wellness.
                            </p>
                            <p>
                                I chose to practice MDVIP because it allows me to practice medicine in alignment with my values. Over time, I found that the traditional insurance-based model increasingly limited the time I could spend with patients and added administrative burdens that took focus away from meaningful patient care. By removing the constraints of insurance-based care, MDVIP allows for longer visits, improved access, and a stronger patient–physician relationship. This enables me to focus on prevention, education, and individualized care rather than treating symptoms in isolation.
                            </p>
                            <p>
                                My goal is to provide thoughtful, inclusive, and culturally responsive comprehensive primary care that supports patients throughout their healthcare journey.
                            </p>
                            <p>
                                Outside of work, I value opportunities for exploration and connection. I enjoy going on adventures that involve animals, skiing, snorkeling, traveling, and catching live comedy shows.
                            </p>
                        </div>

                        <div className="pt-12 space-y-6">
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                                <a 
                                    href="https://app.elationemr.com/book/palmandneedlemed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#c5a059] text-white px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5b6d64] transition-all shadow-lg hover:-translate-y-1 text-center"
                                >
                                    Schedule Appointment
                                </a>
                                <a 
                                    href="https://calendly.com/nlippey-palmandneedlemed/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-[#5b6d64] text-[#5b6d64] px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#5b6d64] hover:text-white transition-all shadow-lg hover:-translate-y-1 text-center"
                                >
                                    Schedule Meet & Greet
                                </a>
                            </div>
                            <p className="text-xs text-slate-500 max-w-lg leading-relaxed text-center lg:text-left">
                                A Meet and Greet appointment is a 30 minute, no obligation meeting with Dr. Kan to ensure that you understand how the practice works. It's a great place to ask any questions you might have. However, no medical advice will be dispensed during this meeting.
                            </p>
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
                                <img src={LOGO_3_URL} className="w-24 h-24 rounded shadow-lg border-2 border-white/20" alt="Denise Kan MD Logo" />
                                <h3 className="text-xl font-bold serif">Denise Kan MD<br/>Medical Clinic</h3>
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
                                <a href="tel:650-643-3702" className="text-lg font-bold block hover:opacity-80 transition-opacity">650-643-3702 <span className="text-xs font-normal opacity-60">(New Patients)</span></a>
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
