import React, { useRef, useState } from "react";

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProfileSidebar from '../../Components/ProfileSidebar';
import ProductCard from '../../Components/ProductCard';

function ProfilePage() {

    const orderHistory = [
        {id:425912 , customerName:'احمد' , town:'عكا' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:170 , status:'done' , note:"NoteHere", products: ["Product-1" , "Product-2"] },
        {id:612422 , customerName:'احمد' , town:'عكا' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:130 , status:'waiting' , note:"NoteHere" , products: ["Product-1" , "Product-2"] },
        {id:927557 , customerName:'احمد' , town:'عكا' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:60 , status:'waiting' , note:"NoteHere" , products: ["Product-1" , "Product-2"] },
    ]

    const [expandOrder, setExpandOrder] = useState(null);
    const toggleOrderDetails = (orderId) => {
        setExpandOrder(expandOrder === orderId ? null : orderId);
    };

  return (
    <div className="profile-page">
        <Header />

        <div className='container'>
            <ProfileSidebar />

            <div className='profile-content'>
                <div className='title-2'>
                    <h2>الحساب الشخصي</h2>
                    <p>بياناتك الشخصية الخاصة بالمتجر</p>
                </div>

                <div className='profile-account'>
                    <div className='pr-image'>
                        <img src={require('../../Images/user.png')} />
                    </div>
                    
                    <div className='name-email'>
                        <h3 className='pr-name'>عبدالرحمن ابوجاموس</h3>
                        <p className='pr-email'>90abdo901@gmail.com</p>
                    </div>
                </div>

                <div className='favorite-orderHistory'>
                    <div className='favorite'>
                        <h2 className="title-2">قائمة المفضلة:</h2>
                        <div className='products'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>

                    <div className='order-history'>
                        <h2 className="title-2">المشتريات السابقة:</h2>

                        <div className='the-orders'>
                            {orderHistory.map((order) => (
                                <React.Fragment key={order.id}>
                                    <div className='order' onClick={() => toggleOrderDetails(order.id)}>
                                        <div className='expandIcon'>
                                            <img src={require('../../Images/Icons/arrow-down.png')} />
                                        </div>

                                        <div>{order.id}</div>
                                        -
                                        <div>{order.price}$</div>
                                        -
                                        <div>{order.date}</div>
                                        -
                                        <div className={`status ${order.status}`}>
                                            <p>
                                                {order.status === "waiting" && "انتظار"}
                                                {order.status === "done" && "تم"}
                                                {order.status === "canceled" && "الغاء"}
                                                {order.status === "delivery" && "توصيل"}
                                            </p>
                                        </div>
                                    </div>

                                    {expandOrder === order.id && (
                                        <div className="order-details">
                                            <h4>الطلبية:</h4>
                                            <ul>
                                                {order.products.map((product, index) => (
                                                    <li key={index}>{product}</li>
                                                ))}
                                            </ul>
                                        </div>        
                                    )}


                                </React.Fragment>
                            ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
}

export default ProfilePage;