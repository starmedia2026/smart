
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
        {/* Header with specific styling and icons */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Users className="w-10 h-10 text-[#234E94]/40" />
            <h2 className="text-4xl md:text-6xl font-bold font-headline text-[#234E94] tracking-tight">شركاء النجاح</h2>
            <Users className="w-10 h-10 text-[#234E94]/40" />
          </div>
          <div className="w-24 h-1.5 bg-[#234E94]/20 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-xl font-medium">
            نعتز بثقتهم ونفخر بكوننا جزءاً من رحلتهم نحو التميز الرقمي
          </p>
        </div>
        
        {/* Logos Grid with polished white cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {partners.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}`} 
              className="group bg-white rounded-[2.5rem] p-10 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.08)] flex items-center justify-center aspect-square transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(35,78,148,0.15)] border border-slate-50"
            >
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
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
    </section>
  );
}
