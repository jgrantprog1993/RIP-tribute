import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('viewer');

    const handleAuth = async (e) => {
        e.preventDefault();
        const action = isLogin
            ? supabase.auth.signIn({ email, password })
            : supabase.auth.signUp({ email, password }, { data: { role } });

        const { user, error } = await action;
        if (error) console.error('Error:', error.message);
        else console.log('Success:', user);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white shadow-md rounded-lg p-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">
                        {isLogin ? 'Sign in to your account' : 'Sign up for an account'}
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleAuth}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Email address"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    {!isLogin && (
                        <div>
                            <label htmlFor="role" className="sr-only">Role</label>
                            <select id="role" name="role" required
                                    className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}>
                                <option value="viewer">Viewer</option>
                                <option value="contributor">Contributor</option>
                            </select>
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    {isLogin ? (
                        <>
                            <span>Already a member? </span>
                            <a href="#" onClick={() => setIsLogin(false)} className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
                        </>
                    ) : (
                        <>
                            <span>Not a member? </span>
                            <a href="#" onClick={() => setIsLogin(true)} className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthPage;