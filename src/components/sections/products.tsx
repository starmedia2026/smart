import { Building2, Gavel, Users, BarChart3, Factory, Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Products() {
  const products = [
    { title: "النظام المالي", icon: BarChart3 },
    { title: "الموارد البشرية", icon: Users },
    { title: "النظام العقاري", icon: Building2 },
    { title: "نظام المحاماة", icon: Gavel },
    { title: "الخدمة الميدانية", icon: Truck },
    { title: "نظام التصنيع", icon: Factory },
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">أنظمتنا الذكية</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">حلول برمجية جاهزة وقابلة للتخصيص لمختلف القطاعات الحيوية.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {products.map((product, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group">
              <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="font-bold text-lg">{product.title}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild className="btn-primary px-10 py-8 text-xl rounded-2xl shadow-xl shadow-primary/20 group">
            <a 
              href="https://wa.me/967770326828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              اطلب نسخة تجريبية
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
