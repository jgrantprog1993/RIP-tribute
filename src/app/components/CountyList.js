import Link from 'next/link';

const counties = [
    { name: 'Dublin', id: 'dublin' },
    { name: 'Cork', id: 'cork' },
    { name: 'Galway', id: 'galway' },
    // Add more counties as needed
];

const CountyList = () => {
    return (
        <div>
            <h2>Death Notices by County</h2>
            <ul>
                {counties.map(county => (
                    <li key={county.id}>
                        <Link href={`/counties/${county.id}`}>
                            {county.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountyList; 