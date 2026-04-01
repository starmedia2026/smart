'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Home, Info, Settings2, LayoutGrid, X } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

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
    } else {
      document.documentElement.classList.add('dark');
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
    { title: "الرئيسية", href: "/", icon: Home },
    { title: "من نحن", href: "#about", icon: Info },
    { title: "خدماتنا", href: "#services", icon: Settings2 },
    { title: "منتجاتنا", href: "#products", icon: LayoutGrid },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-lg py-3 border-b border-white/10" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Right Side: Name & Logo */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          {logo && (
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl group-hover:scale-105 transition-transform">
              <Image 
                src={logo.imageUrl} 
                alt="Logo" 
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-bold font-headline leading-tight tracking-tight text-foreground">شانان سمارت</span>
            <span className="text-[10px] font-medium opacity-60 uppercase tracking-widest text-primary">SHANAN SMART</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Visible only on Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors font-headline"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Left Side: Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-12 h-12 rounded-2xl hover:bg-primary/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          {/* Hamburger Menu - Visible only on Mobile */}
          <div className="md:hidden">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-12 h-12 rounded-2xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all shadow-lg shadow-primary/5"
                >
                  <Menu className="w-7 h-7" />
                </Button>
              </DialogTrigger>
              <DialogContent className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[95%] max-w-[380px] bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center justify-center shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300 outline-none">
                <div className="sr-only">
                  <DialogTitle>القائمة الرئيسية</DialogTitle>
                </div>
                
                <div className="flex flex-col gap-8 w-full">
                  {menuLinks.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-6 group transition-all w-full"
                    >
                      <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all border-4 border-white/20 shrink-0">
                        <link.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-headline">
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="mt-12 w-14 h-14 rounded-full bg-white/5 hover:bg-red-500/20 text-white hover:text-red-500 transition-all"
                >
                  <X className="w-6 h-6" />
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
}
