
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
import { cn } from '@/lib/utils';

interface System {
  id: string;
  title: string;
  image: string;
  icon: LucideIcon;
  hint: string;
  features: string[];
}

const systems: System[] = [
  { 
    id: 'financial', 
    title: "نظام نمو المالي", 
    image: "https://picsum.photos/seed/fin1/1200/800", 
    icon: BarChart3,
    hint: "financial dashboard",
    features: [
      "إدارة الحسابات شركة واحدة أو شركات متعددة",
      "الفواتير وإدارة المبيعات",
      "إدارة الأصول والاهلاكات",
      "الموازنات وارتباطها ببنود الصرف",
      "تعدد العملات ووحدات عمل ومراكز تكلفة"
    ]
  },
  { 
    id: 'hr', 
    title: "نظام الموارد البشرية", 
    image: "https://picsum.photos/seed/hr2/1200/800", 
    icon: Users,
    hint: "hr management",
    features: [
      "إدارة سجلات الموظفين والوثائق",
      "مسيرات الرواتب والبدلات",
      "إدارة الحضور والانصراف والخدمة الذاتية",
      "تقييم الأداء والتدريب",
      "إدارة الإجازات والتذاكر"
    ]
  },
  { 
    id: 'realestate', 
    title: "النظام العقاري", 
    image: "https://picsum.photos/seed/re3/1200/800", 
    icon: Building2,
    hint: "real estate software",
    features: [
      "إدارة الوحدات والمستأجرين",
      "عقود الإيجار الإلكترونية",
      "تحصيل الإيجارات والمتابعة المالية",
      "إدارة الصيانة والطلبات",
      "تقارير الإشغال والعوائد"
    ]
  },
  { 
    id: 'legal', 
    title: "نظام المحاماة", 
    image: "https://picsum.photos/seed/law4/1200/800", 
    icon: Gavel,
    hint: "legal platform",
    features: [
      "إدارة القضايا والجلسات",
      "أرشفة المستندات القانونية",
      "إدارة العملاء والتعاقدات",
      "تنبيهات المواعيد والمهام",
      "حساب الأتعاب والمصاريف"
    ]
  },
  { 
    id: 'manufacturing', 
    title: "نظام التصنيع", 
    image: "https://picsum.photos/seed/mfg5/1200/800", 
    icon: Factory,
    hint: "factory automation",
    features: [
      "إدارة أوامر الإنتاج وشجرة المواد BoM",
      "جدولة الإنتاج ومراقبة الخطوط",
      "مراقبة الجودة وفحص المنتجات",
      "حساب تكاليف الإنتاج",
      "تكامل مع المخازن والمشتريات"
    ]
  },
  { 
    id: 'fieldservice', 
    title: "نظام الخدمة الميدانية", 
    image: "https://picsum.photos/seed/field6/1200/800", 
    icon: Truck,
    hint: "field operations",
    features: [
      "تطبيق الهاتف للموظفين الميدانيين",
      "توزيع المهام بناءً على الموقع",
      "تتبع الوقت والمواد المستخدمة",
      "إغلاق الطلبات بتوقيع العميل",
      "تتبع المركبات والفرق الميدانية"
    ]
  },
];

const AUTOPLAY_INTERVAL = 6000;

export function FieldServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextSlide = useCallback(() => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % systems.length);
      setProgress(0);
      setIsChanging(false);
    }, 500); // Wait for fade out
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

  const currentSystem = systems[currentIndex];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.1)] border border-border/40 overflow-hidden flex flex-col">
            
            <div className={cn(
              "p-8 md:p-14 text-right flex flex-col items-center md:items-start transition-all duration-500",
              isChanging ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}>
              <div className="inline-flex items-center px-6 py-1 rounded-full bg-[#E0F7F9] text-[#2DD4BF] text-sm font-bold mb-8">
                منتج مميز
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-10 text-[#1E3A8A]">
                {currentSystem.title}
              </h2>

              <div className="space-y-6 mb-12 w-full max-w-lg">
                {currentSystem.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-start gap-4 group">
                    <span className="text-lg font-medium text-slate-600 flex-1">{feature}</span>
                    <div className="w-6 h-6 rounded-full border-2 border-[#2DD4BF] flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] opacity-100" />
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-[#234E94] hover:bg-[#1E3A8A] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/10 transition-all active:scale-95 h-auto border-none mb-8 self-center md:self-start">
                <a 
                  href="https://wa.me/966531813787" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  طلب عرض سعر
                </a>
              </Button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden px-8 md:px-16 pb-8">
              <div className={cn(
                "relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 transition-all duration-700 transform",
                isChanging ? "opacity-0 scale-105" : "opacity-100 scale-100"
              )}>
                <Image 
                  src={currentSystem.image}
                  alt={currentSystem.title}
                  fill
                  className="object-cover"
                  data-ai-hint={currentSystem.hint}
                />
              </div>
            </div>

            <div className="bg-white border-t border-border/40 p-6 md:p-10">
               <div className="w-full border-2 border-[#234E94]/10 rounded-[2.5rem] p-5 flex items-center justify-between bg-slate-50/50">
                  <div className="w-12 h-12 flex items-center justify-center text-[#234E94] opacity-40">
                    <ChevronLeft className="w-8 h-8" />
                  </div>

                  <div className="flex flex-col items-center flex-1">
                    <span className={cn(
                      "text-xl md:text-2xl font-bold text-[#234E94] font-headline mb-3 text-center transition-all duration-500",
                      isChanging ? "opacity-30 scale-95" : "opacity-100 scale-100"
                    )}>
                      {currentSystem.title}
                    </span>
                    <div className="w-32 md:w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#234E94] transition-all duration-75 linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className={cn(
                    "w-14 h-14 md:w-16 md:h-16 bg-[#234E94] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-all duration-500",
                    isChanging ? "rotate-180 scale-75 opacity-50" : "rotate-0 scale-100 opacity-100"
                  )}>
                    <currentSystem.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
