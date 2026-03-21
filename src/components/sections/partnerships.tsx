export function Partnerships() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl font-bold text-muted-foreground mb-12 uppercase tracking-[0.2em]">تحالفات عالمية طموحة</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for logos */}
           <div className="text-3xl font-headline font-bold text-foreground">TECH_CORP</div>
           <div className="text-3xl font-headline font-bold text-foreground">CLOUD_X</div>
           <div className="text-3xl font-headline font-bold text-foreground">GLOBAL_SOFT</div>
           <div className="text-3xl font-headline font-bold text-foreground">NEXUS_SYSTEMS</div>
           <div className="text-3xl font-headline font-bold text-foreground">INNO_TECH</div>
        </div>
      </div>
    </section>
  );
}
