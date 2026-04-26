
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * @fileOverview قسم شركاء النجاح بتصميم الشريط المتحرك (Marquee).
 * تم تكبير الشعارات وإلغاء التوقف عند اللمس بناءً على طلب المستخدم.
 */

export function Partnerships() {
  const partnerIds = [
    'partner-alwadi', 
    'partner-adn', 
    'partner-star', 
    'partner-asala', 
    'partner-saa',
    'partner-alw',
    'partner-arbia',
    'partner-nabih',
    'partner-nzah'
  ];
  
  const extendedPartners = [...partnerIds, ...partnerIds, ...partnerIds, ...partnerIds];

  return (
    <section id="partners" className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="h-px flex-1 max-w-[100px] bg-foreground/20 dark:bg-white/20 hidden md:block" />
          
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground dark:text-white flex items-center justify-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-2" />
              شركاء النجاح
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            </h2>

            <p className="text-base md:text-lg text-foreground/60 dark:text-white/60 mt-3 font-medium">
              نفتخر بشراكتنا مع نخبة من الجهات التي ساهمت في نجاحنا
            </p>
          </div>
          
          <div className="h-px flex-1 max-w-[100px] bg-foreground/20 dark:bg-white/20 hidden md:block" />
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-10 whitespace-nowrap px-4 py-8">
          {extendedPartners.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            if (!img) return null;

            return (
              <div 
                key={`${id}-${idx}`} 
                className="bg-white dark:bg-white/5 backdrop-blur-md min-w-[280px] md:min-w-[340px] h-[180px] md:h-[220px] rounded-[2.5rem] p-10 flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-white/10 hover:border-primary/30 transition-all duration-500 relative shrink-0 group"
              >
                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                  <Image 
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
          animation: marquee-rtl 70s linear infinite;
        }

        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </section>
  );
}
