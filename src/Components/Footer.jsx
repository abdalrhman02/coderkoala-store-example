import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function Footer() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? (
        <footer>
            <div className="socials">
                <Link to={""}><img src={require('../Images/Socials/instagram.png')} /></Link>
                <Link to={""}><img src={require('../Images/Socials/facebook.png')} /></Link>
                <Link to={""}><img src={require('../Images/Socials/whatsapp.png')} /></Link>
            </div>
        </footer>
    ) : (
        <footer>
            <div className="socials">
                <Link to={""}><img src={require('../Images/Socials/instagram.png')} /></Link>
                <Link to={""}><img src={require('../Images/Socials/facebook.png')} /></Link>
                <Link to={""}><img src={require('../Images/Socials/whatsapp.png')} /></Link>
                <p>|</p>
                <p>المتجر التجريبي</p>
            </div>

            <p>برمجة و  تصميم شركة كودركوالا © 2024</p>
        </footer>
    )
}

export default Footer;