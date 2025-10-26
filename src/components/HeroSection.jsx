import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, IndianRupee, Home, Search, ChevronRight, Users } from 'lucide-react';

const HeroSection = () => {
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');
  const [type, setType] = useState('Any');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ city, budget, type });
    const el = document.getElementById('properties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    console.log('Search:', params.toString());
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.15),transparent_40%)]"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs text-gray-700 bg-white/60 backdrop-blur">
            Trusted rentals for students
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Find your next campus home with ease
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Search verified hostels, PGs, and apartments near your college. Match with roommates who share your lifestyle.</p>
        </motion.div>

        <motion.form onSubmit={handleSearch} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1, duration:0.6}} className="mt-8 bg-white rounded-2xl shadow-lg shadow-gray-200/40 p-4 md:p-5 border">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="md:col-span-2 flex items-center gap-2 h-12 rounded-xl border px-3">
              <MapPin className="text-gray-500" size={18}/>
              <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="City or college" className="flex-1 outline-none placeholder:text-gray-400"/>
            </div>
            <div className="flex items-center gap-2 h-12 rounded-xl border px-3">
              <IndianRupee className="text-gray-500" size={18}/>
              <input value={budget} onChange={(e)=>setBudget(e.target.value)} type="number" min="0" placeholder="Max budget (₹/mo)" className="flex-1 outline-none placeholder:text-gray-400"/>
            </div>
            <div className="flex items-center gap-2 h-12 rounded-xl border px-3">
              <Home className="text-gray-500" size={18}/>
              <select value={type} onChange={(e)=>setType(e.target.value)} className="flex-1 outline-none bg-transparent">
                <option>Any</option>
                <option>PG</option>
                <option>Hostel</option>
                <option>Flat</option>
                <option>Sharing Room</option>
                <option>Apartment</option>
              </select>
            </div>
            <button type="submit" className="h-12 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium flex items-center justify-center gap-2 hover:brightness-110 shadow-sm">
              <Search size={18}/> Search
            </button>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <a href="#" className="group inline-flex items-center justify-center rounded-xl border px-4 h-11 text-gray-800 hover:bg-gray-50">
              List Property <ChevronRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform"/>
            </a>
            <a href="#roommate" className="group inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-4 h-11 hover:bg-blue-700">
              <Users size={16} className="mr-2"/> Find My Roommate <ChevronRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform"/>
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default HeroSection;
