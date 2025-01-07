import React, { useState } from 'react';
import DeathNoticeList from '../app/components/DeathNoticeList';
import DeathNoticeCards from '../app/components/DeathNoticeCards';
import deathNotices from '../data/deathNotices';

const DeathNoticesPage = () => {
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'card'

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-center my-6">Death Notices</h1>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setViewMode(viewMode === 'list' ? 'card' : 'list')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Switch to {viewMode === 'list' ? 'Card' : 'List'} View
                </button>
            </div>
            {viewMode === 'list' ? (
                <DeathNoticeList deathNotices={deathNotices} />
            ) : (
                <DeathNoticeCards deathNotices={deathNotices} />
            )}
        </div>
    );
};

export default DeathNoticesPage;