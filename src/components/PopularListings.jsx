import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Snowflake, Car, Utensils, MapPin, Heart, MessageCircle, IndianRupee, Star } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Sunny PG near Tech University',
    location: 'Koramangala, Bengaluru',
    rent: 9500,
    rating: 4.6,
    type: 'PG',
    img: 'https://images.unsplash.com/photo-1505692794403-34cb4b8d9892?q=80&w=1600&auto=format&fit=crop',
    amenities: ['wifi','ac','kitchen','parking']
  },
  {
    id: 2,
    title: 'Cozy Hostel for Girls',
    location: 'Viman Nagar, Pune',
    rent: 7000,
    rating: 4.4,
    type: 'Hostel',
    img: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop',
    amenities: ['wifi','kitchen']
  },
  {
    id: 3,
    title: '2BHK Student Flat',
    location: 'Hinjawadi, Pune',
    rent: 16000,
    rating: 4.7,
    type: 'Flat',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    amenities: ['wifi','ac','parking']
  },
  {
    id: 4,
    title: 'Modern Apartment near Campus',
    location: 'Noida Sector 62, NCR',
    rent: 22000,
    rating: 4.8,
    type: 'Apartment',
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
    amenities: ['wifi','ac','kitchen','parking']
  },
];

const AmenityIcon = ({ name }) => {
  const map = {
    wifi: Wifi,
    ac: Snowflake,
    kitchen: Utensils,
    parking: Car,
  };
  const Icon = map[name] || Wifi;
  return <Icon size={16} className="text-gray-700"/>;
};

const PropertyCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.img} alt={item.title + ' real property photo'} className="h-full w-full object-cover group-hover:scale-105 transition-transform"/>
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium border">
          <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-500"/>{item.rating}</span>
          <span className="h-3 w-px bg-gray-300"/>
          <span className="text-gray-700">{item.type}</span>
        </div>
        <button className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-white/90 backdrop-blur border hover:bg-white">
          <Heart size={16} className="text-gray-800"/>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold leading-tight">{item.title}</h3>
            <div className="mt-1 text-sm text-gray-600 flex items-center gap-1"><MapPin size={14}/> {item.location}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold inline-flex items-center"><IndianRupee size={14}/> {item.rent.toLocaleString('en-IN')} <span className="text-sm font-normal text-gray-600">/mo</span></div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 text-xs text-gray-700">
          {item.amenities.map(a => (
            <div key={a} className="inline-flex items-center gap-1 rounded-full border px-2 py-1 bg-gray-50">
              <AmenityIcon name={a}/> <span className="capitalize">{a}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button className="col-span-2 h-10 rounded-xl bg-gray-900 text-white hover:bg-black">View Details</button>
          <button className="h-10 rounded-xl border hover:bg-gray-50 inline-flex items-center justify-center gap-2"><MessageCircle size={16}/> Chat</button>
        </div>
      </div>
    </motion.div>
  );
};

const PopularListings = () => {
  return (
    <section id="properties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Popular near campuses</h2>
        <div className="flex items-center gap-2 text-sm">
          <button className="h-9 px-3 rounded-lg border bg-white hover:bg-gray-50">Price</button>
          <button className="h-9 px-3 rounded-lg border bg-white hover:bg-gray-50">Type</button>
          <button className="h-9 px-3 rounded-lg border bg-white hover:bg-gray-50">Location</button>
          <button className="h-9 px-3 rounded-lg border bg-white hover:bg-gray-50">Available</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map(item => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="inline-flex h-11 px-6 rounded-xl border bg-white hover:bg-gray-50">Load more</button>
      </div>

      <div id="roommate" className="mt-20 rounded-3xl border bg-white p-6 sm:p-10 shadow-sm grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl font-bold">Find your perfect roommate</h3>
          <p className="mt-2 text-gray-600">Match by college, budget, and lifestyle tags. Start a secure chat and plan your stay together.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-700">
            <span className="rounded-full bg-gray-100 px-3 py-1 border">Early riser</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 border">Non-smoker</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 border">Vegetarian</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 border">Gym</span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button className="h-11 px-5 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Find My Roommate</button>
            <button className="h-11 px-5 rounded-xl border bg-white hover:bg-gray-50">Create Profile</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl overflow-hidden border">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" alt="Student profile" className="h-full w-full object-cover"/>
          </div>
          <div className="rounded-2xl overflow-hidden border">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop" alt="Student profile" className="h-full w-full object-cover"/>
          </div>
          <div className="rounded-2xl overflow-hidden border">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Student profile" className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularListings;
