
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FieldServiceSection() {
  const mockup = PlaceHolderImages.find(img => img.id === 'field-service-mockup');
  
  const features = [
    "تطبيق الهاتف المحمول لجميع المستخدمين",
    "إدارة المهام بكفاءة",
    "التتبع في الوقت الحقيقي",
    "تفاعل العملاء وردود الفعل",
    "الفواتير الآلية"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Top Text Content */}
          <div className="w-full max-w-xl text-right mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F8F9] text-[#00B5AD] text-sm font-bold mb-8">
              منتج مميز
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-12 text-[#234E94] leading-tight">
              نظام الخدمة الميدانية
            </h2>
            
            <div className="space-y-6 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-start gap-4 group">
                  <div className="flex-1 text-lg md:text-xl font-bold text-[#4A5568] group-hover:text-[#234E94] transition-colors">
                    {feature}
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-[#00B5AD]/30 flex items-center justify-center text-[#00B5AD] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-[#234E94] hover:bg-[#1A3A6E] text-white px-10 py-8 text-xl rounded-2xl font-bold shadow-2xl shadow-[#234E94]/20 transition-all active:scale-95 w-full sm:w-auto">
              <a 
                href="https://wa.me/966531813787" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                طلب عرض سعر
              </a>
            </Button>
          </div>

          {/* Bottom Image Container */}
          {mockup && (
            <div className="relative w-full max-w-5xl aspect-[16/10] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 group">
              <Image 
                src={mockup.imageUrl}
                alt="Field Service System Mockup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="software dashboard"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
