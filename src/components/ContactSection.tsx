import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { toPersianDigits } from '../utils/persianNumbers';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [courseChoice, setCourseChoice] = useState('مشاوره دوره‌های آموزشی');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    'مشاوره دوره‌های آموزشی',
    'ثبت‌نام در دوره پایتون جامع',
    'ثبت‌نام در دوره هوش مصنوعی و یادگیری عمیق',
    'ثبت‌نام در دوره پردازش تصویر (OpenCV)',
    'سفارش پروژه صنعتی یا هوش مصنوعی',
    'مشاوره شغلی و تحصیلی',
    'سایر موارد',
  ];

  const generateWhatsAppMessage = () => {
    return `سلام جناب مهندس مصباح‌زاده،
من از طریق وب‌سایت با شما تماس می‌گیرم.

👤 نام و نام خانوادگی: ${name || 'ذکر نشده'}
📱 شماره تماس من: ${phone || 'ذکر نشده'}
📌 موضوع: ${subject || courseChoice}

💬 متن پیام:
${message || 'جهت دریافت راهنمایی و مشاوره پیام ارسال کردم.'}`;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(finalMsg);
    const waUrl = `https://wa.me/${PERSONAL_INFO.whatsAppNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const finalMsg = generateWhatsAppMessage();
    navigator.clipboard.writeText(finalMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#283618] text-[#FEFAE0] border-t border-[#606C38]/30">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#606C38]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BC6C25]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DDA15E]/15 border border-[#DDA15E]/30 text-[#DDA15E] text-xs font-bold">
            <MessageCircle size={14} />
            <span>ارتباط مستقیم و فوری</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FEFAE0] tracking-tight">
            ارتباط مستقیم با مهران مصباح‌زاده
          </h2>

          <p className="text-[#FEFAE0]/80 text-sm sm:text-base leading-relaxed">
            فرم زیر را تکمیل کنید تا پیامتان فوراً در واتس‌اپ به شماره{' '}
            <span className="font-mono text-[#DDA15E] font-bold text-base sm:text-lg dir-ltr inline-block">
              {PERSONAL_INFO.phoneFormatted}
            </span>{' '}
            ارسال شود
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 shadow-xl space-y-6 backdrop-blur-xs">
              <h3 className="text-xl font-black text-[#FEFAE0] flex items-center gap-2">
                <Sparkles size={20} className="text-[#DDA15E]" />
                <span>اطلاعات تماس مستقیم</span>
              </h3>

              <div className="space-y-4">
                {/* WhatsApp Box */}
                <div className="p-4 rounded-2xl bg-[#606C38]/30 border border-[#DDA15E]/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#FEFAE0]/80 font-bold flex items-center gap-2">
                      <MessageCircle size={16} className="text-[#DDA15E]" />
                      شماره واتس‌اپ رسمی:
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#DDA15E] text-[#283618]">
                      پاسخگویی سریع
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold font-mono text-[#DDA15E] hover:text-[#FEFAE0] transition-colors dir-ltr block text-right"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>

                  <div className="text-[11px] text-[#FEFAE0]/70">
                    برای ثبت‌نام در دوره‌ها یا مشاوره فنی در هر ساعتی می‌توانید در واتس‌اپ پیام ارسال کنید.
                  </div>
                </div>

                {/* Direct Call Box */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#FEFAE0] group-hover:bg-[#DDA15E] group-hover:text-[#283618] transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-[#FEFAE0]/60 font-semibold">تماس تلفنی مستقیم</div>
                      <div className="text-sm font-mono font-bold text-[#FEFAE0] dir-ltr text-right">
                        {PERSONAL_INFO.phoneFormatted}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-[#FEFAE0]/40 group-hover:text-[#FEFAE0] transition-colors" />
                </a>

                {/* Email Box */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-[#FEFAE0] group-hover:bg-[#DDA15E] group-hover:text-[#283618] transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-[#FEFAE0]/60 font-semibold">پست الکترونیکی</div>
                      <div className="text-sm font-mono font-bold text-[#FEFAE0] dir-ltr text-right">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-[#FEFAE0]/40 group-hover:text-[#FEFAE0] transition-colors" />
                </a>

                {/* Time & Location */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-[#FEFAE0]/80">
                  <Clock size={16} className="text-[#DDA15E] shrink-0" />
                  <span>پاسخگویی سریع پیام‌ها در تمام روزهای هفته (حتی روزهای تعطیل)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white text-[#283618] border border-[#283618]/15 shadow-2xl relative">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-[#283618]">
                  فرم ارسال مستقیم پیام به واتس‌اپ
                </h3>
                <p className="text-xs sm:text-sm text-[#283618]/70">
                  اطلاعات خود را وارد کرده و دکمه را بزنید تا متن مرتب به چت واتس‌اپ ارسال شود.
                </p>
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#283618]">
                      نام و نام خانوادگی <span className="text-[#BC6C25]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: علی احمدی"
                      className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0]/60 border border-[#283618]/15 focus:border-[#BC6C25] focus:bg-white text-sm text-[#283618] placeholder-[#283618]/40 outline-hidden transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#283618]">
                      شماره تماس شما <span className="text-[#BC6C25]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09123456789"
                      className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0]/60 border border-[#283618]/15 focus:border-[#BC6C25] focus:bg-white text-sm text-[#283618] placeholder-[#283618]/40 outline-hidden transition-colors dir-ltr text-right"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#283618]">
                    موضوع پیام یا دوره مدنظر
                  </label>
                  <select
                    value={courseChoice}
                    onChange={(e) => {
                      setCourseChoice(e.target.value);
                      setSubject(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0]/60 border border-[#283618]/15 focus:border-[#BC6C25] focus:bg-white text-sm text-[#283618] outline-hidden transition-colors cursor-pointer"
                  >
                    {subjectOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-white text-[#283618]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#283618]">
                    متن پیام، سوال یا توضیحات پروژه <span className="text-[#BC6C25]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="توضیحات خود درباره هدف یادگیری، سوالات دوره یا پروژه مدنظرتان را اینجا بنویسید..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0]/60 border border-[#283618]/15 focus:border-[#BC6C25] focus:bg-white text-sm text-[#283618] placeholder-[#283618]/40 outline-hidden transition-colors resize-none"
                  />
                </div>

                {/* Submit and Copy Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#283618] hover:bg-[#606C38] text-[#FEFAE0] font-black text-sm sm:text-base shadow-lg shadow-[#283618]/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send size={18} className="text-[#DDA15E]" />
                    <span>ارسال پیام به واتس‌اپ ({PERSONAL_INFO.phoneFormatted})</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FEFAE0] hover:bg-white text-[#283618] text-xs font-bold transition-colors border border-[#283618]/15 shadow-xs"
                    title="کپی متن پیام"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 size={16} className="text-[#606C38]" />
                        <span>کپی شد!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>کپی پیام</span>
                      </>
                    )}
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-[#606C38]/15 border border-[#606C38]/30 text-xs text-[#283618] flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#606C38]" />
                    <span>پنجره واتس‌اپ باز شد. در صورت عدم باز شدن خودکار، می‌توانید متن را کپی و دستی ارسال فرمایید.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
