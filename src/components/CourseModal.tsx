import React from 'react';
import {
  X,
  Clock,
  GraduationCap,
  CheckCircle2,
  BookOpen,
  MessageCircle,
  ExternalLink,
  Users,
  Award,
} from 'lucide-react';
import { Course } from '../types';
import { PERSONAL_INFO, buildCourseWhatsAppMessage, buildWhatsAppUrl } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { toPersianDigits } from '../utils/persianNumbers';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  const handleWhatsAppEnroll = () => {
    const message = buildCourseWhatsAppMessage(course.title);
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#283618]/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#283618]/15 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#FEFAE0] border-b border-[#283618]/10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#606C38]/15 border border-[#606C38]/30 flex items-center justify-center text-[#283618] shrink-0">
                <DynamicIcon name={course.iconName} size={28} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#606C38]/15 text-[#283618] border border-[#606C38]/25">
                    {course.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-[#283618]/80 border border-[#283618]/10">
                    سطح: {course.level}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#283618]">
                  {course.title}
                </h3>
                {course.englishTitle && (
                  <p className="text-xs sm:text-sm text-[#606C38] font-mono mt-0.5 dir-ltr text-right">
                    {course.englishTitle}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white text-[#283618]/60 hover:text-[#283618] hover:bg-[#FEFAE0] transition-colors border border-[#283618]/10 shrink-0"
              aria-label="بستن"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-[#283618]/10 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-white border border-[#283618]/10 flex items-center gap-2.5">
              <Clock size={18} className="text-[#BC6C25] shrink-0" />
              <div>
                <div className="text-[#283618]/60 text-[11px] font-medium">مدت دوره</div>
                <div className="font-bold text-[#283618]">{toPersianDigits(course.duration)}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#283618]/10 flex items-center gap-2.5">
              <BookOpen size={18} className="text-[#606C38] shrink-0" />
              <div>
                <div className="text-[#283618]/60 text-[11px] font-medium">تعداد جلسات</div>
                <div className="font-bold text-[#283618]">{toPersianDigits(course.sessionsCount || 'جامع')}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#283618]/10 flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Award size={18} className="text-[#BC6C25] shrink-0" />
              <div>
                <div className="text-[#283618]/60 text-[11px] font-medium">شهریه دوره</div>
                <div className="font-black text-[#BC6C25] text-sm">{toPersianDigits(course.price)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto bg-white">
          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#283618] mb-2">توضیحات دوره:</h4>
            <p className="text-[#283618]/85 text-sm sm:text-base leading-relaxed text-justify">
              {course.description}
            </p>
          </div>

          {/* Target Audience & Prerequisites */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FEFAE0]/70 border border-[#283618]/10 space-y-1">
              <div className="text-xs font-bold text-[#283618] flex items-center gap-1.5">
                <Users size={15} className="text-[#606C38]" />
                <span>مخاطبان هدف</span>
              </div>
              <p className="text-xs text-[#283618]/80 leading-relaxed">
                {course.targetAudience}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FEFAE0]/70 border border-[#283618]/10 space-y-1">
              <div className="text-xs font-bold text-[#283618] flex items-center gap-1.5">
                <GraduationCap size={15} className="text-[#BC6C25]" />
                <span>پیش‌نیازها</span>
              </div>
              <p className="text-xs text-[#283618]/80 leading-relaxed">
                {course.prerequisites}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-bold text-[#283618] mb-3">دستاوردهای این دوره:</h4>
            <div className="space-y-2">
              {course.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#283618]/85">
                  <CheckCircle2 size={16} className="text-[#606C38] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Chapters */}
          {course.syllabus && course.syllabus.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-[#283618] mb-3">سرفصل‌های آموزشی کامل:</h4>
              <div className="space-y-3">
                {course.syllabus.map((chapter, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-[#FEFAE0]/50 border border-[#283618]/10 space-y-2"
                  >
                    <div className="text-sm font-bold text-[#283618] flex items-center justify-between">
                      <span>{chapter.title}</span>
                      <span className="text-xs text-[#606C38] font-bold">بخش {toPersianDigits(cIdx + 1)}</span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 pt-1 text-xs text-[#283618]/75">
                      {chapter.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#BC6C25] shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#FEFAE0] border-t border-[#283618]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right w-full sm:w-auto">
            <div className="text-xs text-[#283618]/60 font-semibold">شهریه و شرایط ثبت‌نام:</div>
            <div className="text-xl font-black text-[#BC6C25]">{toPersianDigits(course.price)}</div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppEnroll}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#283618] hover:bg-[#606C38] text-[#FEFAE0] font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={18} className="text-[#DDA15E]" />
              <span>مشاوره و ثبت‌نام در واتس‌اپ</span>
            </button>

            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white hover:bg-[#FEFAE0] text-[#283618] transition-colors border border-[#283618]/15 shadow-xs"
              title="مشاهده صفحه دوره در سامانه آموزشی"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
