import Link from 'next/link';

function ObituaryList({ obituaries }) {
    return (
        <ul>
            {obituaries.map(obituary => (
                <li key={obituary.id}>
                    <Link href={`/obituaries/${obituary.id}`} legacyBehavior>
                        <a>{obituary.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ObituaryList;