import { useState, useEffect } from 'react';

const useWishlist = (propertyId) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist') || '{}');
    setIsWishlisted(!!saved[propertyId]);
  }, [propertyId]);

  const toggleWishlist = () => {
    const saved = JSON.parse(localStorage.getItem('wishlist') || '{}');
    const updated = {
      ...saved,
      [propertyId]: !saved[propertyId],
    };
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setIsWishlisted(!saved[propertyId]);
  };

  return { isWishlisted, toggleWishlist };
};

export default useWishlist;