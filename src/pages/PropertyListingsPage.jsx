import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard/PropertyCard";

const sampleProperties = [
    {
        id: 1,
        title: "Modern Apartment in New York",
        location: "Manhattan, NY",
        price: 850000,
        imageUrl: "https://photos.zillowstatic.com/fp/173b668ad3461bdb29dc13032b6f2e29-p_e.jpg",
        type: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: "1200",
        furnishing: "Furnished",
        investmentRequired: 100000,
        ownershipShare: 25,
        leaseTerms: "12 months"
    },
    {
        id: 2,
        title: "Cozy House in San Francisco",
        location: "San Francisco, CA",
        price: 1250000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s",
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800",
        furnishing: "Semi-Furnished",
        investmentRequired: 200000,
        ownershipShare: 50,
        leaseTerms: "24 months"
    },
    {
        id: 2,
        title: "Cozy House in San Francisco",
        location: "San Francisco, CA",
        price: 1250000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s",
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800",
        furnishing: "Semi-Furnished",
        investmentRequired: 200000,
        ownershipShare: 50,
        leaseTerms: "24 months"
    },
    {
        id: 2,
        title: "Cozy House in San Francisco",
        location: "San Francisco, CA",
        price: 1250000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s",
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800",
        furnishing: "Semi-Furnished",
        investmentRequired: 200000,
        ownershipShare: 50,
        leaseTerms: "24 months"
    },
    {
        id: 2,
        title: "Cozy House in San Francisco",
        location: "San Francisco, CA",
        price: 1250000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s",
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800",
        furnishing: "Semi-Furnished",
        investmentRequired: 200000,
        ownershipShare: 50,
        leaseTerms: "24 months"
    },
    {
        id: 2,
        title: "Cozy House in San Francisco",
        location: "San Francisco, CA",
        price: 1250000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s",
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800",
        furnishing: "Semi-Furnished",
        investmentRequired: 200000,
        ownershipShare: 50,
        leaseTerms: "24 months"
    },
    {
        id: 2,
        title: "Cozy House in San Francisco",
        location: "San Francisco, CA",
        price: 1250000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96etH0qSsfP7s38WOM-hm1dAZTMP1iwpGyA&s",
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800",
        furnishing: "Semi-Furnished",
        investmentRequired: 200000,
        ownershipShare: 50,
        leaseTerms: "24 months"
    },
];

export default function PropertyListingPage() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        setProperties(sampleProperties);
    }, []);

    return (
        <div className="min-h-screen px-6 py-20 text-white bg-black sm:px-12">
            <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-10 mix-blend-soft-light z-0"></div>

            <h1 className="mb-8 text-3xl font-medium text-left">
                Available Properties. <span className="text-amber-600">Take your pick.</span>
            </h1>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );

}


// import React, { useState, useEffect } from "react";
// import PropertyCard from "../components/PropertyCard/PropertyCard";
// import Loader from "../components/UI/Loader/Loader";

// export default function PropertyListingPage() {
//     const [properties, setProperties] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProperties = async () => {
//             try {
//                 const response = await fetch('https://api.rentcast.io/v1/properties?postalCode=94043', {
//                     headers: {
//                         'X-Api-Key': import.meta.env.VITE_RENTCAST_API_KEY, 
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch property data");
//                 }

//                 const data = await response.json();
//                 console.log("Fetched property data:", data); // Log the fetched data
//                 setProperties(data.properties); // Assuming the API response contains a 'properties' field
//                 setLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchProperties();
//     }, []);

//     if (loading) {
//         return <Loader />;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div className="min-h-screen px-6 py-20 text-white sm:px-12">
//             <h1 className="mb-8 text-3xl font-bold text-center">Explore Properties</h1>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {properties.map((property) => (
//                     <PropertyCard key={property.id} property={property} />
//                 ))}
//             </div>
//         </div>
//     );
// }
