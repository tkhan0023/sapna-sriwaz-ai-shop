
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductHighlights from '@/components/ProductHighlights';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductHighlights />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
