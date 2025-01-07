import { useRouter } from 'next/router';

const DeathNoticeDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // If 'id' contains SEO parts, parse it to get the actual ID
  const actualId = id.split('-').slice(-1)[0]; // Assuming the ID is the last part after splitting

  // Fetch data using actualId
  // ...

  return (
    <div>
      {/* Render your component */}
    </div>
  );
};

export default DeathNoticeDetails;