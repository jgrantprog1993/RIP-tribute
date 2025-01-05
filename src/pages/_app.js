import '../styles/globals.css'; // Import your global styles
import { ObituaryProvider } from '../app/Context/ObituaryContext'; // Import your context provider
import Header from '../app/components/Header'; // Import the Header component
import { UserProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Header />
            <Component {...pageProps} />
        </UserProvider>
       
    );
}

export default MyApp;