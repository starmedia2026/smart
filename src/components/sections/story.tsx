
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Story() {
  const storyImage = PlaceHolderImages.find(img => img.id === 'story-image');
  
  const points = [
    "فريق تقني خبير",
    "دعم فني 24/7",
    "أحدث تقنيات",
    "حلول مخصصة"
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side - Order 1 on mobile (Top), Order 2 on desktop (Left in RTL) */}
          <div className="order-1 lg:order-2 relative h-[350px] md:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
             {storyImage && (
               <Image 
                 src={storyImage.imageUrl}
                 alt="البرمجة في شانان سمارت"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
             )}
             {/* Overlay Gradient for depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
          </div>

          {/* Text Side - Order 2 on mobile (Bottom), Order 1 on desktop (Right in RTL) */}
          <div className="order-2 lg:order-1 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              قصتنا ورؤيتنا
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8 leading-relaxed">
              نحن لا نطور برمجيات فحسب، بل نصنع <span className="text-gradient">مستقبلاً رقمياً</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              في شانان سمارت، نؤمن بأن كل شركة تستحق أن تكون في القمة. رحلتنا بدأت بشغف تحويل التحديات المعقدة إلى واجهات بسيطة وحلول فعالة تضع عملاءنا في طليعة المنافسة. ندمج بين الذكاء البرمجي واللمسة الإبداعية لنبني منصات تدوم وتتطور.
            </p>
            <div className="flex items-center gap-3 text-primary font-bold text-lg">
              <span className="w-12 h-px bg-primary/50"></span>
              نبتكر لنغير الواقع الرقمي
            </div>
          </div>
        </div>

        {/* Feature Points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform shadow-xl">
              <div className="w-16 h-16 rounded-[1.25rem] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{point}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
