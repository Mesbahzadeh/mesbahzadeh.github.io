import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenWhatsAppDirect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppDirect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'صفحه اصلی', href: '#home' },
    { label: 'درباره من', href: '#about' },
    { label: 'دوره‌های آموزشی', href: '#courses', highlight: true },
    { label: 'مهارت‌ها', href: '#skills' },
    { label: 'نمونه کارها', href: '#projects' },
    { label: 'مراحل همکاری', href: '#process' },
    { label: 'تماس با من', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FEFAE0]/90 backdrop-blur-md border-b border-[#283618]/10 shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#283618] to-[#606C38] flex items-center justify-center font-bold text-[#FEFAE0] shadow-md shadow-[#283618]/20 group-hover:scale-105 transition-transform">
              <i class="fa-solid fa-code"></i>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#BC6C25] rounded-full border-2 border-[#FEFAE0] animate-pulse" />
          </div>
          <div>
            <div className="font-extrabold text-base sm:text-lg text-[#283618] tracking-tight flex items-center gap-1.5">
              <span>{PERSONAL_INFO.name}</span>
            </div>
 
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-xl text-sm font-bold transition-all relative ${
                link.highlight
                  ? 'text-[#BC6C25] bg-[#BC6C25]/10 hover:bg-[#BC6C25]/20 border border-[#BC6C25]/30 shadow-xs'
                  : 'text-[#283618]/80 hover:text-[#BC6C25] hover:bg-[#606C38]/10'
              }`}
            >
              {link.label}
              {link.highlight && (
                <span className="inline-block mr-1.5 px-1.5 py-0.2 text-[10px] bg-[#BC6C25] text-white rounded-full">
                  ویژه
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Button: WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="p-2.5 rounded-xl bg-white text-[#283618] hover:text-[#BC6C25] hover:bg-[#FEFAE0] transition-colors border border-[#283618]/15 shadow-xs"
            title={`تماس مستقیم: ${PERSONAL_INFO.phoneFormatted}`}
          >
            <Phone size={18} />
          </a>
          <button
            onClick={onOpenWhatsAppDirect}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#283618] hover:bg-[#606C38] text-[#FEFAE0] text-sm font-bold shadow-md shadow-[#283618]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={18} className="text-[#DDA15E]" />
            <span>پیام در واتس‌اپ</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white text-[#283618] hover:bg-[#FEFAE0] transition-colors border border-[#283618]/15 shadow-xs"
          aria-label="باز کردن منو"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#283618]/98 backdrop-blur-xl border-b border-[#DDA15E]/20 shadow-2xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  link.highlight
                    ? 'bg-[#DDA15E]/20 text-[#DDA15E] border border-[#DDA15E]/40'
                    : 'text-[#FEFAE0] hover:bg-white/10'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-xs bg-[#BC6C25] text-[#FEFAE0] px-2 py-0.5 rounded-full">
                    آموزش‌ها
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppDirect();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#DDA15E] hover:bg-[#BC6C25] text-[#283618] hover:text-[#FEFAE0] font-black shadow-lg transition-colors"
              >
                <MessageCircle size={20} />
                <span>ارسال پیام در واتس‌اپ ({PERSONAL_INFO.phoneFormatted})</span>
              </button>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-[#FEFAE0] hover:bg-white/20 font-bold text-sm transition-colors"
              >
                <Phone size={18} />
                <span>تماس تلفنی مستقیم</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
