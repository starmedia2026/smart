'use client';

import { ArrowLeft, Rocket, ShieldCheck, Laptop, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  return (
    <section className="relative pt-44 pb-32 overflow-hidden flex flex-col items-center">
      {/* Background Effects */}
      <div className="absolute top-0 inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Floating Badges and Central Card Area */}
        <div className="relative w-full max-w-2xl mb-24 flex flex-col items-center">
          {/* Top Badge: 99% Performance */}
          <div className="absolute -top-16 -right-8 z-20 glass-card p-4 rounded-3xl border-white/10 flex items-center gap-3 shadow-2xl animate-bounce-slow">
            <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <Rocket className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-lg font-bold text-foreground leading-none">99%</span>
              <span className="text-[9px] text-muted-foreground font-medium mt-1">أداء فائق الاستجابة</span>
            </div>
          </div>

          {/* Central Layered Card */}
          <div className="relative w-96 h-[28rem] glass-card rounded-[5rem] border-white/10 flex flex-col items-center justify-center p-12 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-10 left-10 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
              <Laptop className="w-8 h-8" />
            </div>

            <div className="w-40 h-40 rounded-[3.5rem] bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 mb-10 group-hover:scale-110 transition-transform duration-500 overflow-hidden relative">
              {logo ? (
                <Image 
                  src={logo.imageUrl} 
                  alt="Logo" 
                  fill
                  className="object-cover"
                />
              ) : (
                <Code2 className="w-20 h-20 text-white" />
              )}
            </div>

            <h3 className="text-4xl font-bold mb-4 text-foreground text-center">شانان سمارت</h3>
            <p className="text-lg text-muted-foreground text-center">بوابتك إلى المستقبل الرقمي</p>

            <div className="absolute bottom-10 right-10 w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
              <ShieldCheck className="w-7 h-7" />
            </div>
          </div>

          {/* Code Snippet Card (Bottom Left) */}
          <div className="absolute -bottom-8 -left-32 z-20 glass-card p-5 rounded-3xl border-white/10 shadow-2xl w-64 hidden lg:block animate-float">
            <div className="flex gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <pre className="font-mono text-[10px] leading-relaxed">
              <code className="text-primary">const</code> <code className="text-foreground">solution</code> = () ={` > {`}
              <br />
              &nbsp;&nbsp;growth: <code className="text-green-500">true</code>,
              <br />
              &nbsp;&nbsp;innovation: <code className="text-accent">"unlimited"</code>,
              <br />
              &nbsp;&nbsp;success: <code className="text-primary">"guaranteed"</code>
              <br />
              {`};`}
            </pre>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl animate-slide-up">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border-white/10 text-primary font-medium text-sm mb-12">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>شريكك التقني في رحلة التحول الرقمي</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 font-headline tracking-tight text-foreground">
            نصمم <br />
            <span className="text-gradient">الحلول الذكية</span> <br />
            لتمكين أعمالك
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Button asChild className="btn-primary px-10 py-8 text-xl rounded-3xl shadow-xl shadow-primary/20">
              <a href="#intro">
                ابدأ رحلتك الآن
                <ArrowLeft className="w-6 h-6 mr-3" />
              </a>
            </Button>
            <Button variant="outline" asChild className="btn-outline px-10 py-8 text-xl rounded-3xl border-white/10 glass shadow-xl hover:bg-muted">
              <a href="#products">استكشف أعمالنا</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
