// src/pages/HomePage.jsx
import HeroSection from '../components/home/HeroSection';
import SearchBar from '../components/home/SearchBar';
import { DestinationCard, destinationsData } from '../components/home/DestinationCard';

const HomePage = () => {
  // Filter featured destinations for the home page
  const featuredDestinations= destinationsData.filter(dest => dest.isFeatured);
  
  return (
    <div className="min-h-screen">
      {/* Hero and Search Components */}
      <HeroSection />
      <SearchBar destinations={destinationsData} />
      
      
      {/* Featured Destinations Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Most Viewed Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map(destination => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
            />
          ))}
        </div>
      </section>
      
      {/* Call-to-Action */}
      <div className="bg-blue-50 py-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Ready for your next adventure?</h3>
        <p className="mb-6">Explore all our destinations and book your dream vacation</p>
        <a 
          href="/destination" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View All Destinations
        </a>
      </div>
    </div>
  );
};

export default HomePage;
   // At bottom of DestinationCard.jsx
   export { DestinationCard, destinationsData };
   