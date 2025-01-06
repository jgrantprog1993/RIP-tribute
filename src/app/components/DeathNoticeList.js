import React from 'react';

const DeathNoticeList = ({ obituaries }) => {
    return (
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
                {obituaries.map(obituary => (
                    <tr key={obituary.id}>
                        <td>{obituary.name}</td>
                        <td>{obituary.town}</td>
                        <td>{obituary.county}</td>
                        <td>{obituary.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DeathNoticeList; 