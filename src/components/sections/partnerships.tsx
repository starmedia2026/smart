
'use client';

import Image from 'next/image';
import { Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Partnerships() {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

  if (partners.length === 0) return null;

  return (
    <section id="partners" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        {/* Header matching the image style */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="w-8 h-8 text-primary/60" />
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-[#234E94]">شركاء النجاح</h2>
            <Users className="w-8 h-8 text-primary/60" />
          </div>
          <p className="text-muted-foreground text-xl font-medium">
            شركاء النجاح الذين يثقون بخدماتنا
          </p>
        </div>
        
        {/* Logos Grid with Card style from the image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}`} 
              className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center aspect-square group hover:-translate-y-2 transition-all duration-300 border border-slate-100"
            >
              <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={partner.imageUrl}
                  alt={partner.description}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
