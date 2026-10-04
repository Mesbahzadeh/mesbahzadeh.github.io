import React from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import { Project } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { toPersianDigits } from '../utils/persianNumbers';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#283618]/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-[#283618]/15 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 bg-[#FEFAE0] border-b border-[#283618]/10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#606C38]/15 border border-[#606C38]/30 flex items-center justify-center text-[#283618] shrink-0">
                <DynamicIcon name={project.iconName} size={28} />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#606C38]/15 text-[#283618] border border-[#606C38]/25 mb-2 inline-block">
                  {project.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#283618]">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white text-[#283618]/60 hover:text-[#283618] hover:bg-[#FEFAE0] transition-colors border border-[#283618]/10 shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          {project.accuracyOrMetric && (
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#606C38]/30 text-[#283618] text-xs font-bold shadow-xs">
              <Award size={14} className="text-[#BC6C25]" />
              <span>متریک کلیدی: {toPersianDigits(project.accuracyOrMetric)}</span>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 space-y-6 bg-white">
          <div>
            <h4 className="text-sm font-bold text-[#283618] mb-2">شرح پروژه:</h4>
            <p className="text-[#283618]/85 text-sm sm:text-base leading-relaxed text-justify">
              {project.fullDetails || project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#283618] mb-3">تکنولوژی‌ها و پشته فنی:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-[#FEFAE0] text-[#283618] border border-[#283618]/15"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#FEFAE0] border-t border-[#283618]/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white text-[#283618] hover:bg-white/80 text-xs sm:text-sm font-bold transition-colors border border-[#283618]/15 shadow-xs"
          >
            بستن پنجره
          </button>

          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#283618] hover:bg-[#606C38] text-[#FEFAE0] font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>مشاهده آنلاین سامانه</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
