'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Languages } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 rounded-2xl glass border-white/10 hover:bg-white/10 text-white"
          >
            <Menu className="w-6 h-6" />
          </Button>

          <Button 
            variant="ghost" 
            className="h-12 px-4 rounded-2xl glass border-white/10 hover:bg-white/10 text-white flex items-center gap-2 font-medium"
          >
            <span className="text-sm">EN</span>
            <Languages className="w-4 h-4" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-12 h-12 rounded-2xl glass border-white/10 hover:bg-white/10 text-white"
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        </div>

        {/* Right Side: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col items-end text-white">
            <span className="text-lg font-bold font-headline leading-tight tracking-tight">شانان سمارات</span>
            <span className="text-[10px] font-medium opacity-70 uppercase tracking-wider">SHANAN SMART</span>
          </div>
          {logo && (
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
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
