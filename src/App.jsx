import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import PopularListings from './components/PopularListings';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <Categories />
        <PopularListings />
      </main>
      <footer className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-2xl font-bold tracking-tight">CampusStay</div>
            <p className="mt-2 text-sm text-gray-600">A modern, student-friendly rental platform to find trusted properties and roommates.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Explore</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#properties" className="hover:text-primary">Find Property</a></li>
              <li><a href="#roommate" className="hover:text-primary">Find Roommate</a></li>
              <li><a href="#" className="hover:text-primary">List Property</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <p className="text-sm text-gray-700">Questions? Reach us at support@campusstay.app</p>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center py-6">© {new Date().getFullYear()} CampusStay. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
