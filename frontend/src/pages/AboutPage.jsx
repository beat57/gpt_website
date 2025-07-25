// src/pages/AboutPage.jsx
import React from 'react';
import { FaGlobe, FaUserFriends, FaAward, FaHandsHelping } from 'react-icons/fa';
import teamMembers from '../data/team'; // Create this data file

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Travel Company</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our story, our values, and the team dedicated to making your travel dreams come true
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2015, our travel company began with a simple mission: to create unforgettable travel experiences 
            that go beyond the ordinary. What started as a small team of passionate travelers has grown into a global 
            community of explorers.
          </p>
          <p className="text-gray-600">
            Over the years, we've helped thousands of travelers discover hidden gems, experience authentic cultures, 
            and create memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaGlobe className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">50+ Destinations</h3>
            <p className="text-gray-600">Across 6 continents</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaUserFriends className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">10,000+ Travelers</h3>
            <p className="text-gray-600">Trusted our services</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaAward className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">15 Awards</h3>
            <p className="text-gray-600">For excellent service</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaHandsHelping className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Dedicated travel experts</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our team of experts craft the perfect travel experience for you
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
