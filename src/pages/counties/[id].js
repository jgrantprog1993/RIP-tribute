import { useRouter } from 'next/router';
import deathNotices from '../../data/deathNotices'; // Assuming you have a data source

const CountyDeathNotices = () => {
    const router = useRouter();
    const { id } = router.query;

    // Filter deathNotices by county (assuming deathNotices have a county property)
    const CountyDeathNotices = deathNotices.filter(o => o.county.toLowerCase() === id);

    return (
        <div>
            <h1>deathNotices in {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            {countydeathNotices.length > 0 ? (
                <ul>
                    {CountyDeathNotices.map(deathNotice => (
                        <li key={deathNotice.id}>{deathNotice.name} - {deathNotice.date}</li>
                    ))}
                </ul>
            ) : (
                <p>No deathNotices found for this county.</p>
            )}
        </div>
    );
};

export default CountyDeathNotices; 