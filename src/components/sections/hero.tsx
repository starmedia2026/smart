import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          <h2 className="text-primary font-medium text-lg mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            شريكك التقني في رحلة التحول الرقمي
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-headline">
            نصمم الحلول الذكية <br />
            <span className="text-gradient">لتمكين أعمالك</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            نحن في نمو للبرمجيات نبتكر حلولاً برمجية متطورة تدمج بين الإبداع والتقنية لتحقيق أهدافك التجارية وضمان نمو مستدام في سوق متقلب.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary px-8 py-6 text-lg">
              ابدأ رحلتك الآن
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
            <Button variant="outline" className="btn-outline px-8 py-6 text-lg">
              استكشف أعمالنا
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
            <div>
              <div className="text-4xl font-bold text-white mb-1">+500</div>
              <div className="text-muted-foreground">مشروع منجز</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">+200</div>
              <div className="text-muted-foreground">عميل سعيد</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-muted-foreground">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
