// This is a component that will be used to show the detail page of the singular deathNotice

import { useRouter } from 'next/router';
import deathNotices from '../../data/deathNotices';

function deathNoticeId() {
    const router = useRouter();
    const { id } = router.query;
    const deathNotice = deathNotices.find(o => o.id.toString() === id);
    return <div>{deathNotice.name}</div>;
}

export default deathNoticeId;  