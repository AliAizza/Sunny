import './globals.css'
import Hero from '@/components/Hero/Hero';
import Sec from '@/components/Sec/Sec';
import Services from '@/components/Services/Services';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';

import egg from '/public/assets/desktop/image-transform.jpg';
import glass from '/public/assets/desktop/image-stand-out.jpg';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sec
      dir="row"
      title="Transform your brand"
      paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      image={egg}
      />
      <Sec
      dir="rev"
      title="Stand out to the right audience"
      paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
      image={glass}
      />
      <Services />
      <Reviews />
      <section className='grid grid-cols-4 h-27.9375rem small:grid-cols-2 small:h-23.5rem'>
        <div className='bg-milkBackground bg-cover bg-center w-full h-full small:bg-mobilemilkBackground'></div>
        <div className='bg-orangeeBackground bg-cover bg-center w-full h-full small:bg-mobileorangeeBackground'></div>
        <div className='bg-coneBackground bg-cover bg-center w-full h-full small:bg-mobileconeBackground'></div>
        <div className='bg-sugarBackground bg-cover bg-center w-full h-full small:bg-mobilesugarBackground'></div>
      </section>
      <Footer />
    </main>
  );
}
