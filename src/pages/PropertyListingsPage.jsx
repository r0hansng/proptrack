import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard/PropertyCard';
import { useFetchApi } from '../hooks/useFetchApi';
import Loader from '../components/UI/Loader/Loader.jsx'; // <-- Import Loader

const PropertyListingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { investedProperties, loading, error } = useFetchApi();

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem('proptrack_user')) ||
      JSON.parse(sessionStorage.getItem('proptrack_user'));

    setIsLoggedIn(user?.isLoggedIn || false);
  }, []);

  return (
    <div className="relative min-h-screen px-6 py-20 text-white bg-black sm:px-12">
      <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-10 mix-blend-soft-light z-0"></div>

      <h1 className="relative z-10 mb-8 text-3xl font-medium text-left">
        Track your Investments. <span className="text-amber-600">Simple. Easy.</span>
      </h1>

      <div className="relative z-10">
        {loading ? (
          <Loader />
        ) : !isLoggedIn ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <p className="mb-6 text-5xl font-semibold text-white w-[80%] sm:w-[60%] lg:w-[40%] mx-auto">
              Log in to see the properties you are invested in.
            </p>
          </div>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {investedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;
