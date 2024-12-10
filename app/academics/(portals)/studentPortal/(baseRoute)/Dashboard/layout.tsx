'use client';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Layout({
    children,
    upcoming,
    topDeals
}: {
    children: React.ReactNode,
    upcoming: React.ReactNode,
    topDeals: React.ReactNode
}) {
    const [activeTab, setActiveTab] = useState(1); // Default active tab to 1
    const [userName, setUserName] = useState<string >();
    const [loading, setLoading] = useState<boolean>(true); // Loading state to show the content while data is fetched

    useEffect(() => {
        // Retrieve the user's name from cookies
        const user = Cookies.get('s-user');
        //alert(user)
        if (user!=="") {
            setUserName(user); // Set the user name if available
        }
        setLoading(false); // Set loading to false after fetching data
    }, [userName]);

    return (
        <div className="h-screen w-full p-1 flex flex-col bg-gray-100 dark:bg-gray-900">
            {/* Welcome Banner */}
            <div className="p-4 bg-indigo-600 text-white shadow-md">
                <h1 className="text-lg font-bold">
                    {loading ? (
                        <span>Loading...</span> // Show loading message while fetching user data
                    ) : userName ? (
                        `Welcome back, ${JSON.parse(userName)}!` // Show user name if available
                    ) : (
                        "Welcome to Your Dashboard!" // Fallback message if user name is not available
                    )}
                </h1>
                <p className="text-sm">Manage your courses, notifications, and more in one place.</p>
            </div>

            {/* Tabs */}
            <div role="tablist" className="tabs justify-center bg-gray-200 p=2 shadow-inner py-2">
                <button
                    name="tab_my_courses"
                    role="tab"
                    className={`tab px-4 py-1 font-medium rounded-t-lg ${activeTab === 1 ? 'bg-white text-indigo-600 shadow' : 'text-gray-600'}`}
                    aria-label="Tab 1"
                    onClick={() => setActiveTab(1)}
                >
                    My Courses
                </button>
                <button
                    name="tab_courses"
                    role="tab"
                    className={`tab px-4 py-1 font-medium rounded-t-lg ${activeTab === 3 ? 'bg-white text-indigo-600 shadow' : 'text-gray-600'}`}
                    aria-label="Tab 3"
                    onClick={() => setActiveTab(3)}
                >
                    Courses
                    <span className="badge badge-secondary text-white ml-1">New</span>
                </button>
                <button
                    name="tab_notifications"
                    role="tab"
                    className={`tab px-4 py-1 font-medium rounded-t-lg ${activeTab === 2 ? 'bg-white text-indigo-600 shadow' : 'text-gray-600'}`}
                    aria-label="Tab 2"
                    onClick={() => setActiveTab(2)}
                >
                    Notifications
                    <span className="badge badge-primary text-white ml-1">5</span>
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto p-6">
                {activeTab === 1 && (
                    <div role="tabpanel" className="tab-content bg-white dark:bg-gray-900 p-6 rounded-md ">
                        {children}
                    </div>
                )}
                {activeTab === 3 && (
                    <div role="tabpanel" className="tab-content bg-white dark:bg-gray-900 p-6 rounded-md ">
                        {topDeals}
                    </div>
                )}
                {activeTab === 2 && (
                    <div role="tabpanel" className="tab-content bg-white dark:bg-gray-900 p-6 rounded-md ">
                        {upcoming}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-center text-sm text-gray-500 border-t">
                © 2024 MGM institute All rights reserved.
            </div>
        </div>
    );
}
