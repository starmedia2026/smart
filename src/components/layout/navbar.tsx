'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const menuLinks = [
    { title: "الرئيسية", href: "/" },
    { title: "من نحن", href: "#about" },
    { title: "خدماتنا", href: "#services" },
    { title: "منتجاتنا", href: "#products" },
    { title: "شركاؤنا", href: "#partners" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-lg py-2 border-white/10" 
        : "bg-background/40 backdrop-blur-sm py-4 border-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Right Side: Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col items-start text-right">
            <span className="text-lg md:text-xl font-bold font-headline leading-tight tracking-tight text-foreground">شانان سمارات</span>
            <span className="text-[10px] font-medium opacity-60 uppercase tracking-widest text-primary">SHANAN SMART</span>
          </div>
          {logo && (
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-lg group-hover:scale-105 transition-transform">
              <Image 
                src={logo.imageUrl} 
                alt="Logo" 
                fill
                className="object-cover"
              />
            </div>
          )}
        </Link>

        {/* Left Side: Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-11 h-11 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-11 h-11 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[220px] glass border-r border-white/10 p-0 overflow-hidden flex flex-col">
              <div className="flex-1 flex flex-col justify-center p-4 gap-1">
                {menuLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-6 py-4 rounded-xl text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all group"
                  >
                    <span className="font-headline">{link.title}</span>
                    <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 bg-primary/5 text-center">
                <p className="text-[8px] text-muted-foreground font-medium uppercase tracking-widest">شانان سمارات 2026</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
