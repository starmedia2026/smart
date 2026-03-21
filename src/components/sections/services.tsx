import { Button } from '@/components/ui/button';
import { 
  FileSearch, 
  Smartphone, 
  Palette, 
  Cpu, 
  ShoppingBag, 
  Zap 
} from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "تحليل وإعداد BRD",
      desc: "دراسة دقيقة لمتطلبات عملك وتحويلها إلى وثائق تقنية واضحة تضمن نجاح المشروع.",
      points: ["تحليل الفجوات", "تحديد أصحاب المصلحة", "نمذجة العمليات"],
      icon: FileSearch
    },
    {
      title: "تطوير تطبيقات الجوال",
      desc: "تطبيقات أصلية وهجينة (iOS & Android) تتميز بالأداء العالي وسهولة الاستخدام.",
      points: ["React Native", "Swift/Kotlin", "تكامل API"],
      icon: Smartphone
    },
    {
      title: "تصميم UI/UX",
      desc: "واجهات مستخدم جذابة وتجارب مستخدم تضمن ولاء عملائك وسهولة تفاعلهم مع منتجك.",
      points: ["تصميم تفاعلي", "تجربة مستخدم سلسة", "هوية بصرية"],
      icon: Palette
    },
    {
      title: "أنظمة ERP",
      desc: "حلول شاملة لإدارة موارد شركتك من المالية إلى المخازن بفعالية تامة.",
      points: ["إدارة مالية", "سلاسل الإمداد", "تقارير ذكية"],
      icon: Cpu
    },
    {
      title: "المتاجر الإلكترونية",
      desc: "منصات تجارة إلكترونية متكاملة تساعدك على البيع والنمو في الفضاء الرقمي.",
      points: ["دفع آمن", "إدارة مخزون", "تحليلات بيع"],
      icon: ShoppingBag
    },
    {
      title: "أتمتة العمليات",
      desc: "تحويل المهام اليدوية المتكررة إلى عمليات آلية ذكية توفر الوقت والجهد.",
      points: ["سير عمل ذكي", "تكامل الأنظمة", "تقليل التكلفة"],
      icon: Zap
    }
  ];

  return (
    <section id="services" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">خدماتنا المتميزة</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">نقدم مجموعة متكاملة من الحلول التقنية المصممة خصيصاً لتناسب احتياجات نمو أعمالك.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2 mb-8">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {point}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="p-0 h-auto text-primary hover:text-accent flex items-center gap-2">
                اكتشف المزيد
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
