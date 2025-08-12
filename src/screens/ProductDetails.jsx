import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product || {
    // Fallback data if none passed
    id: 1,
    title: "Essence Mascara",
    price: 12.99,
    image: "https://via.placeholder.com/300",
    description: "Lengthening mascara for dramatic lashes"
  };
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Product Image */}
      <div className="w-full h-80 bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{product.title}</h1>
        <p className="text-xl font-bold text-pink-500 mb-6">${product.price}</p>

        <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">Description</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

        <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">Highlights</h2>
        <ul className="space-y-1 mb-6">
          <li className="text-gray-600">• Dimensions: 5 x 5 x 10 cm</li>
          <li className="text-gray-600">• 1 Year Warranty</li>
          <li className="text-gray-600">• Free Shipping on orders above $50</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">Ratings & Reviews</h2>
        <p className="text-yellow-500 mb-8">4.5 ★ (120 reviews)</p>

        <button
          onClick={() => alert('Added to bag!')}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;