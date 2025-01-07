import { useRouter } from 'next/router';
import deathNotices from '../../data/deathNotices';
import FuneralDirectorCard from '../../app/components/FuneralDirectorCard';

const DeathNoticeDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  const actualId = id.split('-').slice(-1)[0];
  const deathNotice = deathNotices.find(notice => notice.id.toString() === actualId);

  // Example funeral director details
  const funeralDirector = {
    name: "Fitzgerald's Funeral Directors - Bayside",
    address: "Unit 6 Bayside Shopping Centre",
    city: "Bayside",
    postalCode: "Dublin 13 D13 WD51",
    county: "Dublin",
    website: "http://www.fitzgeraldsfuneraldirectors.ie",
    email: "fitzgeraldfuneraldirectors@gmail.com",
    phone: "01 8394508",
    flowerOrdersPhone: "01 8438495"
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {deathNotice ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <img src="/path/to/image.jpg" alt="Death Notice" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold mb-2">{deathNotice.firstName} {deathNotice.lastName}</h1>
          <p className="text-gray-700 mb-4">{deathNotice.content}</p>
          <div className="mb-4">
            <span className="font-semibold">Published:</span> {deathNotice.date}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Date of Death:</span> {deathNotice.dateOfDeath}
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Share Notice
            </button>
            <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400">
              Back to Notices
            </button>
          </div>
        </div>
      ) : (
        <p>No details available for this notice.</p>
      )}
      <FuneralDirectorCard director={funeralDirector} />
    </div>
  );
};

export default DeathNoticeDetails;