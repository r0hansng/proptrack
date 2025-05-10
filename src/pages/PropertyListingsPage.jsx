import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard/PropertyCard';

const sampleProperties = [
  {
    id: 1,
    title: 'Modern Apartment in New York',
    location: 'Manhattan, NY',
    price: 850000,
    imageUrl: 'https://photos.zillowstatic.com/fp/173b668ad3461bdb29dc13032b6f2e29-p_e.jpg',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: '1200',
    furnishing: 'Furnished',
    investmentRequired: 100000,
    ownershipShare: 25,
    leaseTerms: '12 months',
  },
  {
    id: 2,
    title: 'Cozy House in San Francisco',
    location: 'San Francisco, CA',
    price: 1250000,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s',
    type: 'House',
    bedrooms: 3,
    bathrooms: 2,
    area: '1800',
    furnishing: 'Semi-Furnished',
    investmentRequired: 200000,
    ownershipShare: 50,
    leaseTerms: '24 months',
  },
];

const investedProperties = [
  {
    id: 101,
    title: 'Lakeview Condo in Chicago',
    location: 'Chicago, IL',
    price: 950000,
    imageUrl: 'https://photos.zillowstatic.com/fp/5a9c314c1b25f63255d26fbc7d347f76-p_e.jpg',
    type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    area: '1400',
    furnishing: 'Furnished',
    investmentRequired: 150000,
    ownershipShare: 30,
    leaseTerms: '18 months',
  },
];

export default function PropertyListingPage() {
  const [activeTab, setActiveTab] = useState('investNow');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const getTabStyle = (tab) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
      activeTab === tab
        ? 'bg-white text-black'
        : 'bg-transparent text-white hover:bg-white hover:text-black'
    }`;

  const displayedProperties = activeTab === 'investNow' ? sampleProperties : investedProperties;

  return (
    <div className="relative min-h-screen px-6 py-20 text-white bg-black sm:px-12">
      <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-10 mix-blend-soft-light z-0"></div>

      {/* Tabs */}
      <div className="relative z-10 flex justify-center p-2 mb-6 space-x-2 border border-white/10 bg-white/15 rounded-xl bg-opacity-20 backdrop-blur-md border-opacity-30 w-fit">
        <button onClick={() => setActiveTab('investNow')} className={getTabStyle('investNow')}>
          Invest Now
        </button>
        <button
          onClick={() => setActiveTab('yourInvestments')}
          className={getTabStyle('yourInvestments')}
        >
          Your Investments
        </button>
      </div>

      {/* Headings */}
      {activeTab === 'investNow' && (
        <h1 className="relative z-10 mb-8 text-3xl font-medium text-left">
          Available Properties. <span className="text-amber-600">Take your pick.</span>
        </h1>
      )}

      {activeTab === 'yourInvestments' && isLoggedIn && (
        <h1 className="relative z-10 mb-8 text-3xl font-medium text-left">
          Track your Investments. <span className="text-amber-600">Simple. Easy.</span>
        </h1>
      )}

      {/* Content */}
      <div className="relative z-10">
        {activeTab === 'yourInvestments' && !isLoggedIn ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <p className="mb-6 mt-80 text-5xl font-semibold text-white /w-[40%]">
              Log in to see the properties you are invested in.
            </p>
            {/* <button
                            className="px-6 py-2 text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
                            onClick={() => window.location.href = "/login"}
                        >
                            Log in
                        </button> */}
          </div>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedProperties.map((property) => (
              <PropertyCard key={`${activeTab}-${property.id}`} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
