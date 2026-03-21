import { Code2 } from 'lucide-react';

export function IntroCode() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-headline mb-6">بوابتك إلى المستقبل الرقمي</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              نحن نؤمن بأن الكود البرمجي هو اللغة التي تشكل مستقبلنا. في شانان سمارات، نستخدم أحدث التقنيات لنبني جسوراً بين تطلعاتك والواقع الرقمي الملموس.
            </p>
            <div className="flex items-center gap-4 text-primary font-medium">
              <Code2 className="w-6 h-6" />
              <span>تقنيات عالمية بمعايير محلية</span>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 font-mono text-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1 h-full bg-primary/50"></div>
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <pre className="text-white/90">
              <code>{`const solution = () => {
  return {
    growth: true,
    innovation: "unlimited",
    efficiency: "optimized",
    partnership: "eternal"
  };
};

// تنفيذ الحلول الذكية
const success = solution();
console.log(success.growth); // Output: true`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
