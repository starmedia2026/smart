
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
    image: "/shanana.jpeg", 
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
    image: "/mawrd.jpeg", 
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
    image: "/agar.jpeg", 
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
    image: "/maham.png",
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
    image: "/tsnea.png", 
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
    image: "/maham.png", 
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
    image: "/shap.jpeg", 
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
    image: "/shbket.jpeg", 
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
    image: "/amn.jpeg", 
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
    }, 300);
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
          
          <div className="w-full max-w-4xl bg-card rounded-[3rem] shadow-2xl border border-border/40 overflow-hidden flex flex-col">
            
            <div className={cn(
              "p-8 md:p-12 text-right flex flex-col items-center md:items-start transition-all duration-300 ease-out",
              isChanging ? "opacity-0 -translate-x-4 blur-sm" : "opacity-100 translate-x-0 blur-0"
            )}>
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-2" />
                حلولنا الذكية
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 text-foreground">
                {currentSystem.title}
              </h2>

              <div className="grid sm:grid-cols-1 gap-4 mb-8 w-full max-w-lg">
                {currentSystem.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-base md:text-lg font-medium text-muted-foreground flex-1">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-sm rounded-xl shadow-lg transition-all active:scale-95 h-auto border-none mb-4 self-center md:self-start">
                <a 
                  href="https://wa.me/966531813787" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  طلب عرض سعر
                </a>
              </Button>
            </div>

            <div className="relative aspect-[16/9] w-full bg-muted/30 overflow-hidden px-6 md:px-12 pb-8">
              <div className={cn(
                "relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 transition-all duration-300 transform ease-out",
                isChanging ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
              )}>
                <Image 
                  src={currentSystem.image}
                  alt={currentSystem.title}
                  fill
                  className="object-cover"
                  data-ai-hint={currentSystem.hint}
                  priority
                />
              </div>
            </div>

            <div className="bg-card border-t border-border/40 p-6 md:p-8">
               <div className="w-full border border-primary/20 rounded-[2rem] p-4 flex items-center justify-between bg-primary/5">
                  <div className="w-10 h-10 flex items-center justify-center text-primary/40">
                    <ChevronLeft className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col items-center flex-1">
                    <span className={cn(
                      "text-lg md:text-xl font-bold text-primary font-headline mb-2 text-center transition-all duration-300 ease-out",
                      isChanging ? "opacity-0 scale-90" : "opacity-100 scale-100"
                    )}>
                      {currentSystem.title}
                    </span>
                    <div className="w-24 md:w-40 h-1 bg-primary/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-100 linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className={cn(
                    "w-12 h-12 md:w-14 md:h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-out",
                    isChanging ? "scale-50 opacity-0" : "scale-100 opacity-100"
                  )}>
                    <currentSystem.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
