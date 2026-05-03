import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Building2, Calendar, ThumbsUp } from 'lucide-react';
import { siteConfig } from '../config/site';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, suffix, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 lg:p-8 group"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out' }}
    >
      <div className="p-4 bg-sky-500/20 rounded-2xl mb-4 group-hover:bg-sky-500/30 transition-colors">
        <Icon className="w-8 h-8 text-sky-400" />
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/60 text-center">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - siteConfig.experienceSince;
  const yearsOwnCompany = currentYear - siteConfig.ownCompanySince;

  const stats = [
    { icon: Calendar, value: yearsExperience, suffix: '+', label: 'Lat doświadczenia' },
    { icon: Briefcase, value: yearsOwnCompany, suffix: '+', label: 'Lat własnej firmy' },
    { icon: Building2, value: 18, suffix: '', label: 'Dzielnic Warszawy' },
    { icon: ThumbsUp, value: 100, suffix: '%', label: 'Wycena przed pracą' },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_79px,#1e293b_79px,#1e293b_81px,transparent_81px),linear-gradient(transparent_79px,#1e293b_79px,#1e293b_81px,transparent_81px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;