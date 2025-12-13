import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
    { value: '۸+', label: 'سال تجربه برنامه‌نویسی' },
    { value: '۱۰۰۰+', label: 'دانشجوی آموزش دیده' },
    { value: '۳۰+', label: 'پروژه موفق' },
    { value: '۱۰+', label: 'دوره تخصصی' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-earth-dark text-earth-cream relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">
                    درباره <span className="text-earth-sand">من</span>
                </h2>
                <div className="h-1 w-20 bg-earth-sand"></div>
                <p className="text-lg text-earth-cream/80 leading-loose text-justify">
                    من مهران مصباح‌زاده هستم، یک برنامه‌نویس پرشور و مدرس با تمرکز ویژه بر هوش مصنوعی، یادگیری ماشین و علم داده.
                    با سال‌ها تجربه در توسعه نرم‌افزار و تدریس، هدف من ساده‌سازی مفاهیم پیچیده و توانمندسازی نسل بعدی توسعه‌دهندگان است.
                    آموزشگاه آنلاین من بستری برای یادگیری عمیق و پروژه‌محور است.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-6 bg-earth-cream/5 rounded-2xl border border-earth-cream/10 hover:bg-earth-cream/10 transition-colors">
                            <div className="text-4xl font-bold text-earth-sand mb-2">{stat.value}</div>
                            <div className="text-sm text-earth-cream/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative hidden lg:block">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 translate-y-12">
                        <div className="h-64 bg-earth-primary/20 rounded-2xl w-full"></div>
                        <div className="h-40 bg-earth-rust/20 rounded-2xl w-full"></div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-40 bg-earth-sand/20 rounded-2xl w-full"></div>
                        <div className="h-64 bg-earth-cream/10 rounded-2xl w-full"></div>
                    </div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-earth-dark border border-earth-cream/20 p-8 rounded-full">
                        <span className="text-6xl">🎓</span>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;