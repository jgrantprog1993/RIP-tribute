import React from 'react';
import ObituaryList from '../app/components/ObituaryList';
import obituaries from '../data/obituaries';
import CountyList from '../app/components/CountyList';

const DeathNoticesPage = () => {
    return (
        <div>
            <h1>Death Notices</h1>
            <p>This is the Death Notices page where information about recent passings can be found.</p>
            {/* <CountyList />
            <ObituaryList obituaries={obituaries} /> */}
        </div>
    );
};

export default DeathNoticesPage;