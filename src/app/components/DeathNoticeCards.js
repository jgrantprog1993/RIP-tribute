import React from 'react';

const DeathNoticeCards = ({ obituaries }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {obituaries.map(obituary => (
                <div key={obituary.id} className="p-4 border rounded-lg shadow-lg">
                    <img src="/path/to/image.jpg" alt="Obituary" className="w-full h-48 object-cover mb-2" />
                    <h3 className="text-lg font-bold">{obituary.name}</h3>
                    <p>{obituary.town}, {obituary.county}</p>
                    <p className="text-sm text-gray-600">Published: {obituary.date}</p>
                </div>
            ))}
        </div>
    );
};

export default DeathNoticeCards; 