'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Home, Info, Settings2, LayoutGrid, Handshake } from 'lucide-react';
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
    { title: "شركاؤنا", href: "#partners", icon: Handshake },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-lg py-2 border-b border-white/10" 
        : "bg-background/40 backdrop-blur-sm py-4 border-b border-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Actions */}
        <div className="flex items-center gap-3">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-11 h-11 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%] max-w-[320px] bg-black/70 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 outline-none">
              <div className="sr-only">
                <DialogTitle>القائمة الرئيسية</DialogTitle>
              </div>
              
              <div className="flex flex-col gap-6 w-full">
                {menuLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-5 group transition-all w-full justify-between"
                  >
                    <span className="text-xl font-bold text-white group-hover:text-primary transition-colors font-headline">
                      {link.title}
                    </span>
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-4 border-white/20 shrink-0">
                      <link.icon className="w-6 h-6 text-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="w-11 h-11 rounded-xl hover:bg-primary/10 text-foreground transition-colors"
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        </div>

        {/* Right Side: Reversed Name & Logo (Text first on right, then Logo) */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex flex-col items-end text-right">
            <span className="text-xl md:text-2xl font-bold font-headline leading-tight tracking-tight text-foreground">شانان سمارات</span>
            <span className="text-[10px] font-medium opacity-60 uppercase tracking-widest text-primary">SHANAN SMART</span>
          </div>
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
        </Link>
      </div>
    </nav>
  );
}
