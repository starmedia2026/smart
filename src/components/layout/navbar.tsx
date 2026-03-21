'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            {logo && (
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-primary/20 bg-background/50">
                <Image 
                  src={logo.imageUrl} 
                  alt="شعار شانان سمارات" 
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col items-start">
              <span className="text-xl font-headline font-bold text-foreground tracking-tight leading-none">شانان سمارات</span>
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">SHANAN SMART</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">الرئيسية</Link>
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">خدماتنا</Link>
            <Link href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">منتجاتنا</Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">من نحن</Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full hover:bg-muted"
            title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-primary" />}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
          
          <Button className="hidden md:flex btn-primary">تواصل معنا</Button>
        </div>
      </div>
    </nav>
  );
}
