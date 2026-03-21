import { CheckCircle2 } from 'lucide-react';

export function Story() {
  const points = [
    "فريق تقني خبير",
    "دعم فني 24/7",
    "أحدث تقنيات",
    "حلول مخصصة"
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">نحن لا نطور برمجيات فحسب، بل نصنع مستقبلاً رقمياً</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            في شانان سمارات، نؤمن بأن كل شركة تستحق أن تكون في القمة. رحلتنا بدأت بشغف تحويل التحديات المعقدة إلى واجهات بسيطة وحلول فعالة تضع عملاءنا في طليعة المنافسة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">{point}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
