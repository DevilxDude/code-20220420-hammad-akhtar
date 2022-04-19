import AboutSection from 'container/AboutSection';
import ExploreSection from 'container/ExploreSection';
import Footer from 'container/Footer';
import Header from 'container/Header';
import HeroSection from 'container/HeroSection';
import 'styles/global.scss';

function App() {
  return (
    <div id="app">
      <Header />
      <HeroSection />
      <ExploreSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
