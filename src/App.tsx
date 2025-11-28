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
import { SearchResults } from './components/SearchResults';
import { PropertyDetails } from './components/PropertyDetails';
import { Checkout } from './components/Checkout';
import { PurchaseSuccess } from './components/PurchaseSuccess';
import type { Property } from './components/SearchResults';

type ViewState = 'home' | 'login' | 'search' | 'details' | 'checkout' | 'success';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('details');
  };

  const resetToHome = () => {
    setCurrentView('home');
    setSelectedProperty(null);
  };

  // Login Screen
  if (currentView === 'login') {
    return <LoginScreen onBackToSite={resetToHome} />;
  }

  // Search Results
  if (currentView === 'search') {
    return (
      <SearchResults
        onBack={resetToHome}
        onSelectProperty={handlePropertySelect}
      />
    );
  }

  // Property Details
  if (currentView === 'details' && selectedProperty) {
    return (
      <PropertyDetails
        property={selectedProperty}
        onBack={() => setCurrentView('search')}
        onBuyClick={() => setCurrentView('checkout')}
      />
    );
  }

  // Checkout
  if (currentView === 'checkout' && selectedProperty) {
    return (
      <Checkout
        property={selectedProperty}
        onBack={() => setCurrentView('details')}
        onComplete={() => setCurrentView('success')}
      />
    );
  }

  // Purchase Success
  if (currentView === 'success' && selectedProperty) {
    return (
      <PurchaseSuccess
        property={selectedProperty}
        onBackToHome={resetToHome}
      />
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-white">
      <Navigation onLoginClick={() => setCurrentView('login')} />
      <Hero onSearch={() => setCurrentView('search')} />
      <PropertyListing onViewAll={() => setCurrentView('search')} />
      <SmartMap />
      <Objectives />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
