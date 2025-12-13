import React, { useState } from 'react';
import { Bot, Globe, BookOpen, ExternalLink, Tag } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
    {
        title: 'سیستم تشخیص تصویر CNN',
        description: 'طراحی و پیاده‌سازی مدل‌های یادگیری عمیق برای تشخیص و طبقه‌بندی تصاویر با دقت بالا.',
        tags: ['Python', 'TensorFlow', 'Deep Learning'],
        icon: Bot,
        category: 'ai'
    },
    {
        title: 'پلتفرم آموزش آنلاین',
        description: 'سیستم مدیریت یادگیری (LMS) کامل با قابلیت برگزاری آزمون و ارائه مدرک.',
        tags: ['Django', 'PostgreSQL', 'React'],
        icon: Globe,
        category: 'web'
    },
    {
        title: 'دوره جامع پایتون',
        description: 'تولید محتوای آموزشی ویدیویی برای یادگیری پایتون از صفر تا صد.',
        tags: ['Teaching', 'Content Creation'],
        icon: BookOpen,
        category: 'teaching'
    },
    {
        title: 'تحلیل داده‌های بورس',
        description: 'داشبورد هوشمند تحلیل تکنیکال و فاندامنتال بازار سرمایه با استفاده از پایتون.',
        tags: ['Pandas', 'Plotly', 'Data Science'],
        icon: Bot,
        category: 'ai'
    }
];

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'teaching'>('all');

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-24 bg-white relative">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-earth-dark mb-4">نمونه کارهای منتخب</h2>
                        <div className="h-1 w-24 bg-earth-rust"></div>
                    </div>
                    
                    <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {[
                            { id: 'all', label: 'همه' },
                            { id: 'ai', label: 'هوش مصنوعی' },
                            { id: 'web', label: 'وب' },
                            { id: 'teaching', label: 'آموزش' }
                        ].map(btn => (
                            <button
                                key={btn.id}
                                onClick={() => setFilter(btn.id as any)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                                    filter === btn.id 
                                    ? 'bg-earth-dark text-earth-cream shadow-lg' 
                                    : 'bg-earth-cream text-earth-dark hover:bg-earth-primary/20'
                                }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="group bg-earth-cream rounded-3xl overflow-hidden border border-earth-primary/10 hover:shadow-2xl hover:shadow-earth-primary/10 transition-all duration-300 flex flex-col">
                            <div className="h-48 bg-earth-dark flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-earth-primary/20 mix-blend-overlay"></div>
                                <project.icon size={64} className="text-earth-cream/20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute bottom-4 right-4 bg-earth-rust text-white p-2 rounded-lg">
                                    <project.icon size={20} />
                                </div>
                            </div>
                            
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-earth-dark mb-3">{project.title}</h3>
                                <p className="text-earth-dark/70 mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-white text-earth-primary rounded-md border border-earth-primary/20">
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-3 rounded-xl border border-earth-dark text-earth-dark font-semibold hover:bg-earth-dark hover:text-white transition-colors flex items-center justify-center gap-2 text-sm">
                                    مشاهده جزئیات <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;