import { useState, useEffect } from 'react';
import deathNotices from '../../data/deathNotices'; // Adjust path as necessary

const usedeathNotice = (id) => {
    const [deathNotice, setdeathNotice] = useState(null);

    useEffect(() => {
        const obit = deathNotices.find(o => o.id === id);
        setdeathNotice(obit);
    }, [id]);

    return deathNotice;
};

export default usedeathNotice; 