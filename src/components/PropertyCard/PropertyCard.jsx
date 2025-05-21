import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBed, FaBath } from 'react-icons/fa';
import { FiBookmark, FiShare2, FiDownload, FiPhone } from 'react-icons/fi';
import Chip from '../UI/Chip/Chip';
import Button from '../UI/Button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import useWishlist from '../../hooks/useWishlisted';
import { formatCurrency } from '../../utils/formatCurrency';

const PropertyCard = ({ property }) => {
  const { isWishlisted, toggleWishlist } = useWishlist(property.id);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const formattedPrice = formatCurrency(property.price, 'USD', 'en-US', 0);
  const formattedInvestment = formatCurrency(property.investmentRequired, 'USD', 'en-US', 0);

  const openModal = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  return (
    <div
      className="relative overflow-hidden transition-all duration-200 border border-gray-200 shadow-sm cursor-pointer rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/10 dark:border-white/10 hover:scale-102 hover:shadow-md"
      onClick={() => openModal(property)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {showModal && selectedProperty && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white dark:bg-black/90 backdrop-blur-2xl p-6 rounded-2xl shadow-xl w-[90%] max-w-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute flex items-center justify-center text-sm font-bold text-white cursor-pointer top-3 right-4"
              >
                ×
              </button>

              <h2 className="mb-4 text-2xl font-semibold">About this property</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {selectedProperty.description || 'No description available.'}
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Investment Details</h3>
                <p>
                  <strong>Investment Required:</strong> {formattedInvestment}
                </p>
                <p>
                  <strong>Ownership:</strong> {selectedProperty.ownershipShare}%
                </p>
                <p>
                  <strong>Lease Terms:</strong> {selectedProperty.leaseTerms}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Property Information</h3>
                <p>
                  <strong>Type:</strong> {selectedProperty.type}
                </p>
                <p>
                  <strong>Location:</strong> {selectedProperty.location}
                </p>
                <p>
                  <strong>Bedrooms:</strong> {selectedProperty.bedrooms}
                </p>
                <p>
                  <strong>Bathrooms:</strong> {selectedProperty.bathrooms}
                </p>
                <p>
                  <strong>Area:</strong> {selectedProperty.area} sq.ft
                </p>
                <p>
                  <strong>Furnishing:</strong> {selectedProperty.furnishing}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative p-4">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="object-cover w-full h-48 rounded-2xl"
        />

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center rounded-2xl"
          >
            <Button
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                openModal(property);
              }}
              className="text-white duration-500 bg-black shadow-lg rounded-3xl hover:bg-blue-500"
            >
              Know More
            </Button>
          </motion.div>
        )}
      </div>

      <div className="p-4 space-y-2 text-gray-800 dark:text-white">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p className="text-sm text-gray-600 dark:text-white/60">
          {property.type} • {property.location}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label={`${property.bedrooms} Bed`} variant="primary" size="sm" icon={FaBed} />
          <Chip label={`${property.bathrooms} Bath`} variant="primary" size="sm" icon={FaBath} />
          <Chip label={`${property.area} sq.ft`} variant="tertiary" size="sm" />
          <Chip label={`${property.furnishing}`} variant="secondary" size="sm" />
        </div>

        <div className="mt-3 space-y-1 text-sm">
          <p>
            <strong>Investment Required:</strong> {formattedInvestment}
          </p>
          <p>
            <strong>Ownership:</strong> {property.ownershipShare}%
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-700 dark:text-white/80">
          <div className="text-xl font-semibold text-black dark:text-white">
            {formattedPrice}
            <span className="text-sm font-normal text-gray-500 dark:text-white/50">
              {` for ${property.leaseTerms}`}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 mt-4">
          <div className="flex items-center gap-2">
            <button
              title="Add to Watchlist"
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist();
              }}
              className="cursor-pointer text-md"
            >
              {isWishlisted ? (
                <FiBookmark className='text-amber-500' />
              ) : (
                <FiBookmark />
              )}
            </button>

            <button
              title="Share"
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer text-md"
            >
              <FiShare2 />
            </button>

            <button
              title="Download Report"
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer text-md"
            >
              <FiDownload />
            </button>

            <button
              title="Schedule Call"
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer text-md"
            >
              <FiPhone />
            </button>
          </div>
          <div className="ml-auto">
            <Link className="w-full">
              <Button variant="primary" size="sm" className="font-normal rounded-lg">
                Invest Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    investmentRequired: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    furnishing: PropTypes.string.isRequired,
    ownershipShare: PropTypes.number.isRequired,
    leaseTerms: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;