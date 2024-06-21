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

    useEffect(() => {
        async function getUsers() {
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
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        }
        getUsers();
    }, []); // Only run once when the component mounts

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
                setUsers(users.filter(user => user.user_id !== userId));
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
        <div className='bg-red-400 w-[80%] mx-auto h-[300px] overflow-y-auto'>
            {users.length === 0 ? (
                <div>No users found</div>
            ) : (
                users.map((item: User) => (
                    <div 
                        key={item.id} 
                        className='bg-yellow-200 w-[80%] mx-auto mt-1 rounded p-2 cursor-pointer flex flex-row justify-between'
                    >
                        <p>{item.user_names}</p>
                        
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
    );
}

export default Page;

