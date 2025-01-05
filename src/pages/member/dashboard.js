import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';

function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {

        const { data: { user } } = await supabase.auth.getUser()
        // console.log(user);
        // const user = supabase.auth.user;
        if (!user) {
            router.push('/auth'); // Redirect to login if not authenticated
        } else {
            setUser(user);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white shadow-md rounded-lg p-8">
                <h1 className="text-center text-2xl font-bold">Dashboard</h1>
                {user ? (
                    <p>User: {user.user_metadata.firstName} is logged in</p> // Display user's first name
                ) : (
                    <p>Loading user information...</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
