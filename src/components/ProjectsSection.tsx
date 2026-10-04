import React, { useState } from 'react';
import { Briefcase, ChevronLeft, Award } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ProjectModal } from './ProjectModal';
import { toPersianDigits } from '../utils/persianNumbers';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'همه پروژه‌ها' },
    { id: 'ai', label: 'هوش مصنوعی و یادگیری عمیق' },
    { id: 'web', label: 'سامانه‌های تحت وب' },
    { id: 'teaching', label: 'آموزش و آکادمیک' },
    { id: 'data', label: 'تحلیل داده و BI' },
    { id: 'mobile', label: 'اپلیکیشن موبایل' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#FEFAE0] border-t border-[#283618]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#606C38]/25 text-[#283618] text-xs font-bold shadow-xs">
            <Briefcase size={14} className="text-[#BC6C25]" />
            <span>پروژه‌های عملی و صنعتی</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#283618] tracking-tight">
            گزیده‌ای از نمونه‌کارها و پروژه‌ها
          </h2>

          <p className="text-[#283618]/75 text-sm sm:text-base leading-relaxed font-medium">
            محصولات توسعه‌یافته با تمرکز بر پایداری، دقت بالای مدل‌های یادگیری ماشین و طراحی کاربرپسند
          </p>
        </div>

        {/* Categories */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex flex-col justify-between rounded-3xl bg-white border border-[#283618]/10 hover:border-[#606C38]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden shadow-xs"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FEFAE0] border border-[#283618]/10 flex items-center justify-center text-[#283618] group-hover:bg-[#283618] group-hover:text-[#FEFAE0] transition-colors shadow-xs">
                    <DynamicIcon name={project.iconName} size={24} />
                  </div>

                  {project.accuracyOrMetric ? (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#606C38]/15 text-[#283618] border border-[#606C38]/25 flex items-center gap-1">
                      <Award size={12} className="text-[#BC6C25]" />
                      <span>{toPersianDigits(project.accuracyOrMetric)}</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEFAE0] text-[#283618]/80 border border-[#283618]/10">
                      {project.categoryLabel}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#283618] group-hover:text-[#BC6C25] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-[#283618]/75 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#FEFAE0] text-[#283618]/85 border border-[#283618]/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#FEFAE0]/60 border-t border-[#283618]/10 flex items-center justify-between text-xs text-[#283618]/70 group-hover:text-[#BC6C25] transition-colors font-bold">
                <span>مشاهده جزییات کامل پروژه</span>
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
