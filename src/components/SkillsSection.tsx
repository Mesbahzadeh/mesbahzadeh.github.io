import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { Wrench } from 'lucide-react';
import { toPersianDigits } from '../utils/persianNumbers';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'همه مهارت‌ها' },
    { id: 'ai', label: 'هوش مصنوعی و Deep Learning' },
    { id: 'data', label: 'علم داده و تحلیل' },
    { id: 'web', label: 'توسعه وب و فریم‌ورک‌ها' },
    { id: 'tools', label: 'زیرساخت و ابزارها' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#FEFAE0] border-t border-[#283618]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#606C38]/25 text-[#283618] text-xs font-bold shadow-xs">
            <Wrench size={14} className="text-[#BC6C25]" />
            <span>جعبه ابزار مهندسی و تخصص‌ها</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#283618] tracking-tight">
            مهارت‌های تخصصی و فنی
          </h2>

          <p className="text-[#283618]/75 text-sm sm:text-base leading-relaxed font-medium">
            مجموعه فناوری‌ها و زبان‌هایی که در طول بیش از {toPersianDigits(8)} سال برای ساخت محصولات هوش مصنوعی و نرم‌افزارهای مقیاس‌پذیر به کار گرفته‌ام
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#283618] text-[#FEFAE0] shadow-md'
                  : 'bg-white text-[#283618]/70 hover:text-[#283618] hover:bg-[#FEFAE0] border border-[#283618]/10 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#283618]/10 hover:border-[#606C38]/50 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FEFAE0] border border-[#283618]/10 flex items-center justify-center text-[#283618] group-hover:bg-[#283618] group-hover:text-[#FEFAE0] transition-colors shadow-xs">
                    <DynamicIcon name={skill.iconName} size={22} />
                  </div>
                  <span className="text-xs font-bold text-[#BC6C25] bg-[#BC6C25]/10 px-2 py-0.5 rounded-md border border-[#BC6C25]/20">
                    {toPersianDigits(skill.level)}٪
                  </span>
                </div>

                <h3 className="font-black text-[#283618] text-base mb-1 group-hover:text-[#BC6C25] transition-colors">
                  {skill.name}
                </h3>
                <div className="text-[11px] text-[#606C38] mb-2.5 font-bold">
                  دسته‌بندی: {skill.categoryLabel}
                </div>

                <p className="text-[#283618]/70 text-xs leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#FEFAE0] border border-[#283618]/5 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#606C38] to-[#BC6C25] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
