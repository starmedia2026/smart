'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * @fileOverview قسم شركاء النجاح بتصميم البطاقات البيضاء والظلال الناعمة.
 * يتم عرضه قبل التذييل مباشرة وبجانب قسم CTA.
 */

export function Partnerships() {
  // معرفات الصور من ملف placeholder-images.json
  const partnerIds = ['partner-alwadi', 'partner-adn', 'partner-star', 'partner-asala', 'partner-saa'];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        {/* عنوان القسم مع خطوط جانبية أنيقة */}
        <div className="flex items-center justify-center gap-6 mb-20">
          <div className="h-px flex-1 max-w-[100px] bg-[#234E94]/20 hidden md:block" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-[#234E94] text-center flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#234E94] animate-pulse" />
            شركاء النجاح
            <span className="w-2 h-2 rounded-full bg-[#234E94] animate-pulse" />
          </h2>
          <div className="h-px flex-1 max-w-[100px] bg-[#234E94]/20 hidden md:block" />
        </div>

        {/* شبكة الشركاء ببطاقات بيضاء ناعمة */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {partnerIds.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            return (
              <div 
                key={idx} 
                className="bg-white rounded-[3rem] p-10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 group aspect-square relative overflow-hidden"
              >
                {/* تأثير خلفية بسيط عند التحويم */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                  {img && (
                    <Image 
                      src={img.imageUrl} 
                      alt="شريك نجاح شانان سمارت" 
                      fill 
                      className="object-contain p-2"
                      data-ai-hint="corporate logo"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
