
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  BarChart3, 
  Users, 
  Building2, 
  Gavel, 
  Factory, 
  Truck,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface System {
  id: string;
  title: string;
  image: string;
  icon: LucideIcon;
  hint: string;
}

const systems: System[] = [
  { 
    id: 'financial', 
    title: "نظام نمو المالي", 
    image: "https://picsum.photos/seed/fin1/1200/800", 
    icon: BarChart3,
    hint: "financial dashboard"
  },
  { 
    id: 'hr', 
    title: "نظام الموارد البشرية", 
    image: "https://picsum.photos/seed/hr2/1200/800", 
    icon: Users,
    hint: "hr management"
  },
  { 
    id: 'realestate', 
    title: "النظام العقاري", 
    image: "https://picsum.photos/seed/re3/1200/800", 
    icon: Building2,
    hint: "real estate software"
  },
  { 
    id: 'legal', 
    title: "نظام المحاماة", 
    image: "https://picsum.photos/seed/law4/1200/800", 
    icon: Gavel,
    hint: "legal platform"
  },
  { 
    id: 'manufacturing', 
    title: "نظام التصنيع", 
    image: "https://picsum.photos/seed/mfg5/1200/800", 
    icon: Factory,
    hint: "factory automation"
  },
  { 
    id: 'fieldservice', 
    title: "نظام الخدمة الميدانية", 
    image: "https://picsum.photos/seed/field6/1200/800", 
    icon: Truck,
    hint: "field operations"
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 ثوانٍ لكل نظام

export function FieldServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % systems.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= AUTOPLAY_INTERVAL) {
        nextSlide();
        startTime = Date.now();
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  const features = [
    "تطبيق الهاتف المحمول لجميع المستخدمين",
    "إدارة المهام بكفاءة",
    "التتبع في الوقت الحقيقي",
    "تفاعل العملاء وردود الفعل",
    "الفواتير الآلية"
  ];

  const currentSystem = systems[currentIndex];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Top Text Content */}
          <div className="w-full max-w-xl text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              منتجاتنا الذكية
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-foreground leading-tight">
              حلول <span className="text-gradient">متكاملة</span> لكل القطاعات
            </h2>

            <Button asChild className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-10 py-8 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 mb-16 h-auto border-none">
              <a 
                href="https://wa.me/966531813787" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                طلب عرض سعر
              </a>
            </Button>
          </div>

          {/* Dynamic Showcase Card */}
          <div className="w-full max-w-4xl">
            <div className="bg-white dark:bg-card rounded-[3.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] border border-border/50 overflow-hidden group">
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden p-6 md:p-10">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner border border-border/10">
                  <Image 
                    src={currentSystem.image}
                    alt={currentSystem.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                    data-ai-hint={currentSystem.hint}
                  />
                </div>
              </div>

              {/* Bottom Navigation Bar */}
              <div className="p-8 md:p-12 pt-0">
                <div className="w-full border-2 border-primary/20 rounded-[2rem] p-4 flex items-center justify-between bg-white dark:bg-card">
                  {/* Left Chevron */}
                  <div className="w-12 h-12 flex items-center justify-center text-primary group-hover:-translate-x-1 transition-transform">
                    <ChevronLeft className="w-8 h-8" />
                  </div>

                  {/* Center Text and Progress */}
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-xl md:text-3xl font-bold text-[#1E3A8A] dark:text-primary font-headline mb-3 text-center">
                      {currentSystem.title}
                    </span>
                    {/* Progress Line */}
                    <div className="w-20 md:w-32 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-75 linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Right Icon Box */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-all">
                    <currentSystem.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
