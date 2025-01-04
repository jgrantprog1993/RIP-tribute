import '../styles/globals.css'; // Import your global styles
import { ObituaryProvider } from '../app/Context/ObituaryContext'; // Import your context provider
import Header from '../app/components/Header'; // Import the Header component

function MyApp({ Component, pageProps }) {
    return (
        <ObituaryProvider>
            <Header />
            <Component {...pageProps} />
        </ObituaryProvider>
    );
}

export default MyApp;