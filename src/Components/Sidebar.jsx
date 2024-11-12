import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Sidebar() {

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
                            <img src={require('../Images/Sidebar-Icons/gadgets.png')} />
                            <p>كل المنتجات</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/laptop.png')} />
                            <p>لابتوبات</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/monitor.png')} />
                            <p>شاشات</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/apple.png')} />
                            <p>ابل</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/playstation.png')} />
                            <p>بلايستيشن</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/xbox.png')} />
                            <p>اكسبوكس</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/nintendo.png')} />
                            <p>نينتيندو</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to={''}>
                        <div className="section">
                            <img src={require('../Images/Sidebar-Icons/table.png')} />
                            <p>مكاتب</p>
                        </div>
                    </Link>
                </li>



            </ul>

            
        </div>
    )
}

export default Sidebar;