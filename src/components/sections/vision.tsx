import { Eye, Target, Sparkles } from 'lucide-react';

export function VisionMission() {
  const items = [
    {
      title: "رؤيتنا",
      desc: "أن نكون القائد الأول في مجال الابتكار الرقمي على مستوى المنطقة، مُمكّنين الشركات من تجاوز حدود الممكن.",
      icon: Eye,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "رسالتنا",
      desc: "تقديم حلول برمجية متطورة تلبي احتياجات عملائنا بدقة واحترافية، مع التركيز على الجودة والنمو المستدام.",
      icon: Target,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "قيمنا",
      desc: "الشفافية، الابتكار، والالتزام بالتميز في كل كود نكتبه، وبناء علاقات شراكة طويلة الأمد مع عملائنا.",
      icon: Sparkles,
      color: "from-indigo-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className={`glass-card p-10 rounded-2xl relative overflow-hidden group`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <item.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
