// src/components/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        console.log('Protected Route - User:', user);
        
        if (!user && router.pathname.startsWith('/member')) {
            router.push('/auth');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return children;
};

export default ProtectedRoute;