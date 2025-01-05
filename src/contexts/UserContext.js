import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
        const subscription = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('session');
            console.log(subscription);
            setUser(session);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const fetchUser = async () => {
        const user = supabase.auth.user;
        setUser(user);
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}; 