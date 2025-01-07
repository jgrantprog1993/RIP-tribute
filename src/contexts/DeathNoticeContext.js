import { createContext, useContext, useState } from 'react';

const DeathNoticeContext = createContext();

export const deathNoticeProvider = ({ children }) => {
    const [deathNotices, setdeathNotices] = useState([]);

    // Placeholder for fetching data
    const loaddeathNotices = async () => {
        // Fetch data and set deathNotices
    };

    return (
        <DeathNoticeContext.Provider value={{ deathNotices, loaddeathNotices }}>
            {children}
        </DeathNoticeContext.Provider>
    );
};

export const useDeathNotices = () => useContext(DeathNoticeContext); 