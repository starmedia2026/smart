import Link from 'next/link';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex flex-col items-start mb-6">
              <span className="text-2xl font-headline font-bold text-white tracking-tight">نمو للبرمجيات</span>
              <span className="text-xs text-primary font-medium tracking-widest uppercase mt-1">NOMOW SOFT</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              نبتكر حلولاً برمجية متطورة تدمج بين الإبداع والتقنية لتحقيق أهدافك التجارية وضمان نمو مستدام.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">من نحن</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">خدماتنا</Link></li>
              <li><Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">منتجاتنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                <a href="mailto:Info@nomowsoft.com">Info@nomowsoft.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span dir="ltr">+966 5071 40918</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span dir="ltr">+967 7746 12600</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">قانوني</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            صنع بكل <Heart className="w-4 h-4 text-red-500 fill-red-500" /> بواسطة فريق نمو للبرمجيات © 2025
          </p>
          <div className="flex items-center gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
