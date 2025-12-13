import React from 'react';
import { Brain, Database, Globe, Layers, Code, LineChart, Server, Cpu } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
    { name: 'Python', icon: Code, category: 'AI' },
    { name: 'TensorFlow & Keras', icon: Brain, category: 'AI' },
    { name: 'PyTorch', icon: Layers, category: 'AI' },
    { name: 'Data Science', icon: LineChart, category: 'AI' },
    { name: 'Django & Flask', icon: Globe, category: 'Web' },
    { name: 'PostgreSQL', icon: Database, category: 'Web' },
    { name: 'FastAPI', icon: Server, category: 'Web' },
    { name: 'Docker', icon: Cpu, category: 'Web' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-earth-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-dark mb-4">مهارت‌های تخصصی</h2>
            <div className="h-1 w-16 bg-earth-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
                <div 
                    key={idx} 
                    className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-primary/10 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 bg-earth-primary/10 rounded-2xl flex items-center justify-center text-earth-primary mb-6 group-hover:bg-earth-primary group-hover:text-white transition-colors">
                        <skill.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-earth-dark mb-2">{skill.name}</h3>
                    <p className="text-sm text-earth-dark/50 font-medium">
                        {skill.category === 'AI' ? 'هوش مصنوعی و داده' : 'توسعه وب و بک‌اند'}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;