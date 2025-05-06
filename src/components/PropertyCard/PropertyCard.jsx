import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaRegHeart, FaShareAlt, FaDownload, FaPhoneAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import Chip from "../UI/Chip/Chip";
import Button from "../UI/Button/Button";

export default function PropertyCard({ property }) {

    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("wishlist") || "{}");
        setIsWishlisted(!!saved[property.id]);
    }, [property.id]);

    const toggleWishlist = () => {
        const saved = JSON.parse(localStorage.getItem("wishlist") || "{}");
        const updated = {
            ...saved,
            [property.id]: !isWishlisted,
        };
        localStorage.setItem("wishlist", JSON.stringify(updated));
        setIsWishlisted(!isWishlisted);
    };

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(property.price);

    const formattedInvestment = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(property.investmentRequired);

    return (
        <div className="overflow-hidden transition-shadow duration-200 border border-gray-200 shadow-sm rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/10 dark:border-white/10 hover:shadow-md">
            <div className="p-4">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="object-cover w-full h-48 rounded-2xl"
                />
            </div>

            <div className="p-4 space-y-2 text-gray-800 dark:text-white">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-sm text-gray-600 dark:text-white/60">{property.type} • {property.location}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    <Chip label={`${property.bedrooms} Bed`} variant="primary" size="sm" icon={FaBed} />
                    <Chip label={`${property.bathrooms} Bath`} variant="primary" size="sm" icon={FaBath} />
                    <Chip label={`${property.area} sq.ft`} variant="tertiary" size="sm" />
                    <Chip label={`${property.furnishing}`} variant="secondary" size="sm" />
                </div>

                <div className="mt-3 space-y-1 text-sm">
                    <p><strong>Investment Required:</strong> {formattedInvestment}</p>
                    <p><strong>Ownership:</strong> {property.ownershipShare}%</p>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-700 dark:text-white/80">
                    <div className="text-xl font-semibold text-black dark:text-white">
                        {formattedPrice}
                        <span className="text-sm font-normal text-gray-500 dark:text-white/50">
                            {` for ${property.leaseTerms}`}
                        </span>
                    </div>
                </div>

                {/* Action Buttons (Add to Watchlist, Share, Download, Schedule Call, Invest Now) */}
                <div className="flex items-center justify-between gap-2 mt-4">
                    <div className="flex items-center gap-2">
                        <button
                            title="Add to Watchlist"
                            onClick={toggleWishlist}
                            className="text-sm cursor-pointer"
                        >
                            <span role="img" aria-label="wishlist">
                                {isWishlisted ? '􀉟' : '􀉞'}
                            </span>
                        </button>

                        <button title="Share" className="cursor-pointer text-md">􀈂</button>
                        <button title="Download Report" className="cursor-pointer text-md">􀁸</button>
                        <button title="Schedule Call" className="cursor-pointer text-md">􀒥</button>
                    </div>

                    {/* Invest Now Button shifted to the right */}
                    <div className="ml-auto">
                        <Link className="w-full">
                            <Button
                                variant="primary"
                                size="sm"
                                className="font-normal rounded-lg"
                            >
                                Invest Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
    }).isRequired,
};
