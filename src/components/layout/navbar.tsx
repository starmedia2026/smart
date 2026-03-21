'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <nav className={cn(
      "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0",
      isScrolled ? "top-2" : "top-4"
    )}>
      <div className={cn(
        "container mx-auto max-w-6xl rounded-[2rem] transition-all duration-500 shadow-2xl py-3 px-6 flex items-center justify-between border",
        theme === 'light' 
          ? "bg-white/80 border-black/10 backdrop-blur-xl shadow-black/5" 
          : "bg-background/40 border-white/10 backdrop-blur-lg"
      )}>
        {/* Left Side: Actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-10 h-10 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        </div>

        {/* Right Side: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col items-end">
            <span className="text-base md:text-lg font-bold font-headline leading-tight tracking-tight text-foreground">شانان سمارات</span>
            <span className="text-[9px] font-medium opacity-60 uppercase tracking-widest text-primary">SHANAN SMART</span>
          </div>
          {logo && (
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-lg group-hover:scale-105 transition-transform">
              <Image 
                src={logo.imageUrl} 
                alt="Logo" 
                fill
                className="object-cover"
              />
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}
