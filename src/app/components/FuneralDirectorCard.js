import React from 'react';

const FuneralDirectorCard = ({ director }) => {
  const openGoogleMaps = () => {
    const address = encodeURIComponent(`${director.address}, ${director.city}, ${director.postalCode}, ${director.county}`);
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{director.name}</h2>
      <p className="text-gray-700">{director.address}</p>
      <p className="text-gray-700">{director.city}</p>
      <p className="text-gray-700">{director.postalCode}</p>
      <p className="text-gray-700">{director.county}</p>
      <a href={director.website} className="text-blue-500 hover:underline">{director.website}</a>
      <p className="text-gray-700">{director.email}</p>
      <p className="text-gray-700">{director.phone}</p>
      <p className="text-gray-700">Flower Orders Only: {director.flowerOrdersPhone}</p>
      <button 
        onClick={openGoogleMaps} 
        className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
      >
        Funeral Home Location
      </button>
    </div>
  );
};

export default FuneralDirectorCard; 