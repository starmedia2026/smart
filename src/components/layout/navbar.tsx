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

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-lg py-2 border-white/10" 
        : "bg-background/40 backdrop-blur-sm py-4 border-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Right Side: Logo & Name (Reversed order as requested) */}
        <Link href="/" className="flex items-center gap-3 group">
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
          <div className="flex flex-col items-start">
            <span className="text-lg md:text-xl font-bold font-headline leading-tight tracking-tight text-foreground">شانان سمارات</span>
            <span className="text-[10px] font-medium opacity-60 uppercase tracking-widest text-primary">SHANAN SMART</span>
          </div>
        </Link>

        {/* Left Side: 2 Action Icons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-11 h-11 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-11 h-11 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
