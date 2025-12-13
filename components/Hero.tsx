import React from 'react';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-earth-primary/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-earth-rust/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-right space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-earth-primary/10 text-earth-primary rounded-full text-sm font-bold mb-4 border border-earth-primary/20">
              خوش آمدید
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-earth-dark leading-tight">
              برنامه‌نویس
              <span className="block text-earth-primary mt-2">هوش مصنوعی</span>
              <span className="text-2xl md:text-3xl font-light text-earth-rust mt-4 block">و مدرس دوره‌های تخصصی</span>
            </h1>
            
            <p className="text-lg text-earth-dark/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
              تخصص در پایتون، یادگیری ماشین و علم داده. من به دانشجویان کمک می‌کنم تا مسیر حرفه‌ای خود را در دنیای فناوری پیدا کنند.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a 
                href="#portfolio" 
                className="px-8 py-4 bg-earth-dark text-earth-cream rounded-xl font-bold hover:bg-earth-primary transition-colors flex items-center justify-center gap-2 shadow-lg shadow-earth-dark/20"
              >
                مشاهده نمونه کارها
                <ArrowLeft size={20} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-earth-dark text-earth-dark rounded-xl font-bold hover:bg-earth-dark hover:text-earth-cream transition-all flex items-center justify-center"
              >
                تماس با من
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-6 text-earth-dark/60">
                <a href="https://github.com/mesbahzadeh" target="_blank" rel="noreferrer" className="hover:text-earth-rust transition-colors"><Github size={24} /></a>
                <a href="https://linkedin.com/in/mehran-mesbahzadeh" target="_blank" rel="noreferrer" className="hover:text-earth-rust transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:mehran.mesbahzadeh@yahoo.com" className="hover:text-earth-rust transition-colors"><Mail size={24} /></a>
            </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
             {/* Decorative blob borders */}
             <div className="absolute inset-0 border-2 border-earth-rust/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-float" style={{ animationDuration: '8s' }}></div>
             <div className="absolute inset-4 border-2 border-earth-primary/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
             
             {/* Main Image Mask */}
             <div className="absolute inset-8 rounded-[50%_50%_50%_50%] overflow-hidden shadow-2xl bg-earth-sand">
                <img 
                    src="https://mesbahzadeh.pythonanywhere.com/staticfiles/media/teachers/profile/mehran.jpg" 
                    alt="Mehran Mesbahzadeh" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;