
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Partnerships() {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  
  // مضاعفة المصفوفة لضمان استمرارية الحركة بدون انقطاع
  const scrollingPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-24 overflow-hidden bg-muted/10">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">شركاء النجاح</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-xl mx-auto">نفخر بالعمل مع نخبة من الشركاء الذين وضعوا ثقتهم في حلولنا التقنية.</p>
      </div>
      
      <div className="relative group">
        {/* تدرجات جانبية لإخفاء حواف الدخول والخروج بشكل ناعم */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* حاوية الشعارات المتحركة */}
        <div className="flex items-center">
          <div className="flex gap-16 items-center animate-marquee whitespace-nowrap py-10">
            {scrollingPartners.map((partner, idx) => (
              <div 
                key={`${partner.id}-${idx}`} 
                className="relative w-48 h-28 flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110"
              >
                <div className="relative w-full h-full grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500">
                  <Image
                    src={partner.imageUrl}
                    alt={partner.description}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
