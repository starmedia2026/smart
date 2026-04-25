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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default is light, no class 'dark' added
      setTheme('light');
      document.documentElement.classList.remove('dark');
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
        ? "bg-background/80 backdrop-blur-md shadow-lg py-2 border-b border-border/50" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Right Side: Name & Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {logo && (
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-border bg-card shadow-sm group-hover:scale-105 transition-transform">
              <Image 
                src={logo.imageUrl} 
                alt="Logo" 
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col items-start">
            <span className="text-lg md:text-xl font-bold font-headline leading-tight tracking-tight text-foreground">شانان سمارت</span>
            <span className="text-[9px] font-medium opacity-60 uppercase tracking-widest text-primary">SHANAN SMART</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className="text-[0.95rem] font-bold text-foreground/80 hover:text-primary transition-all font-headline relative group py-1"
            >
              {link.title}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Left Side: Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
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
                  className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-[320px] bg-background/95 backdrop-blur-xl border border-border rounded-[2rem] p-8 flex flex-col items-center justify-center shadow-2xl animate-in zoom-in-95 duration-300 outline-none">
                <div className="sr-only">
                  <DialogTitle>القائمة الرئيسية</DialogTitle>
                </div>
                
                <div className="flex flex-col gap-4 w-full">
                  {menuLinks.map((link, idx) => (
                    <Link 
                      key={idx} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 group transition-all w-full p-3 rounded-2xl hover:bg-primary/5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all shrink-0">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-headline">
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-10 h-10 rounded-full bg-muted hover:bg-destructive/10 hover:text-destructive transition-all"
                >
                  <X className="w-5 h-5" />
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
}
