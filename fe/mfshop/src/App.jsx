import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import Home from './components/Home';
import FooterComponent from './components/FooterComponent';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyProfile from './components/MyProfile';
import History from './components/History';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!isSignInPage && <HeaderComponent currentPage="home" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myhistory" element={<History />} />
      </Routes>
      {!isSignInPage && <FooterComponent />}
    </>
  );
}

export default App;
