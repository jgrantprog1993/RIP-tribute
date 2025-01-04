// This is a component that will be used to show the detail page of the singular obituary

import { useRouter } from 'next/router';
import obituaries from '../../data/obituaries';

function ObituaryId() {
    const router = useRouter();
    const { id } = router.query;
    const obituary = obituaries.find(o => o.id.toString() === id);
    return <div>{obituary.name}</div>;
}

export default ObituaryId;  