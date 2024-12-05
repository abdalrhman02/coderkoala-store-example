import React, { useRef, useState } from "react";

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProfileSidebar from '../../Components/ProfileSidebar';
import ProfileNotification from '../../Components/ProfileNotification';

function Notifications() {
    return (
        <div className="notifications-page">
            <Header />

            <div className="container">
                <ProfileSidebar />

                <div className="notifications-content">
                    <div className='title-2'>
                        <h2>الاشعارات</h2>
                        <p>الاشعارات و رسائلك الخاصة</p>
                    </div>

                    <div className="notis">
                        <ProfileNotification />
                        <ProfileNotification />
                        <ProfileNotification />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Notifications;