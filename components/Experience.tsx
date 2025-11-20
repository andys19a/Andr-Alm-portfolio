import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 sm:pl-32 py-2 group">
                  {/* Timeline line */}
                  <div className="hidden sm:flex flex-col items-end absolute left-0 top-2 w-24 pr-4">
                    <span className="text-sm font-semibold text-primary">{exp.period}</span>
                  </div>
                  
                  {/* Vertical line */}
                  <div className="absolute left-2 sm:left-[7.5rem] top-0 bottom-0 w-px bg-gray-700 group-last:bottom-auto group-last:h-full"></div>
                  
                  {/* Dot */}
                  <div className="absolute left-[0.25rem] sm:left-[7.25rem] top-3 w-3 h-3 rounded-full bg-primary border-4 border-dark-lighter z-10"></div>

                  <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="sm:hidden text-sm text-primary mb-2 flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                    <div className="text-lg text-gray-300 font-medium mb-2 flex items-center gap-2">
                       <Briefcase size={16} className="text-gray-500" />
                       {exp.company}
                    </div>
                    <p className="text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;