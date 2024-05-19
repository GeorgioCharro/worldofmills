import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import VideoGallery from './components/VideoGallery';
import NewsletterSection from './components/NewsletterSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Menu from './pages/Menu';

function App() {
  const searchBarRef = useRef(null);
  const headerSearchOpenRef = useRef(null);

  return (
    <LanguageProvider>
      <Router>
        <Header setSearchOpenRef={headerSearchOpenRef} />
        <SearchBar ref={searchBarRef} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LanguageSwitcher />
                <Home
                  searchBarRef={searchBarRef}
                  headerSearchOpenRef={headerSearchOpenRef}
                />
                <VideoGallery />
                <NewsletterSection />
                <Footer />
                <MenuBar />
              </>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <ToastContainer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
