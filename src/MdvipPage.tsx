import React from 'react';

import { ViewType } from './App';

interface MdvipPageProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

const MdvipPage: React.FC<MdvipPageProps> = ({ onNavigate }) => {
    const LOGO_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026.jpg";
    const CARD2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Card_2.jpg";
    const MDVIP1_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_21.jpg";
    const MDVIP2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/DPC_2.jpg";
    const TOYS1_URL = "https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_1.jpg";
    const ADD1_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Additional_1.jpeg";

    return (
        <div className="animate-fade-in relative min-h-screen bg-white">
            <div className="relative z-10">
                <section className="pt-80 pb-16 bg-sage-light relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 pointer-events-none">
                        <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">A better approach to healthcare</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">MDVIP</h1>
                    </div>
                </section>

                <section className="py-24 bg-white relative">
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="space-y-32">
                            
                            {/* Care that puts you first */}
                            <div className="bg-slate-50/95 p-16 rounded-lg border border-slate-100 backdrop-blur-md shadow-sm text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                                    <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#5b6d64] serif mb-8">Care that puts you first</h2>
                                <div className="space-y-6 max-w-3xl mx-auto">
                                    <p className="text-xl font-medium text-[#8da399]">Whether you’re focused on maximizing your healthspan or managing a chronic condition, an MDVIP-affiliated doctor can deliver care aligned with your personal health goals.</p>
                                    <p className="text-slate-600 text-lg">MDVIP makes wellness and prevention easier by innovative tools and technology. MDVIP supports my practice and seeks to eliminate barriers to a positive healthcare experience. This means deeper doctor-patient relationships, proactive prevention, and care that goes above and beyond.</p>                                </div>
                            </div>

                            {/* Annual exams */}
                            <div className="grid lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-7 space-y-8">
                                    <h2 className="text-3xl font-bold text-[#5b6d64] serif">Annual exams that go beyond the basics</h2>
                                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                                        <p className="text-slate-600">
                                            The MDVIP Annual Wellness Program includes an advanced exam each year, featuring comprehensive screenings and diagnostics that go beyond what's usually covered by insurance. For members who want to go further in identifying potential health risks early, we offer the option to add advanced screenings through partners like Grail and Prenuvo.
                                        </p>
                                        <p className="text-slate-600">
                                            Doctors who operate in the MDVIP models typically see far fewer patients than traditional primary care doctors. That gives them more time to develop deeper doctor-patient relationships that can lead to better outcomes. They can also offer conveniences that most primary care doctors can’t, including same- and next-day appointments. They’re available after hours for urgent matters. And they have time to focus on prevention. That focus begins with the MDVIP Wellness Program, which patients pay for with their annual membership fee.
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                                    <div className="relative group max-w-[400px]">
                                        <div className="absolute -inset-3 bg-sage-light rounded-lg rotate-3 group-hover:rotate-0 transition-transform blur-lg opacity-40"></div>
                                        <img src={MDVIP1_URL} className="relative z-10 w-full h-auto object-cover rounded shadow-xl border-4 border-white" alt="Clinic Consultation Room" />
                                    </div>
                                </div>
                            </div>

                            {/* Deep doctor-patient relationship */}
                            <div className="space-y-12">
                                <div className="text-center max-w-3xl mx-auto">
                                    <h2 className="text-3xl font-bold text-[#5b6d64] serif mb-6">A true partnership in care</h2>
                                    <p className="text-slate-600 text-lg">MDVIP-affiliated physicians have smaller patient panels relative to traditional practices, enabling unhurried and more personalized care. This model supports:</p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                        { title: 'Deeper Understanding', text: "A deeper understanding of your health, lifestyle, and goals by moving beyond symptom checklists to undercover the context behind your concerns, revealing patterns that are often missed in brief encounters, and fostering a richer, more empathetic grasp of each patient's unique story." },
                                        { 
                                            title: 'Comprehensive Consultations', 
                                            text: 'More in-depth and comprehensive consultations. Tailored to your age, history, and goals, these annual tests are designed to help detect subtle health changes before they become bigger issues. These tests may cover: Heart Health, Diabetes, Brain Health, Respiratory Health, Bone Health, Sleep Quality, Vision and Hearing, Nutrition and Fitness, Weight Management, Emotional Well-being, Sexual Health, Medication Management' 
                                        },
                                        { 
                                            title: 'Personalized Planning', 
                                            text: 'Wellness planning personalized to your needs—your plan includes nutrition and meal strategies, fitness recommendations, sleep and stress management tools, and other prevention strategies customized to you.' 
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="border-l-2 border-[#c5a059] pl-6 py-6 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-lg font-bold text-[#5b6d64] serif mb-3">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Care that doesn’t keep you waiting */}
                            <div className="grid lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1">
                                    <div className="relative group max-w-[400px]">
                                        <div className="absolute -inset-2 bg-[#8da399]/10 rounded rotate-[-4deg] group-hover:rotate-0 transition-transform blur-lg opacity-40"></div>
                                        <img src={TOYS1_URL} className="relative z-10 w-full rounded shadow-lg border-2 border-white" alt="Family Friendly Atmosphere" />
                                    </div>
                                </div>
                                <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">Care that doesn’t keep you waiting</h2>
                                    <p className="text-slate-600 text-lg">Your health needs don’t always follow office hours. That’s why MDVIP-affiliated physicians offer after-hours availability and more flexible scheduling when needed, which means:</p>
                                    <ul className="space-y-6">
                                        {[
                                            'Same-day or next-day appointments with your doctor, not just whichever provider happens to be available',
                                            'Minimal wait times when you arrive for your appointment',
                                            'Direct after-hours communication with your doctor for urgent concerns',
                                            'Continuous healthcare support from your doctor, even while out of town'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start space-x-4 text-slate-700">
                                                <span className="w-2 h-2 rounded-full bg-[#c5a059] mt-2.5 shrink-0"></span>
                                                <span className="text-lg font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Support for advanced or specialized care */}
                            <div className="space-y-16 py-16 border-t border-slate-100">
                                <div className="text-center max-w-3xl mx-auto space-y-6">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">Support for specialized care</h2>
                                    <p className="text-slate-600 text-lg">MDVIP’s Medical Centers of Excellence program exists to help MDVIP-affiliated physicians connect patients with nationally recognized institutions for complex health concerns, specialized treatments, or advanced care.</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Referrals & Appointments</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Assisting with referrals and appointment requests at nationally recognized medical institutions.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Record Sharing</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Helping you share medical records and test results with specialists at partner medical centers.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Logistics Support</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Providing resources for travel planning, accommodations, and logistics as needed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="py-12 flex justify-center">
                                <div className="relative group max-w-4xl w-full">
                                    <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-1 blur-lg"></div>
                                    <img 
                                        src={ADD1_URL} 
                                        alt="Clinic Environment" 
                                        className="relative z-10 w-full rounded-lg shadow-2xl border-8 border-white object-cover aspect-[21/9]" 
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>

                            <div className="space-y-12 pt-16 border-t border-slate-100">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Do I still need insurance?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            MDVIP is not insurance, but it works well alongside it. I encourage patients to have health insurance, such as a PPO, high-deductible health plan, or catastrophic insurance plan for added peace of mind in the event of emergencies, hospitalizations, or specialty care. This approach allows you to enjoy the benefits of direct, relationship-based primary care while still having insurance coverage for life’s unexpected events.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">How is the fee structure set?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            There is a simple annual billing structure after the additional enrollment fee to start being seen. You can cancel at any time with advance notice. You can also pay quarterly if this is preferred.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">How do labs, referrals, and imaging work?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Referrals, labs, and imaging orders can be placed by me that can then be billed through your insurance.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Do you take Flexible Spending Account (FSA)/Health Savings Account (HSA) cards?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Yes. You can use your HSA or FSA card for your membership and visit fees. We can then provide receipts if your plan requires any documentation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12 pt-16 border-t border-slate-100">
                                <div className="text-center max-w-3xl mx-auto space-y-6">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">Annual Membership Fee</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        MDVIP’s annual fee covers the Wellness Program and generally can be made in quarterly, semi-annual and annual payments.
                                    </p>
                                    <div className="bg-slate-50 p-8 rounded-lg">
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div className="space-y-2">
                                                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Quarterly</p>
                                                <p className="text-2xl font-bold text-[#5b6d64] serif">$862.50</p>
                                            </div>
                                            <div className="space-y-2 border-x border-slate-200">
                                                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Semi-Annual</p>
                                                <p className="text-2xl font-bold text-[#5b6d64] serif">$1,725.00</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Annual</p>
                                                <p className="text-2xl font-bold text-[#5b6d64] serif">$3,450.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 font-medium">
                                        To learn more about the Membership or the Annual Wellness program, call <a href="tel:650-643-3702" className="text-[#c5a059] hover:underline">650-643-3702</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <section className="py-24 bg-[#5b6d64] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <img src="https://raw.githubusercontent.com/denisekan/website-assets/main/Kan2026_40.jpg" className="w-24 h-24 rounded shadow-lg border-2 border-white/20 object-cover" alt="Denise Kan, MD Logo" />
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

export default MdvipPage;
