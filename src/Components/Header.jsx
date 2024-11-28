import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? (
        <header className='header-mobile'>
            <div className='container'>
                <div className='bar'>
                    <i class="fa-solid fa-bars"></i>
                </div>

                <div className="logo">
                    <img className='logo-img' src={require('../Images/logo.png')} />

                    <div className='search'>
                        <div className='search-icon'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input className='' type='text' placeholder='ابحث عن منتج' />
                    </div>
                </div>

                <div className='cart'>
                    <i class="fa-regular fa-heart"></i>
                    <Link to={'Cart'}><i class="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </header>
    ) : (
        <header className='header-monitor'>
            <div className='container'>
                <div className="logo">
                    <img className='logo-img' src={require('../Images/logo.png')} />
                </div>

                <div className='search'>
                    <div className='search-icon'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input className='' type='text' placeholder='ابحث عن منتج' />
                </div>

                <div className='cart'>
                    <i class="fa-regular fa-heart"></i>
                    <Link to={'/Cart'}><i class="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;