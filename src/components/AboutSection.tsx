import React from 'react';
import {
  Brain,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  ArrowLeft,
  Terminal,
} from 'lucide-react';
import { PERSONAL_INFO, WORK_PROCESS } from '../data/portfolioData';
import { toPersianDigits } from '../utils/persianNumbers';

interface AboutSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenWhatsAppDirect: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onScrollToSection,
  onOpenWhatsAppDirect,
}) => {
  const highlights = [
    'تسلط بر ساخت شبکه‌های عصبی عمیق (CNN, RNN, Transformers) و کتابخانه‌های PyTorch و TensorFlow',
    'تجربه ساخت پلتفرم‌های مقیاس‌پذیر فول‌استک با پایتون، جنگو و ری‌اکت',
    'طراحی و تدریس سرفصل‌های منطبق با استاندارد بین‌المللی برای آماده‌سازی دانشجویان جهت بازار کار',
    'رویکرد مهندسی دقیق و داده‌محور در حل مسائل صنعتی و تحلیلی',
    'پشتیبانی مداوم، منتورشیپ و هدایت شغلی دانشجویان برتر',
  ];

  return (
    <section id="about" className="py-20 relative bg-[#283618] text-[#FEFAE0] border-y border-[#606C38]/30">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#DDA15E_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DDA15E]/15 border border-[#DDA15E]/30 text-[#DDA15E] text-xs font-bold">
            <Sparkles size={14} />
            <span>معرفی کامل و پیشینه</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#FEFAE0] tracking-tight">
            درباره مهران مصباح‌زاده
          </h2>
          <p className="text-[#FEFAE0]/80 text-sm sm:text-base leading-relaxed">
            ترکیب تخصص مهندسی هوش مصنوعی با اشتیاق به آموزش و توانمندسازی نسل جدید توسعه‌دهندگان
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-[#FEFAE0]/90 leading-relaxed text-sm sm:text-base">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 shadow-xl space-y-4 backdrop-blur-xs">
              <h3 className="text-xl font-black text-[#DDA15E] flex items-center gap-2">
                <Brain className="text-[#DDA15E]" size={22} />
                <span>مسیر حرفه‌ای و رسالت کاری</span>
              </h3>
              <p className="text-[#FEFAE0]/85 leading-loose text-justify">
                من <strong className="text-[#FEFAE0] font-bold">مهران مصباح‌زاده</strong> هستم؛ با بیش از {toPersianDigits(8)} سال تجربه در توسعه و پیاده‌سازی الگوریتم‌های هوش مصنوعی، یادگیری عمیق، پردازش تصویر و مهندسی داده.
                در طول این سال‌ها با چالش‌های فنی متعددی در پروژه‌های صنعتی مواجه شده‌ام و تجربیات ارزشمندی در حوزه استقرار مدل‌ها در محیط‌های واقعی کسب کرده‌ام.
              </p>
              <p className="text-[#FEFAE0]/85 leading-loose text-justify">
                دیدگاه من در آموزش بسیار صریح و کاربردی است: معتقدم برنامه‌نویسی و هوش مصنوعی نباید در فرمول‌های خشک تئوری خلاصه شوند. هر مفهوم باید مستقیماً با یک پروژه واقعی، تحلیل خط‌به‌خط سورس‌کد و آموزش مهارت حل مسئله به دانشجو منتقل شود.
              </p>
            </div>

            {/* Key Advantages */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#DDA15E] text-base">ویژگی‌های متمایز دوره‌ها و همکاری:</h4>
              <div className="space-y-2.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#DDA15E] shrink-0 mt-1" size={18} />
                    <span className="text-[#FEFAE0]/90 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onScrollToSection('courses')}
                className="px-5 py-2.5 rounded-xl bg-[#DDA15E] hover:bg-[#BC6C25] text-[#283618] hover:text-[#FEFAE0] font-black text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <GraduationCap size={18} />
                <span>بررسی دوره‌های آموزشی من</span>
              </button>
              <button
                onClick={onOpenWhatsAppDirect}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FEFAE0] font-bold text-sm flex items-center gap-2 transition-colors border border-white/20"
              >
                <span>مشاوره اختصاصی در واتس‌اپ</span>
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>

          {/* Graphical/Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#DDA15E]/15 text-[#DDA15E] border border-[#DDA15E]/30">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FEFAE0] text-base">حوزه‌های تمرکز فنی</h4>
                    <p className="text-xs text-[#DDA15E]/80">Core Technical Focus</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Brain size={20} className="text-[#DDA15E] mb-2" />
                  <div className="font-bold text-[#FEFAE0] text-sm">یادگیری عمیق</div>
                  <div className="text-[#FEFAE0]/60 text-xs mt-0.5">CNN, Transformers, GAN</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Cpu size={20} className="text-[#DDA15E] mb-2" />
                  <div className="font-bold text-[#FEFAE0] text-sm">بینایی ماشین</div>
                  <div className="text-[#FEFAE0]/60 text-xs mt-0.5">OpenCV, YOLO, Tracking</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Code2 size={20} className="text-[#DDA15E] mb-2" />
                  <div className="font-bold text-[#FEFAE0] text-sm">برنامه‌نویسی پایتون</div>
                  <div className="text-[#FEFAE0]/60 text-xs mt-0.5">OOP, Clean Code, API</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Layers size={20} className="text-[#DDA15E] mb-2" />
                  <div className="font-bold text-[#FEFAE0] text-sm">علم داده و تحلیل</div>
                  <div className="text-[#FEFAE0]/60 text-xs mt-0.5">Pandas, BI, Analytics</div>
                </div>
              </div>

              {/* Direct Info Box */}
              <div className="p-4 rounded-xl bg-[#606C38]/30 border border-[#DDA15E]/30 text-xs text-[#FEFAE0] space-y-1.5">
                <div className="font-bold text-[#DDA15E] flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>آموزشگاه آنلاین مهران مصباح‌زاده</span>
                </div>
                <p className="text-[#FEFAE0]/80 leading-relaxed">
                  دوره‌ها به همراه پشتیبانی در گروه اختصاصی، تمرین‌های هفتگی، کد ریویو و ارائه گواهی پایان دوره برگزار می‌شوند.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section (#process) */}
        <div id="process" className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-xl sm:text-3xl font-black text-[#FEFAE0]">
              مراحل همکاری و یادگیری گام‌به‌گام
            </h3>
            <p className="text-[#FEFAE0]/70 text-sm">
              رویکرد سیستماتیک و شفاف از اولین پیام تا نتیجه نهایی
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_PROCESS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DDA15E]/50 transition-all group"
              >
                <div className="text-3xl font-black text-[#DDA15E] group-hover:text-[#BC6C25] transition-colors mb-3">
                  {toPersianDigits(item.step)}
                </div>
                <h4 className="text-base font-bold text-[#FEFAE0] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#FEFAE0]/70 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
