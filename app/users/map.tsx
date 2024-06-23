'use client';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

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

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/get_users', {
                method: 'GET',
                cache: 'no-cache'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
            localStorage.setItem('users', JSON.stringify(data)); // Cache users in local storage
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch users');
            setLoading(false);
        }
    };

    useEffect(() => {
        const cachedUsers = localStorage.getItem('users');
        if (cachedUsers) {
            setUsers(JSON.parse(cachedUsers));
            setLoading(false);
        } else {
            getUsers();
        }

        const interval = setInterval(() => {
            getUsers();
        }, 10000); // Fetch users every 10 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const deleteUser = async (userId: string) => {
        try {
            const response = await fetch('/api/delete_user', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: userId }),
            });

            if (response.ok) {
                const updatedUsers = users.filter(user => user.user_id !== userId);
                setUsers(updatedUsers);
                localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update cached users
                console.log('User deleted successfully');
            } else {
                console.log('Failed to delete user');
            }
        } catch (error) {
            console.log('Failed to delete user');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='bg-red-400 w-[80%] mx-auto h-[300px] overflow-y-auto p-2 mt-5 rounded-lg'>
                {users.length === 0 ? (
                    <div>No users found</div>
                ) : (
                    users.map((item: User) => (
                        <div 
                            key={item.id} 
                            className='user-card bg-yellow-200 card w-[80%] mx-auto mt-1 rounded-md p-2 flex flex-row justify-between'
                        >
                            <p className='card-title'>{item.user_names}</p>
                            
                            <button 
                                className='btn btn-ghost hover:text-red-500' 
                                onClick={(e: any) => {
                                    e.preventDefault();
                                    deleteUser(item.user_id);
                                }}
                            >
                                <FaTrash size={20} />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Page;
