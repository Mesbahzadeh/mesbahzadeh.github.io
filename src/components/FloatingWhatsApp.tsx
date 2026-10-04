import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  return (
    <aside aria-label="پشتیبانی واتس‌اپ" className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Tooltip hint on desktop */}
      <div className="hidden sm:flex items-center px-3.5 py-2 rounded-2xl bg-white text-[#283618] text-xs font-bold border border-[#283618]/15 shadow-xl backdrop-blur-md">
        <span>پاسخگویی واتس‌اپ: {PERSONAL_INFO.phoneFormatted}</span>
      </div>

      <button
        onClick={onClick}
        aria-label={`چت در واتس‌اپ با مهران مصباح‌زاده (${PERSONAL_INFO.phoneFormatted})`}
        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#283618] to-[#606C38] hover:from-[#BC6C25] hover:to-[#DDA15E] text-[#FEFAE0] hover:text-white flex items-center justify-center shadow-2xl shadow-[#283618]/30 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#BC6C25] rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#BC6C25] rounded-full border-2 border-white" />
        <MessageCircle size={28} />
      </button>
    </aside>
  );
};
