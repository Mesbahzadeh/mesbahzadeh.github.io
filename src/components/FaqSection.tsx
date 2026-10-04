import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#FEFAE0] border-t border-[#283618]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#606C38]/25 text-[#283618] text-xs font-bold shadow-xs">
            <HelpCircle size={14} className="text-[#BC6C25]" />
            <span>پاسخ به سوالات پرتکرار</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#283618] tracking-tight">
            سوالات متداول دانشجویان و کارفرمایان
          </h2>

          <p className="text-[#283618]/70 text-xs sm:text-sm">
            اگر سوال دیگری دارید، با کمال میل از طریق واتس‌اپ پاسخگوی شما خواهم بود
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#283618]/10 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-[#283618] hover:text-[#BC6C25] transition-colors text-sm sm:text-base gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#606C38] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#BC6C25]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#283618]/80 text-xs sm:text-sm leading-relaxed border-t border-[#283618]/10 text-justify">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
