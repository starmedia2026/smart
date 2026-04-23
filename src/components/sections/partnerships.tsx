
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Partnerships() {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  
  // Duplicate partners for infinite scroll effect
  const scrollingPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-24 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold font-headline mb-4">شركاء النجاح</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
      
      <div className="relative flex">
        {/* Marquee Container */}
        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
          {scrollingPartners.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}`} 
              className="relative w-40 h-24 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex-shrink-0"
            >
              <Image
                src={partner.imageUrl}
                alt={partner.description}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
