
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { IntroCode } from '@/components/sections/intro-code';
import { Story } from '@/components/sections/story';
import { VisionMission } from '@/components/sections/vision';
import { Services } from '@/components/sections/services';
import { Products } from '@/components/sections/products';
import { CTAFinal } from '@/components/sections/cta-final';
import { Partnerships } from '@/components/sections/partnerships';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <IntroCode />
        <Story />
        <VisionMission />
        <Services />
        <Products />
        <CTAFinal />
        <Partnerships />
      </main>
      <Footer />
    </div>
  );
}
