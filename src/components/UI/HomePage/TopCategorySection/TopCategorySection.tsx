import React from 'react';

const TopCategorySection = () => {
  // Sample product data based on the image
  const formalShirts = [
    {
      id: 1,
      title: "Formal Shirt For Men's (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["blue", "white", "black"]
    },
    {
      id: 2,
      title: "Formal Shirt For Men's (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["purple", "white", "black"]
    },
    {
      id: 3,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["navy", "white", "black"]
    },
    {
      id: 4,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["navy", "gray", "black"]
    },
    {
      id: 5,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["teal", "blue", "black"]
    },
    {
      id: 6,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["maroon", "white", "burgundy"]
    },
    {
      id: 7,
      title: "Long Sleeve Formal Shirt (2 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 1800,
      discount: 33,
      colors: ["blue", "white"]
    },
    {
      id: 8,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["lightblue", "gray", "navy"]
    },
    {
      id: 9,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["blue", "cream", "orange"]
    },
    {
      id: 10,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["maroon", "white", "blue"]
    },
    {
      id: 11,
      title: "Long Sleeve Formal Shirt (3 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 2500,
      discount: 24,
      colors: ["yellow", "blue", "maroon"]
    },
    {
      id: 12,
      title: "Long Sleeve Formal Shirt (2 Pcs)",
      images: "/api/placeholder/220/220",
      originalPrice: 3300,
      discountedPrice: 1800,
      discount: 33,
      colors: ["sage", "white"]
    },
  ];

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      {/* Section Header with Title and View All Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Formal Shirt</h2>
        <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {formalShirts.map((shirt) => (
          <div key={shirt.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {/* Product Image with Discount Badge */}
            <div className="relative">
              <img 
                src={shirt.images}
                alt={shirt.title}
                className="w-full h-44 object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                -{shirt.discount}%
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3">
              <h3 className="text-xs font-medium text-gray-700 mb-2 h-8 overflow-hidden">
                {shirt.title}
              </h3>
              
              {/* Price Information */}
              <div className="flex gap-2 mb-2">
                <span className="text-gray-900 font-semibold">৳{shirt.discountedPrice}</span>
                <span className="text-gray-400 line-through text-sm">৳{shirt.originalPrice}</span>
              </div>
              
              {/* Order Now Button */}
              <button className="w-full bg-red-600 text-white py-2 text-sm font-medium rounded hover:bg-red-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategorySection;