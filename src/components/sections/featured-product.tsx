import { Settings2, Layers, ShieldCheck, DollarSign, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FeaturedProduct() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');
  
  const features = [
    { name: "BoM - شجرة المواد", icon: Layers },
    { name: "جدولة الإنتاج", icon: Settings2 },
    { name: "مراقبة الجودة", icon: ShieldCheck },
    { name: "حساب التكاليف", icon: DollarSign },
    { name: "إدارة التعاقد", icon: FileText },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-primary to-accent"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6">منتج مميز</div>
              <h2 className="text-4xl font-bold font-headline mb-6">نظام التصنيع المتكامل</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                حل تقني متقدم مصمم لإدارة عمليات التصنيع من الألف إلى الياء، يضمن لك الكفاءة التشغيلية والدقة في التخطيط والتحكم الكامل في الجودة والتكاليف.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{f.name}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-primary w-full sm:w-auto">
                طلب ديمو للنظام
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-white/20 font-headline font-bold text-6xl md:text-8xl rotate-12">SHANAN</div>
                <div className="absolute inset-0 flex items-center justify-center">
                   {logo && (
                     <div className="relative w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                       <Image 
                         src={logo.imageUrl} 
                         alt="نظام التصنيع" 
                         fill
                         className="object-cover"
                         data-ai-hint="industrial software"
                       />
                     </div>
                   )}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/20 shadow-xl hidden md:block">
                <div className="text-primary font-bold text-2xl mb-1">+40%</div>
                <div className="text-sm text-muted-foreground">زيادة في كفاءة الإنتاج</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
