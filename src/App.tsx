import AboutSection from 'container/AboutSection';
import ExploreSection from 'container/ExploreSection';
import Footer from 'container/Footer';
import Header from 'container/Header';
import 'styles/global.scss';

function App() {
  return (
    <div id="app">
      <Header />
      <ExploreSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
