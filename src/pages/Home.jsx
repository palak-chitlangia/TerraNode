import Header from '../components/headerSec/header';
import Hero from '../components/Hero/Hero';
import TrustStrip from '../components/TrustStrip/TrustStrip';
import PainPoints from '../components/PainPoints/PainPoints';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Pricing from '../components/Pricing/Pricing';
import Integrations from '../components/Integrations/Integrations';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/footerSec/footer';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PainPoints />
        <HowItWorks />
        <Pricing />
        <Integrations />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
