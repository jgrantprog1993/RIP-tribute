import React from 'react';

const DeathNoticeCards = ({ deathNotices }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {deathNotices.map(deathNotice => (
                <div key={deathNotice.id} className="p-4 border rounded-lg shadow-lg">
                    <img src="/path/to/image.jpg" alt="deathNotice" className="w-full h-48 object-cover mb-2" />
                    <h3 className="text-lg font-bold">{deathNotice.name}</h3>
                    <p>{deathNotice.town}, {deathNotice.county}</p>
                    <p className="text-sm text-gray-600">Published: {deathNotice.date}</p>
                </div>
            ))}
        </div>
    );
};

export default DeathNoticeCards; 