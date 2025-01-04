import { useState, useEffect } from 'react';
import obituaries from '../../data/obituaries'; // Adjust path as necessary

const useObituary = (id) => {
    const [obituary, setObituary] = useState(null);

    useEffect(() => {
        const obit = obituaries.find(o => o.id === id);
        setObituary(obit);
    }, [id]);

    return obituary;
};

export default useObituary; 