import '../styles/globals.css'; // Import your global styles
import { deathNoticeProvider } from '../contexts/DeathNoticeContext'; // Import your context provider
import Header from '../app/components/Header'; // Import the Header component
import { UserProvider } from '../contexts/UserContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../app/components/ProtectedRoute';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // Check if the current route is in the member directory
    const isProtectedRoute = router.pathname.startsWith('/member');

    return (
        <UserProvider>
            <Header />
            {isProtectedRoute ? (
                <ProtectedRoute>
                    <Component {...pageProps} />
                </ProtectedRoute>
            ) : (
                <Component {...pageProps} />
            )}
        </UserProvider>
    );
}

export default MyApp;