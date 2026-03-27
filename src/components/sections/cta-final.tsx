import { Button } from '@/components/ui/button';

export function CTAFinal() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-primary/80 to-accent/80 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">هل تبحث عن حل مخصص؟</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              فريقنا من الخبراء جاهز لمناقشة أفكارك وتحويلها إلى واقع رقمي مبهر يخدم أهدافك.
            </p>
            <Button asChild className="bg-white text-primary px-10 py-7 text-xl rounded-2xl font-bold hover:bg-white/90 transition-all flex items-center mx-auto shadow-2xl active:scale-95 border-none">
              <a 
                href="https://wa.me/967770326828" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                تواصل معنا عبر الواتساب
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
