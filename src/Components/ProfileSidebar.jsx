import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function ProfileSidebar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/Profile-page/user.png')} />
                            <p>الحساب الشخصي</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/Profile-page/notification.png')} />
                            <p>الاشعارات</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/Profile-page/logout.png')} />
                            <p style={{color:'red'}}>تسجيل الخروج</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileSidebar;