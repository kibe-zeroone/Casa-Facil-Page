import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PropertyListing } from './components/PropertyListing';
import { SmartMap } from './components/SmartMap';
import { Objectives } from './components/Objectives';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LoginScreen } from './components/login-screen';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <LoginScreen onBackToSite={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <PropertyListing />
      <SmartMap />
      <Objectives />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}