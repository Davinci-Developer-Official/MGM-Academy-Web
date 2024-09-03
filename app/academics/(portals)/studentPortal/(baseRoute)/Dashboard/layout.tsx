'use client'
import { useEffect, useState } from "react";

export default function Layout({ children, upcoming, topDeals }: { children: React.ReactNode, upcoming: React.ReactNode, topDeals: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState(1); // Setting the default active tab to 1

    useEffect(() => {
        // Example effect (currently commented out)
        // function getUser() {
        //     const emailAddress = localStorage.getItem("s-email");
        //     //@ts-ignore
        //     setUser({ email: emailAddress });
        //     if (user.email === "") {
        //         // alert("failed localstorage");
        //         setUserError(true);
        //     }
        // }
        // getUser();
    }, [activeTab]);

    return (
        <div className=" h-screen flex flex-col background">
            <div role="tablist" className="tabs tabs-bordered justify-center p-2">
                <button
                    name="my_tabs_1"
                    role="tab"
                    className={`tab text-black lg:tooltip ${activeTab === 1 ? 'tab-active' : ''}`}
                    aria-label="Tab 1"
                    onClick={() => setActiveTab(1)}
                    data-tip="get all course info"
                >
                    My Courses
                </button>

                <button
                    name="my_tabs_1"
                    role="tab"
                    className={`tab text-black lg:tooltip ${activeTab === 3 ? 'tab-active' : ''}`}
                    aria-label="Tab 3"
                    onClick={() => setActiveTab(3)}
                    data-tip=" find courses "
                >
                    courses
                    <div className="badge badge-secondary text-white ml-1">new</div>
                    
                </button>

                <button
                    name="my_tabs_1"
                    role="tab"
                    className={`tab text-black lg:tooltip ${activeTab === 2 ? 'tab-active' : ''}`}
                    aria-label="Tab 2"
                    onClick={() => setActiveTab(2)}
                    data-tip="view notifications "
                >
                    notifications
                    <div className="badge badge-primary text-white ml-1">5</div>
                </button>
            </div>

            <div className="flex-1 overflow-auto p-2">
                {/* Content for the active tab */}
                {activeTab === 1 && (
                    <div role="tabpanel" className="tab-content p-10">{children}</div>
                )}
                {activeTab === 3 && (
                    <div role="tabpanel" className="tab-content p-10 w-full h-full">{topDeals}</div>
                )}
                {activeTab === 2 && (
                    <div role="tabpanel" className="tab-content p-10">{upcoming}</div>
                )}
                
            </div>
        </div>
    );
}
