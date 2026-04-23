
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Heart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');
  const vatLogo = PlaceHolderImages.find(img => img.id === 'vat-logo');

  return (
    <footer className="bg-gradient-to-b from-primary to-accent pt-20 pb-10 relative overflow-hidden text-white">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      
      {/* Top glow separator line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-4 mb-6">
              {logo && (
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                  <Image 
                    src={logo.imageUrl} 
                    alt="Logo" 
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col items-start">
                <span className="text-2xl font-headline font-bold text-white tracking-tight">شانان سمارت</span>
                <span className="text-xs text-white/80 font-medium tracking-widest uppercase mt-1">SHANAN SMART</span>
              </div>
            </Link>
            <p className="text-white/90 leading-relaxed mb-6">
              نبتكر حلولاً برمجية متطورة تدمج بين الإبداع والتقنية لتحقيق أهدافك التجارية وضمان نمو مستدام.
            </p>

            {/* VAT Section */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl inline-flex items-center gap-4 shadow-lg group hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-white/70">الرقم الضريبي</span>
                <span dir="ltr" className="text-lg font-bold tracking-wider text-white">302070513600003</span>
              </div>
              {vatLogo && (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white p-1">
                  <Image 
                    src={vatLogo.imageUrl} 
                    alt="الرقم الضريبي" 
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xl">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="#about" className="text-white/80 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link href="#services" className="text-white/80 hover:text-white transition-colors">خدماتنا</Link></li>
              <li><Link href="#products" className="text-white/80 hover:text-white transition-colors">منتجاتنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xl">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/90 group">
                <Mail className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <a href="mailto:shanansmart1@gmail.com" className="hover:text-white transition-colors">shanansmart1@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/90 group">
                <Phone className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <span dir="ltr" className="group-hover:text-white transition-colors">+966 531813787</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 group">
                <Phone className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                <span dir="ltr" className="group-hover:text-white transition-colors">+966 550855456</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xl">قانوني</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/80 text-sm flex items-center gap-2">
            صنع بكل <Heart className="w-4 h-4 text-white fill-white animate-pulse" /> بواسطة فريق شانان سمارت © 2026
          </p>
          <div className="flex items-center gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
