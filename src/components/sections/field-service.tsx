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
  Cloud,
  Network,
  ShieldAlert,
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
    title: "نظام شانان المالي", 
    image: "/fin.jpg", 
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
    image: "/hr.jpg", 
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
    image: "/realestate.jpg", 
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
    image: "/legal.jpg",
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
    image: "/manufacturing.jpg", 
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
    image: "/field.jpg", 
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
  { 
    id: 'cloud', 
    title: "نظام الحوسبة السحابية", 
    image: "/cloud.jpg", 
    icon: Cloud,
    hint: "cloud infrastructure",
    features: [
      "استضافة التطبيقات والأنظمة",
      "تخزين سحابي للملفات والبيانات",
      "قواعد بيانات سحابية",
      "نسخ احتياطي واستعادة البيانات",
      "إدارة السيرفرات عن بُعد"
    ]
  },
  { 
    id: 'networking', 
    title: "نظام الشبكات", 
    image: "/network.jpg", 
    icon: Network,
    hint: "networking infrastructure",
    features: [
      "تصميم وتنفيذ الشبكات (LAN / WAN)",
      "تركيب أجهزة الشبكات (راوترات – سويتشات)",
      "إعداد الشبكات اللاسلكية (Wi-Fi)",
      "تأمين الشبكة بجدران حماية (Firewall)",
      "صيانة ومراقبة الشبكة وربط الفروع"
    ]
  },
  { 
    id: 'cybersecurity', 
    title: "نظام الأمن السيبراني", 
    image: "/cyber.jpg", 
    icon: ShieldAlert,
    hint: "cyber security",
    features: [
      "تركيب وإدارة أنظمة الحماية المتطورة",
      "اختبار الاختراق وتحليل الثغرات",
      "تأمين الشبكات وإدارة الهوية والوصول",
      "النسخ الاحتياطي الآمن واستعادة البيانات",
      "التوعية الأمنية الشاملة للموظفين"
    ]
  },
];

const AUTOPLAY_INTERVAL = 4000;

export function FieldServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextSlide = useCallback(() => {
    setIsChanging(true);
    // انتقال لحظي وسريع جداً
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % systems.length);
      setProgress(0);
      setIsChanging(false);
    }, 100); 
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
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          <div className="w-full max-w-5xl bg-card/40 dark:bg-white/5 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-border/40 dark:border-white/10 overflow-hidden flex flex-col md:flex-row-reverse">
            
            <div className="flex-1 p-8 md:p-16 text-right relative z-10">
              <div className={cn(
                "transition-all duration-200 ease-out",
                isChanging ? "opacity-0 translate-x-4 blur-sm" : "opacity-100 translate-x-0 blur-0"
              )}>
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-2" />
                  حلولنا الذكية
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 text-foreground dark:text-white">
                  {currentSystem.title}
                </h2>

                <div className="space-y-4 mb-10">
                  {currentSystem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-base md:text-lg font-medium text-muted-foreground dark:text-white/80 flex-1">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-base rounded-2xl shadow-xl transition-all active:scale-95 h-auto border-none">
                  <a href="https://wa.me/966531813787" target="_blank" rel="noopener noreferrer">
                    طلب عرض سعر
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-1 relative min-h-[400px] md:min-h-full overflow-hidden">
              {systems.map((system, index) => {
                const active = index === currentIndex;
                return (
                  <div
                    key={system.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-300 ease-out",
                      active
                        ? "opacity-100 scale-100 z-20"
                        : "opacity-0 scale-105 z-0"
                    )}
                  >
                    <Image
                      src={system.image}
                      alt={system.title}
                      fill
                      className="object-cover"
                      priority={active}
                    />
                  </div>
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-l from-card/40 dark:from-black/40 to-transparent z-10" />
            </div>

          </div>

          <div className="w-full max-w-5xl mt-8">
            <div className="glass-card dark:bg-white/5 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-white/10">
              <div className="flex items-center gap-6 flex-1 w-full">
                <div className={cn(
                  "w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-200",
                  isChanging ? "scale-75 opacity-0" : "scale-100 opacity-100"
                )}>
                  <currentSystem.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className={cn(
                    "text-xl font-bold text-foreground dark:text-white mb-2 transition-all duration-200",
                    isChanging ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
                  )}>
                    {currentSystem.title}
                  </h4>
                  <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-100 linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {systems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setProgress(0);
                    }}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      idx === currentIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
