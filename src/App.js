import Header from './components/Header';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import VideoGallery from './components/VideoGallery';
import NewsletterSection from './components/NewsletterSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="relative mt-2 md:ml-20 md:mr-20">
        <Header />
        <LanguageSwitcher />
        <SearchBar />
        <Home />
        <VideoGallery />
        <NewsletterSection />
        <Footer />
        <MenuBar />
      </div>
    </LanguageProvider>
  );
}

export default App;
