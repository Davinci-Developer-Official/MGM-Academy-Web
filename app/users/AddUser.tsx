'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface User {
    usernames: string;
    gender: string;
    email: string;
    phonenumber: string;
    nationality: string;
    verified: boolean;
    password: string;
}

function AddUser() {
    const [user, setUser] = useState<User>({
        usernames: "",
        gender: "",
        email: "",
        phonenumber: "",
        nationality: "",
        verified: false,
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    async function upload(e: FormEvent) {
        e.preventDefault();
        const response = await fetch('/api/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_names: user.usernames,
                user_gender: user.gender,
                user_email: user.email,
                user_phonenumber: user.phonenumber,
                user_nation: user.nationality,
                user_verified: user.verified,
                user_password: user.password
            })
        });
        if (response.ok) {
            alert('sent');
        } else {
            alert('not sent');
        }
    }

    return (
        <form onSubmit={upload} className='flex flex-col w-[80%] mx-auto bg-blue-500 h-[500px] p-2'>
            <h1 className='label'>Create account</h1>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your Names </label>
                <input
                    type='text'
                    name='usernames'
                    placeholder='Your full names'
                    className='h-full w-[60%] bg-white '
                    onChange={handleChange}
                    value={user.usernames}
                />
            </div>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your gender </label>
                <input
                    type='text'
                    name='gender'
                    placeholder='Your gender'
                    className='h-full w-[60%] bg-white '
                    onChange={handleChange}
                    value={user.gender}
                />
            </div>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your email </label>
                <input
                    type='email'
                    name='email'
                    placeholder='Your email'
                    className='h-full w-[60%] bg-white'
                    onChange={handleChange}
                    value={user.email}
                />
            </div>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your phone number </label>
                <input
                    type='text'
                    name='phonenumber'
                    placeholder='Your phone number'
                    className='h-full w-[60%] bg-white '
                    onChange={handleChange}
                    value={user.phonenumber}
                />
            </div>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your nation of residence </label>
                <input
                    type='text'
                    name='nationality'
                    placeholder='Your nation of residence'
                    className='h-full w-[60%] bg-white '
                    onChange={handleChange}
                    value={user.nationality}
                />
            </div>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your verified </label>
                <input
                    type='checkbox'
                    name='verified'
                    className='h-full w-[60%] bg-white '
                    onChange={handleChange}
                    checked={user.verified}
                />
            </div>

            <div className='flex flex-row p-2 bg-green-400 mt-1 justify-evenly rounded'>
                <label>Your password </label>
                <input
                    type='password'
                    name='password'
                    placeholder='Your password'
                    className='h-full w-[60%] bg-white'
                    onChange={handleChange}
                    value={user.password}
                />
            </div>

            <input type='submit' className='btn mt-2' value='Add User' />
        </form>
    );
}

export default AddUser;
