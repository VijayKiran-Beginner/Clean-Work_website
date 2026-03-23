import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthContext, AuthProvider } from './AuthContext';
import Home from './Home';
import Contact from './Contact';
import About from './aboutus';
import Navbar from './Navbar';
import Div1 from './div1';
import Div2 from './div2';
import Div3 from './div3';
import Div4 from './div4';
import Div5 from './div5';
import Div6 from './div6';
import Footer from './div7';
import Services from './services';
import GetStarted from './GetStarted';
import OfficeCleaningForm from './OfficeCleaningForm';
import CarWashingForm from './CarWashingForm';
import FactoryCleaningForm from './FactoryCleaningForm';
import KitchenCleaningForm from './KitchenCleaningForm';
import BookingDetails from './BookingDetails';
import Introduction from './introduction';

function ProtectedRoute() {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  if (!isLoggedIn) {
    console.log('ProtectedRoute: Redirecting to /getstarted from', location.pathname);
    return <Navigate to="/getstarted" state={{ from: location }} replace />;
  }

  return <Outlet />;
  
}

function Layout() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isAboutPage = path === '/about' || path === '/pages';

  return (
    <>
      {/* Always visible headers */}
      <Div1 />
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Navigate to="/getstarted" replace />} />
        <Route path="/home" element={
          <>
            <Div2 />
            <Div3 />
            <Div4 />
            <Div5 />
            <Div6 />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/introduction" element={<Introduction />} />
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/services" element={<Services />} />
          <Route path="/booking/office-cleaning" element={<OfficeCleaningForm />} />
          <Route path="/booking/car-washing" element={<CarWashingForm />} />
          <Route path="/booking/factory-cleaning" element={<FactoryCleaningForm />} />
          <Route path="/booking/kitchen-cleaning" element={<KitchenCleaningForm />} />
          <Route path="/booking-details" element={<BookingDetails />} />
        </Route>
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    console.log('App: Clearing bookings on app start');
    localStorage.setItem('bookings', JSON.stringify([]));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;