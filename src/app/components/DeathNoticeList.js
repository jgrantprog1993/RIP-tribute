import React, { useState } from 'react';
import Link from 'next/link';

const DeathNoticeList = ({ deathNotices }) => {
    const [filters, setFilters] = useState({
        firstName: '',
        lastName: '',
        county: '',
        town: '',
        publishedFrom: '',
        publishedTo: '',
        nee: ''
    });

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const clearFilters = () => {
        setFilters({
            firstName: '',
            lastName: '',
            county: '',
            town: '',
            publishedFrom: '',
            publishedTo: '',
            nee: ''
        });
    };

    const filtereddeathNotices = deathNotices.filter(deathNotice => {
        return deathNotice.firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&
               deathNotice.lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&
               deathNotice.county.toLowerCase().includes(filters.county.toLowerCase()) &&
               deathNotice.town.toLowerCase().includes(filters.town.toLowerCase()) &&
               (!filters.publishedFrom || new Date(deathNotice.date) >= new Date(filters.publishedFrom)) &&
               (!filters.publishedTo || new Date(deathNotice.date) <= new Date(filters.publishedTo)) &&
               deathNotice.nee.toLowerCase().includes(filters.nee.toLowerCase());
    });

    const getDaysSinceEpoch = (date) => {
        const dateObj = new Date(date);
        return Math.floor(dateObj.getTime() / (1000 * 60 * 60 * 24));
    };

    return (
        <div>
            <div className="filters bg-gray-100 p-4 rounded-lg shadow mb-4">
                <input type="text" name="firstName" placeholder="First Name" value={filters.firstName} onChange={handleFilterChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={filters.lastName} onChange={handleFilterChange} />
                <input type="text" name="county" placeholder="County" value={filters.county} onChange={handleFilterChange} />
                <input type="text" name="town" placeholder="Town" value={filters.town} onChange={handleFilterChange} />
                <input type="date" name="publishedFrom" placeholder="Published From" value={filters.publishedFrom} onChange={handleFilterChange} />
                <input type="date" name="publishedTo" placeholder="Published To" value={filters.publishedTo} onChange={handleFilterChange} />
                <input type="text" name="nee" placeholder="Nee" value={filters.nee} onChange={handleFilterChange} />
                <button onClick={clearFilters} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-2 text-sm rounded">
                    Clear Filters
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left">Name</th>
                        <th className="text-left">Town</th>
                        <th className="text-left">County</th>
                        <th className="text-left">Published</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filtereddeathNotices.map(deathNotice => (
                        <tr key={deathNotice.id}>
                            <td>
                                <Link legacyBehavior 
                                    href={`/death-notice-details/[id]`} 
                                    as={`/death-notice-details/${deathNotice.firstName}-${deathNotice.lastName}-${deathNotice.county}-${deathNotice.town}-${deathNotice.id}`}
                                >
                                    <a>{deathNotice.firstName} {deathNotice.lastName}{deathNotice.nee ? ` (${deathNotice.nee})` : ''}</a>
                                </Link>
                            </td>
                            <td>{deathNotice.town}</td>
                            <td>{deathNotice.county}</td>
                            <td>{deathNotice.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeathNoticeList; 