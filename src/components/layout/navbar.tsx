import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-xl font-headline font-bold text-white tracking-tight leading-none">شانان سمارات</span>
            <div className="h-6 w-24 bg-primary/20 rounded border border-primary/30 flex items-center justify-center mt-1">
              <span className="text-[10px] text-primary-foreground font-medium uppercase tracking-widest">LOGO</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">الرئيسية</Link>
            <Link href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">خدماتنا</Link>
            <Link href="#products" className="text-sm font-medium text-white/80 hover:text-white transition-colors">منتجاتنا</Link>
            <Link href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">من نحن</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
          <Button className="hidden md:flex btn-primary">تواصل معنا</Button>
        </div>
      </div>
    </nav>
  );
}
