
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';


/**
 * @fileOverview قسم شركاء النجاح بتصميم الشريط المتحرك (Marquee).
 * تم تحديثه ليدعم الوضع الداكن بألوان بيضاء واضحة.
 */

export function Partnerships() {
  const partnerIds = [
    'partner-alwadi', 
    'partner-adn', 
    'partner-star', 
    'partner-asala', 
    'partner-saa'
  ];
  
  const extendedPartners = [...partnerIds, ...partnerIds, ...partnerIds, ...partnerIds];

  return (
    <section id="partners" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="h-px flex-1 max-w-[100px] bg-foreground/20 hidden md:block" />
          
          <div className="text-center">
  <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground flex items-center justify-center gap-4">
    <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-2" />
    شركاء النجاح
    <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
  </h2>

  <p className="text-sm md:text-base text-foreground/60 mt-3">
    نفتخر بشراكتنا مع نخبة من الجهات التي ساهمت في نجاحنا
  </p>
</div>
          
          <div className="h-px flex-1 max-w-[100px] bg-foreground/20 hidden md:block" />
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee gap-8 whitespace-nowrap px-4 py-4">
          {extendedPartners.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            if (!img) return null;

            return (
              <div 
                key={`${id}-${idx}`} 
                className="bg-white dark:bg-white backdrop-blur-md min-w-[200px] md:min-w-[240px] h-[140px] md:h-[160px] rounded-3xl p-8 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 dark:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 relative shrink-0 group"
              >
<div className="relative w-full h-full scale-150 group-hover:scale-155 transition-transform duration-500">                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-contain"
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
          animation: marquee 80s linear infinite;
        }
      
        [dir="rtl"] .animate-marquee {
          animation: marquee-rtl 40s linear infinite;
        }

        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

      `}</style>
    </section>
  );
}