// App.js
import Header from './components/Header';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import VideoGallery from './components/VideoGallery';
function App() {
  return (
    <div className="relative mt-2 ml-2 mr-2 md:ml-20 md:mr-20">
      <Header />
      <SearchBar />
      <Home />
      <VideoGallery />
      <Footer />
      <MenuBar />
    </div>
  );
}

export default App;
