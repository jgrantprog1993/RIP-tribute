import { useRouter } from 'next/router';
import obituaries from '../../data/obituaries'; // Assuming you have a data source

const CountyObituaries = () => {
    const router = useRouter();
    const { id } = router.query;

    // Filter obituaries by county (assuming obituaries have a county property)
    const countyObituaries = obituaries.filter(o => o.county.toLowerCase() === id);

    return (
        <div>
            <h1>Obituaries in {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            {countyObituaries.length > 0 ? (
                <ul>
                    {countyObituaries.map(obituary => (
                        <li key={obituary.id}>{obituary.name} - {obituary.date}</li>
                    ))}
                </ul>
            ) : (
                <p>No obituaries found for this county.</p>
            )}
        </div>
    );
};

export default CountyObituaries; 