import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  ChevronLeft,
  GraduationCap,
  Zap,
} from 'lucide-react';
import { COURSES, buildCourseWhatsAppMessage, buildWhatsAppUrl, PERSONAL_INFO } from '../data/portfolioData';
import { Course } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { CourseModal } from './CourseModal';
import { toPersianDigits } from '../utils/persianNumbers';

export const CoursesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', label: 'همه دوره‌ها' },
    { id: 'ai', label: 'هوش مصنوعی و ML' },
    { id: 'programming', label: 'برنامه‌نویسی پایتون' },
    { id: 'data', label: 'علم داده و تحلیل' },
    { id: 'web', label: 'توسعه وب (Django)' },
    { id: 'mobile', label: 'موبایل و UI/UX' },
  ];

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : activeCategory === 'mobile'
    ? COURSES.filter((c) => c.category === 'mobile' || c.category === 'design')
    : COURSES.filter((c) => c.category === activeCategory);

  const handleWhatsAppEnroll = (course: Course) => {
    const text = buildCourseWhatsAppMessage(course.title);
    const url = buildWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="courses" className="py-24 relative bg-[#FEFAE0]">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#606C38]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#BC6C25]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#606C38]/25 text-[#283618] text-xs sm:text-sm font-bold shadow-xs">
            <GraduationCap size={16} className="text-[#BC6C25]" />
            <span>آکادمی تخصصی مهران مصباح‌زاده</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#283618] tracking-tight">
            دوره‌های آموزشی جامع و کاربردی
          </h2>

          <p className="text-[#283618]/75 text-sm sm:text-base leading-relaxed font-medium">
            دوره‌های پروژه‌محور تخصصی با تمرکز بر ورود مستقیم به بازار کار، یادگیری عملی ابزارهای روز و پشتیبانی مستمر
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#283618] text-[#FEFAE0] shadow-md scale-105'
                  : 'bg-white text-[#283618]/70 hover:text-[#283618] hover:bg-[#FEFAE0] border border-[#283618]/10 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`group flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden ${
                course.isPopular
                  ? 'border-[#BC6C25]/40 hover:border-[#BC6C25] ring-2 ring-[#BC6C25]/10'
                  : 'border-[#283618]/10 hover:border-[#606C38]/40'
              }`}
            >
              {/* Card Top */}
              <div className="p-6 sm:p-7 space-y-5">
                {/* Badges Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#FEFAE0] border border-[#283618]/10 flex items-center justify-center text-[#283618] group-hover:bg-[#283618] group-hover:text-[#FEFAE0] transition-colors shadow-xs">
                    <DynamicIcon name={course.iconName} size={24} />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {course.isPopular && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-[#BC6C25]/15 text-[#BC6C25] border border-[#BC6C25]/30">
                        پرطرفدار
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#606C38]/10 text-[#283618] border border-[#606C38]/20">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-xl font-black text-[#283618] group-hover:text-[#BC6C25] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  {course.englishTitle && (
                    <div className="text-xs text-[#606C38] font-mono mt-1 dir-ltr text-right truncate">
                      {course.englishTitle}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#283618]/75 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-[#283618]/10">
                  {course.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#283618]/80">
                      <CheckCircle2 size={15} className="text-[#606C38] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Price & CTAs */}
              <div className="p-6 sm:p-7 pt-4 bg-[#FEFAE0]/60 border-t border-[#283618]/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-[#283618]/60 font-semibold">طول دوره:</div>
                    <div className="text-xs sm:text-sm font-bold text-[#283618] flex items-center gap-1">
                      <Clock size={14} className="text-[#BC6C25]" />
                      <span>{toPersianDigits(course.duration)}</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-[11px] text-[#283618]/60 font-semibold">شهریه دوره:</div>
                    <div className="text-base sm:text-lg font-black text-[#BC6C25]">
                      {toPersianDigits(course.price)}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => handleWhatsAppEnroll(course)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#283618] hover:bg-[#606C38] text-[#FEFAE0] font-bold text-xs sm:text-sm shadow-md shadow-[#283618]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <MessageCircle size={17} className="text-[#DDA15E]" />
                    <span>مشاوره و ثبت‌نام در واتس‌اپ</span>
                  </button>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-[#FEFAE0] text-[#283618] font-bold text-xs transition-colors border border-[#283618]/15 shadow-xs"
                  >
                    <span>مشاهده سرفصل‌ها و جزییات دوره</span>
                    <ChevronLeft size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Hub Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#283618] text-[#FEFAE0] border border-[#606C38]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-xl font-black text-[#DDA15E] flex items-center justify-center md:justify-start gap-2">
              <Zap className="text-[#DDA15E]" size={20} />
              <span>پلتفرم آموزش آنلاین و پنل دانشجویی اختصاصی</span>
            </h3>
            <p className="text-[#FEFAE0]/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
              تمامی دوره‌ها در بستر سامانه مدیریت یادگیری با قابلیت مشاهده آنلاین ویدیوها، دانلود منابع، شرکت در آزمون‌ها و ارتباط مستقیم با استاد برگزار می‌شوند.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://mesbahzadeh.pythonanywhere.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#FEFAE0] font-bold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <span>مشاهده سامانه آموزشی</span>
              <ExternalLink size={16} />
            </a>

            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsAppNumber}?text=${encodeURIComponent('سلام جناب مهندس مصباح‌زاده، جهت دریافت مشاوره انتخاب دوره آموزشی پیام میدم.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#DDA15E] hover:bg-[#BC6C25] text-[#283618] hover:text-[#FEFAE0] font-black text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle size={16} />
              <span>مشاوره انتخاب دوره</span>
            </a>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  );
};
