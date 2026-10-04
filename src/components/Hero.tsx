import React, { useState } from 'react';
import {
  ArrowLeft,
  MessageCircle,
  BookOpen,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Phone,
  Code2,
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { toPersianDigits } from '../utils/persianNumbers';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenWhatsAppDirect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection, onOpenWhatsAppDirect }) => {
  const [imgSrc, setImgSrc] = useState<string>(PERSONAL_INFO.avatarUrl);

  const handleImageError = () => {
    // Fallback to local copy if external image has any CORS/network glitch
    if (imgSrc !== PERSONAL_INFO.avatarLocalFallback) {
      setImgSrc(PERSONAL_INFO.avatarLocalFallback);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#FEFAE0]">
      {/* Background Organic Ambient Blobs */}
      <div className="absolute top-10 right-0 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#606C38]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 sm:w-[420px] h-72 sm:h-[420px] bg-[#BC6C25]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-1/4 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#DDA15E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#606C38]/25 text-[#283618] text-xs sm:text-sm font-bold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BC6C25] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BC6C25]" />
              </span>
              <span>آماده همکاری در پروژه‌های جدید و ثبت‌نام دوره‌های تخصصی</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-[#606C38] font-bold text-lg sm:text-xl tracking-tight">
                سلام، من <span className="text-[#283618] font-black">{PERSONAL_INFO.name}</span> هستم
              </h2>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-[#283618] leading-tight sm:leading-snug tracking-tight">
                مهندسی آینده با{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#BC6C25] via-[#DDA15E] to-[#606C38]">
                  هوش مصنوعی
                </span>{' '}
                و علم داده
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[#283618]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              متخصص یادگیری ماشین، بینایی کامپیوتر و توسعه‌دهنده سیستم‌های هوشمند با بیش از {toPersianDigits(8)} سال سابقه اجرایی و تدریس بیش از {toPersianDigits(1000)} دانشجو. همراه شما در یادگیری عمیق، ورود به بازار کار و اجرای پروژه‌های مدرن هوش مصنوعی.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onScrollToSection('courses')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#283618] hover:bg-[#606C38] text-[#FEFAE0] font-bold text-sm sm:text-base shadow-lg shadow-[#283618]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <BookOpen size={19} />
                <span>مشاهده و ثبت‌نام دوره‌ها</span>
                <ArrowLeft size={17} />
              </button>

              <button
                onClick={() => onScrollToSection('contact')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#BC6C25] hover:bg-[#a05517] text-[#FEFAE0] font-bold text-sm sm:text-base shadow-md shadow-[#BC6C25]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle size={19} className="text-[#FEFAE0]" />
                <span>ارتباط در واتس‌اپ ({PERSONAL_INFO.phoneFormatted})</span>
              </button>

              <button
                onClick={() => onScrollToSection('projects')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#FEFAE0] text-[#283618] font-bold text-sm sm:text-base border border-[#283618]/15 shadow-xs transition-colors"
              >
                <Briefcase size={17} className="text-[#606C38]" />
                <span>نمونه‌کارها</span>
              </button>
            </div>

            {/* Social Links & Phone */}
            <div className="pt-6 border-t border-[#283618]/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#283618]/70">
              <span className="font-bold text-[#283618]">راه‌های ارتباط مستقیم:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white text-[#283618] hover:text-[#BC6C25] hover:border-[#BC6C25]/30 border border-[#283618]/10 shadow-xs transition-colors"
                  title="گیت‌هاب"
                >
                  <Github size={17} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white text-[#283618] hover:text-[#BC6C25] hover:border-[#BC6C25]/30 border border-[#283618]/10 shadow-xs transition-colors"
                  title="لینکدین"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-xl bg-white text-[#283618] hover:text-[#BC6C25] hover:border-[#BC6C25]/30 border border-[#283618]/10 shadow-xs transition-colors"
                  title="ایمیل"
                >
                  <Mail size={17} />
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-2 rounded-xl bg-white text-[#283618] hover:text-[#BC6C25] hover:border-[#BC6C25]/30 border border-[#283618]/10 shadow-xs transition-colors"
                  title={`تماس: ${PERSONAL_INFO.phoneFormatted}`}
                >
                  <Phone size={17} />
                </a>
              </div>
              <div className="hidden sm:block text-[#283618]/30">•</div>
              <a
                href={PERSONAL_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#606C38] hover:text-[#283618] font-bold font-mono text-xs dir-ltr hover:underline"
              >
                mesbahzadeh.github.io
              </a>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Warm Halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#606C38]/20 via-[#DDA15E]/30 to-[#BC6C25]/25 rounded-[2.5rem] blur-xl" />

              {/* Card Container */}
              <div className="relative rounded-[2rem] bg-white border border-[#283618]/10 p-4 shadow-xl overflow-hidden group">
                <div className="relative rounded-[1.5rem] overflow-hidden bg-[#283618]/5 aspect-[4/4.8]">
                  <img
                    src={imgSrc}
                    alt={PERSONAL_INFO.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Shade on bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#283618]/85 via-transparent to-transparent" />

                  {/* Badges on the Photo */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#283618]/10 text-xs font-bold text-[#283618] flex items-center gap-1.5 shadow-md">
                    <Code2 size={14} className="text-[#BC6C25]" />
                    <span>Python & AI Expert</span>
                  </div>


                {/* Quick WhatsApp Contact Chip inside Portrait */}
                <div className="mt-4 pt-3 border-t border-[#283618]/10 flex items-center justify-between text-xs text-[#283618] px-1">
                  <span className="flex items-center gap-1.5 text-[#283618]/70 font-semibold">
                    <Phone size={13} className="text-[#BC6C25]" />
                    موبایل و واتس‌اپ:
                  </span>
                  <button
                    onClick={onOpenWhatsAppDirect}
                    className="font-bold text-[#BC6C25] hover:text-[#283618] flex items-center gap-1 dir-ltr hover:underline"
                  >
                    <span>{PERSONAL_INFO.phoneFormatted}</span>
                    <MessageCircle size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#283618]/10 hover:border-[#606C38]/40 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-[#BC6C25] group-hover:text-[#283618] transition-colors mb-1">
                {stat.value}
              </div>
              <div className="text-[#283618] font-bold text-sm sm:text-base">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[#606C38] text-xs font-medium mt-0.5">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
