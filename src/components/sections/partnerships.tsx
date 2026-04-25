
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * @fileOverview قسم شركاء النجاح بتصميم الشريط المتحرك (Marquee).
 * يعرض الشعارات في سطر واحد بحركة انسيابية مستمرة.
 */

export function Partnerships() {
  // معرفات الصور المحددة في ملف placeholder-images.json
  const partnerIds = [
    'partner-alwadi', 
    'partner-adn', 
    'partner-star', 
    'partner-asala', 
    'partner-saa'
  ];
  
  // تكرار المصفوفة لضمان حركة مستمرة وسلسة في الشريط تغطي عرض الشاشة بالكامل
  const extendedPartners = [...partnerIds, ...partnerIds, ...partnerIds, ...partnerIds, ...partnerIds];

  return (
    <section id="partners" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-center gap-6">
          {/* الخط الجانبي - يتغير لونه في الوضع الداكن */}
          <div className="h-px flex-1 max-w-[100px] bg-foreground/20 hidden md:block" />
          
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground text-center flex items-center gap-4">
            {/* النقطة النابضة يمين - تتغير في الوضع الداكن */}
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            شركاء النجاح
            {/* النقطة النابضة يسار - تتغير في الوضع الداكن */}
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          </h2>
          
          {/* الخط الجانبي - يتغير لونه في الوضع الداكن */}
          <div className="h-px flex-1 max-w-[100px] bg-foreground/20 hidden md:block" />
        </div>
      </div>

      {/* شريط الماركي المتحرك */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee gap-8 whitespace-nowrap px-4 py-4">
          {extendedPartners.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            
            // إذا لم تتوفر الصورة، لا نعرض البطاقة لتجنب المساحات الفارغة
            if (!img) return null;

            return (
              <div 
                key={`${id}-${idx}`} 
                className="bg-white dark:bg-white/10 dark:backdrop-blur-md min-w-[200px] md:min-w-[240px] h-[140px] md:h-[160px] rounded-3xl p-8 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 dark:border-white/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 relative shrink-0"
              >
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-contain dark:brightness-200 dark:contrast-125 transition-all"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        /* توقف الحركة عند التمرير لمشاهدة الشعارات بوضوح */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        
        [dir="rtl"] .animate-marquee {
          animation: marquee-rtl 30s linear infinite;
        }

        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </section>
  );
}
