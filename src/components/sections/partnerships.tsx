
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Partnerships() {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  
  // نكرر الشعارات لضمان وجود محتوى كافٍ للحركة المستمرة
  const scrollingPartners = [...partners, ...partners, ...partners, ...partners];

  if (partners.length === 0) return null;

  return (
    <section id="partners" className="py-24 overflow-hidden bg-muted/10">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">شركاء النجاح</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-xl mx-auto font-medium">نفخر بالعمل مع نخبة من الشركاء الذين وضعوا ثقتهم في حلولنا التقنية.</p>
      </div>
      
      <div className="relative w-full">
        {/* تدرجات جانبية لنعومة الدخول والخروج */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          <div className="flex gap-12 md:gap-20 items-center animate-marquee whitespace-nowrap py-4">
            {scrollingPartners.map((partner, idx) => (
              <div 
                key={`${partner.id}-${idx}`} 
                className="relative w-40 h-24 md:w-48 md:h-28 flex-shrink-0 flex items-center justify-center group"
              >
                <div className="relative w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
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
