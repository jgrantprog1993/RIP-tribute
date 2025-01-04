import { useRouter } from 'next/router';
import ObituaryId from '../../app/components/ObituaryId'; // Updated import path
import obituaries from '../../data/obituaries';

function ObituaryPage() {
    const router = useRouter();
    const { id } = router.query;
    const obituary = obituaries.find(o => o.id.toString() === id);

    return obituary ? <ObituaryId obituary={obituary} /> : <p>Obituary not found.</p>;
}

export default ObituaryPage; 