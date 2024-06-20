'use client';
import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    user_id: string;
    user_names: string; 
    user_gender: string; 
    user_email: string; 
    user_phonenumber: string; 
    user_nation: string;
    user_verified: boolean; 
    user_password: string;
}

function Page() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const findUser:User[] = users.filter((item:User)=> item.user_verified == true )

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch('/api/get_users', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        }
        getUsers();
    }, [users]); // Only run once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='bg-red-400 w-[80%] mx-auto h-[300px]'>
            {users.length === 0 ? (
                <div>No users found </div>
            ) : (
                users.map((item: User) => (
                    <div key={item.id} className='bg-yellow-200 w-[80%] mx-auto mt-1 ' >
                        <p>{item.user_names}</p>
                        <p>{item.user_email}</p>
                        
                    </div>
                ))
            )}
        </div>
    );
}

export default Page;
