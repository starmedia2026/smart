
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * @fileOverview قسم شركاء النجاح بتصميم الشريط المتحرك (Marquee).
 * يعرض الشعارات في سطر واحد بحركة انسيابية مستمرة.
 */

export function Partnerships() {
  // معرفات الصور المحددة من قبل المستخدم
  const partnerIds = [
    'partner-alwadi', 
    'partner-adn', 
    'partner-star', 
    'partner-asala', 
    'partner-saa'
  ];
  
  // تكرار المصفوفة لضمان حركة مستمرة وسلسة في الشريط
  const extendedPartners = [...partnerIds, ...partnerIds, ...partnerIds, ...partnerIds];

  return (
    <section id="partners" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="h-px flex-1 max-w-[100px] bg-[#234E94]/20 hidden md:block" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-[#234E94] text-center flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#234E94] animate-pulse" />
            شركاء النجاح
            <span className="w-2 h-2 rounded-full bg-[#234E94] animate-pulse" />
          </h2>
          <div className="h-px flex-1 max-w-[100px] bg-[#234E94]/20 hidden md:block" />
        </div>
      </div>

      {/* شريط الماركي المتحرك */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-8 whitespace-nowrap px-4 py-4">
          {extendedPartners.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            return (
              <div 
                key={`${id}-${idx}`} 
                className="bg-white min-w-[200px] md:min-w-[240px] h-[140px] md:h-[160px] rounded-3xl p-8 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group relative shrink-0"
              >
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105">
                  {img && (
                    <Image 
                      src={img.imageUrl} 
                      alt={img.description} 
                      fill 
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
