import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Users, BedDouble } from 'lucide-react';

const items = [
  { label: 'PG', Icon: BedDouble, color: 'from-fuchsia-500 to-pink-500' },
  { label: 'Hostel', Icon: Home, color: 'from-blue-500 to-cyan-500' },
  { label: 'Flat', Icon: Home, color: 'from-emerald-500 to-teal-500' },
  { label: 'Sharing Room', Icon: Users, color: 'from-amber-500 to-orange-500' },
  { label: 'Apartment', Icon: Building2, color: 'from-violet-500 to-indigo-500' },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Explore by category</h2>
        <span className="text-sm text-gray-600">Tap a category to filter</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map(({label, Icon, color}) => (
          <motion.button
            key={label}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-2xl border bg-white p-4 text-left shadow-sm"
          >
            <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} text-white grid place-items-center shadow-md shadow-black/10 group-hover:rotate-3 transition-transform`}>
              <Icon size={20} />
            </div>
            <div className="mt-3 font-medium">{label}</div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent to-black/0 pointer-events-none"/>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
