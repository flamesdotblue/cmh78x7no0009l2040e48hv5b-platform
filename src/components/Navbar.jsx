import React from 'react';
import { Home, Building2, Users, LogIn, PlusCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 grid place-items-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Home size={18} />
          </div>
          <span className="font-bold text-xl tracking-tight">CampusStay</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#properties" className="text-gray-700 hover:text-gray-900 flex items-center gap-1"><Building2 size={16}/> Find Property</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center gap-1"><PlusCircle size={16}/> List Property</a>
          <a href="#roommate" className="text-gray-700 hover:text-gray-900 flex items-center gap-1"><Users size={16}/> Find Roommate</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-10 px-4 rounded-xl border bg-white hover:bg-gray-50 text-gray-800 transition-colors">Login</button>
          <button className="inline-flex h-10 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-sm hover:shadow-blue-600/20 hover:brightness-110 transition-all">
            <LogIn size={16} className="mr-2"/> Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
