import { createContext, useContext, useState } from 'react';

const ObituaryContext = createContext();

export const ObituaryProvider = ({ children }) => {
    const [obituaries, setObituaries] = useState([]);

    // Placeholder for fetching data
    const loadObituaries = async () => {
        // Fetch data and set obituaries
    };

    return (
        <ObituaryContext.Provider value={{ obituaries, loadObituaries }}>
            {children}
        </ObituaryContext.Provider>
    );
};

export const useObituaries = () => useContext(ObituaryContext); 