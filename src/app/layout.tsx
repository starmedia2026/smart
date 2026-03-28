import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'شانان سمارت | SHANAN SMART',
  description: 'شريكك التقني في رحلة التحول الرقمي - حلول برمجية مبتكرة',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Favicons */}
        <link rel="shortcut icon" href="https://i.postimg.cc/t41FxxDT/IMG-20260318-WA0005(1).jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="https://i.postimg.cc/t41FxxDT/IMG-20260318-WA0005(1).jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="https://i.postimg.cc/t41FxxDT/IMG-20260318-WA0005(1).jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.postimg.cc/t41FxxDT/IMG-20260318-WA0005(1).jpg" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
