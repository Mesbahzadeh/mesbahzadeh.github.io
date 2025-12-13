import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Youtube, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('پیام شما دریافت شد. ممنون از تماس شما.');
    };

  return (
    <section id="contact" className="py-24 bg-earth-dark text-earth-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl font-bold mb-4">ارتباط با <span className="text-earth-sand">من</span></h2>
                    <p className="text-earth-cream/60 text-lg">
                        برای همکاری در پروژه‌ها، مشاوره یا شرکت در دوره‌های آموزشی، خوشحال می‌شوم با من در تماس باشید.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-earth-cream/5 rounded-2xl border border-earth-cream/10">
                        <div className="bg-earth-primary/20 p-3 rounded-xl text-earth-sand">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">ایمیل</h4>
                            <p className="text-earth-cream/70 font-sans ltr text-left">mehran.mesbahzadeh@yahoo.com</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-earth-cream/5 rounded-2xl border border-earth-cream/10">
                        <div className="bg-earth-primary/20 p-3 rounded-xl text-earth-sand">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">تلفن</h4>
                            <p className="text-earth-cream/70 font-sans">09386750119</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-earth-cream/5 rounded-2xl border border-earth-cream/10">
                        <div className="bg-earth-primary/20 p-3 rounded-xl text-earth-sand">
                            <GlobeIcon />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">وب‌سایت آموزشگاه</h4>
                            <a href="https://mesbahzadeh.pythonanywhere.com" target="_blank" rel="noreferrer" className="text-earth-cream/70 hover:text-earth-sand transition-colors font-sans ltr text-left">
                                mesbahzadeh.pythonanywhere.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h5 className="font-bold mb-4 text-earth-cream">شبکه‌های اجتماعی</h5>
                    <div className="flex flex-wrap gap-3">
                         <SocialBtn icon={Linkedin} href="https://linkedin.com/in/mehran-mesbahzadeh" />
                         <SocialBtn icon={Github} href="https://github.com/mesbahzadeh" />
                         <SocialBtn icon={Youtube} href="https://youtube.com/@mehran-mesbahzadeh" />
                         <SocialBtn icon={Instagram} href="https://instagram.com/mehran.mesbahzadeh" />
                         <SocialBtn icon={Twitter} href="https://twitter.com/mehran_mesbah" />
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-earth-cream text-earth-dark p-8 md:p-10 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">ارسال پیام</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-earth-dark/70">نام شما</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-earth-primary/20 focus:border-earth-primary focus:ring-2 focus:ring-earth-primary/20 outline-none transition-all" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-earth-dark/70">ایمیل</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-earth-primary/20 focus:border-earth-primary focus:ring-2 focus:ring-earth-primary/20 outline-none transition-all text-left dir-ltr" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-earth-dark/70">موضوع</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-earth-primary/20 focus:border-earth-primary focus:ring-2 focus:ring-earth-primary/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-earth-dark/70">پیام</label>
                        <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-white border border-earth-primary/20 focus:border-earth-primary focus:ring-2 focus:ring-earth-primary/20 outline-none transition-all resize-none" required></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-earth-rust text-white font-bold rounded-xl hover:bg-earth-primary transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        ارسال پیام <Send size={18} />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

// Helper components
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

const SocialBtn: React.FC<{icon: any, href: string}> = ({ icon: Icon, href }) => (
    <a href={href} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-earth-cream/10 border border-earth-cream/20 text-earth-cream hover:bg-earth-sand hover:text-earth-dark transition-all duration-300">
        <Icon size={20} />
    </a>
);

export default Contact;