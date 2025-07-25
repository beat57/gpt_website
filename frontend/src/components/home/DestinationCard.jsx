// src/components/home/DestinationCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiMapPin, FiStar } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';

const DestinationCard = ({ destination }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  return (
    <motion.div 
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with badges */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={destination.image}
          alt={`${destination.name} travel destination`}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Popular badge */}
        {destination.isPopular && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Popular
          </div>
        )}
        
        {/* Featured badge */}
        {destination.isFeatured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Featured
          </div>
        )}
        
        {/* Favorite button */}
        <motion.button
          className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FiHeart className="w-5 h-5" />
        </motion.button>
        
        {/* Price overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <div className="flex justify-between items-end text-white">
            <div>
              <p className="text-xs">Starting from</p>
              <div className="flex items-end">
                <span className="text-2xl font-bold mr-2">
                  {priceFormatter.format(destination.price)}
                </span>
                {destination.originalPrice && (
                  <span className="text-sm line-through opacity-70">
                    {priceFormatter.format(destination.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            {destination.discount && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {destination.discount}% OFF
              </span>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Card content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{destination.name}</h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FiMapPin className="mr-1 flex-shrink-0" />
              <span className="line-clamp-1">{destination.location}</span>
            </div>
          </div>
          
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-lg">
            <FiStar className="text-yellow-400 mr-1 flex-shrink-0" />
            <span className="font-semibold text-sm">{destination.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
          <div className="flex items-center text-gray-500">
            <IoTimeOutline className="mr-2 text-gray-400" />
            <span>{destination.duration}</span>
          </div>
          
          <motion.button
            className="px-4 py-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
      
      {/* Book now button - appears on hover */}
      {isHovered && (
        <motion.div 
          className="absolute bottom-0 left-30 right-40  bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 font-bold cursor-pointer rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Book Now
        </motion.div>
      )}
    </motion.div>
  );
};



// Sample destinations data
const destinationsData = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://wallpaperaccess.com/full/1937818.jpg",
    location: "Indonesia",
    description: "Tropical paradise with stunning beaches, vibrant culture, and lush rice terraces.",
    rating: 4.8,
    price: 1200,
    originalPrice: 1500,
    duration: "7 days",
    discount: 20,
    isPopular: true,
    isFeatured: false
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://th.bing.com/th/id/R.32f111138533abd7ee5c51206a8b8ed1?rik=Iz0KMLFh8M%2f8IA&riu=http%3a%2f%2fwww.hdwallpapers10.com%2fwp-content%2fuploads%2f2017%2f05%2fparis+france+eiffel+tower+beautiful+amazing+images+full+hd.jpg&ehk=LhxL2qddDRCvZJrwfmxV9066AIJqrLIAeN%2b%2fSdPbn1A%3d&risl=&pid=ImgRaw&r=0",
    location: "France",
    description: "Iconic city of love featuring the Eiffel Tower, Louvre Museum, and charming cafés.",
    rating: 4.9,
    price: 1500,
    originalPrice: 1800,
    duration: "5 days",
    discount: 15,
    isPopular: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "https://s.yimg.com/ny/api/res/1.2/jvkzkQLZ51wXmHswNTiktg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7",
    location: "Japan",
    description: "Ultra-modern metropolis blending cutting-edge technology with ancient traditions.",
    rating: 4.7,
    price: 1300,
    originalPrice: 1600,
    duration: "6 days",
    discount: 10,
    isPopular: false,
    isFeatured: false
  },
  {
    id: 4,
    name: "Rome, Italy",
    image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
    location: "Italy",
    description: "Eternal city home to the Colosseum, Vatican City, and world-class Italian cuisine.",
    rating: 4.8,
    price: 1400,
    originalPrice: 1650,
    duration: "4 days",
    discount: 15,
    isPopular: true,
    isFeatured: false
  },
  {
    id: 5,
    name: "New York City, USA",
    image: "https://wallup.net/wp-content/uploads/2017/11/17/233110-New_York_City-USA-city-cityscape-reflection-skyscraper-skyline.jpg",
    location: "United States",
    description: "The city that never sleeps with Times Square, Central Park, and Broadway shows.",
    rating: 4.6,
    price: 1100,
    originalPrice: 1350,
    duration: "4 days",
    discount: 15,
    isPopular: true,
    isFeatured: true
  },
  {
    id: 6,
    name: "Sydney, Australia",
    image: "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg",
    location: "Australia",
    description: "Coastal metropolis famous for its Opera House, Harbour Bridge, and Bondi Beach.",
    rating: 4.7,
    price: 1700,
    originalPrice: 2000,
    duration: "8 days",
    discount: 10,
    isPopular: false,
    isFeatured: false
  },
  {
    id: 7,
    name: "Cape Town, South Africa",
    image: "https://www.tripsavvy.com/thmb/ieUkLrNRslozASA1ibE9BArqNeU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/aerial-view-of-cape-town-and-it-s-majestic--flat-topped-table-mountain-1169318257-07b81b2f33d74f6aaf1685b306c86bfa.jpg",
    location: "South Africa",
    description: "Stunning coastal city with Table Mountain, penguins, and world-class vineyards.",
    rating: 4.8,
    price: 1250,
    originalPrice: 1500,
    duration: "7 days",
    discount: 15,
    isPopular: false,
    isFeatured: true
  },
  {
    id: 8,
    name: "Santorini, Greece",
    image: "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    location: "Greece",
    description: "Picturesque island with white-washed buildings, blue domes, and stunning sunsets.",
    rating: 4.9,
    price: 1450,
    originalPrice: 1800,
    duration: "6 days",
    discount: 20,
    isPopular: true,
    isFeatured: false
  },
  {
    id: 9,
    name: "Rio de Janeiro, Brazil",
    image: "https://cdn.holidayguru.es/wp-content/uploads/2016/08/Aerial-view-of-Christ-Sugarloaf-Rio-de-Janeiro-Brazil-iStock_55264880_LARGE-EDITORIAL-ONLY-dolphinphoto-2.jpg",
    location: "Brazil",
    description: "Vibrant city known for Carnival, Christ the Redeemer, and Copacabana beach.",
    rating: 4.6,
    price: 1350,
    originalPrice: 1600,
    duration: "5 days",
    discount: 15,
    isPopular: true,
    isFeatured: false
  },
  {
    id: 10,
    name: "Kyoto, Japan",
    image: "https://handluggageonly.co.uk/wp-content/uploads/2017/05/iStock-509472000.jpg",
    location: "Japan",
    description: "Cultural heart with ancient temples and bamboo forests.",
    rating: 4.7,
    price: 1550,
    originalPrice: 1900,
    duration: "7 days",
    discount: 20,
    isPopular: false,
    isFeatured: true
  }
];

// Export the component and the destinations data
export { DestinationCard, destinationsData };
