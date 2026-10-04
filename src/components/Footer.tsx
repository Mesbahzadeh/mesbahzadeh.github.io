import React from 'react';
import { Github, Linkedin, Mail, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#283618] text-[#FEFAE0] border-t border-[#606C38]/40 text-xs sm:text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#DDA15E] flex items-center justify-center font-extrabold text-[#283618] text-sm shadow-md">
                م‌م
              </div>
              <span className="font-extrabold text-[#FEFAE0] text-lg">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[#FEFAE0]/80 text-xs leading-relaxed max-w-md">
              مهندس هوش مصنوعی، متخصص پایتون و مدرس دوره‌های تخصصی ورود به بازار کار. طراحی و اجرای پروژه‌های یادگیری عمیق، پردازش تصویر و توسعه وب مقیاس‌پذیر.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <div className="font-bold text-[#DDA15E] text-sm mb-3">دسترسی سریع</div>
            <ul className="space-y-2 text-xs text-[#FEFAE0]/80">
              <li>
                <a href="#about" className="hover:text-[#DDA15E] transition-colors">
                  درباره من
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#DDA15E] transition-colors">
                  دوره‌های آموزشی
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#DDA15E] transition-colors">
                  مهارت‌ها و جعبه ابزار
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#DDA15E] transition-colors">
                  نمونه‌کارها و پروژه‌ها
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DDA15E] transition-colors">
                  ارتباط مستقیم واتس‌اپ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-2">
            <div className="font-bold text-[#DDA15E] text-sm mb-3">اطلاعات تماس مستقیم</div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-[#FEFAE0]/90">
                <MessageCircle size={15} className="text-[#DDA15E]" />
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono dir-ltr hover:text-[#DDA15E] font-bold"
                >
                  {PERSONAL_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#FEFAE0]/90">
                <Mail size={15} className="text-[#DDA15E]" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono dir-ltr hover:text-[#DDA15E]"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#FEFAE0]/90">
                <Phone size={15} className="text-[#DDA15E]" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-mono dir-ltr hover:text-[#DDA15E] font-bold"
                >
                  {PERSONAL_INFO.phoneFormatted}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right text-[#FEFAE0]/70 text-xs">
            © تمامی حقوق برای مهران مصباح‌زاده محفوظ است. | شماره تماس مستقیم: {PERSONAL_INFO.phoneFormatted}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#FEFAE0] transition-colors"
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#FEFAE0] transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#DDA15E] hover:text-[#283618] text-[#FEFAE0] transition-colors flex items-center gap-1"
              title="بازگشت به بالا"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
