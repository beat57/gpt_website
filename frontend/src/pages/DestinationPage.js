// src/pages/DestinationsPage.jsx
import React from 'react';
import { DestinationCard, destinationsData } from '../components/home/DestinationCard';

const DestinationsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Amazing Destinations</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover the world's most beautiful places for your next adventure
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular Destinations</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              All
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg">
              Featured
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg">
              Trending
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinationsData.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
            Load More Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
