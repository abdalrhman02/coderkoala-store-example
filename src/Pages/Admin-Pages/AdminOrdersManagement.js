import React, { useRef, useState } from "react";

// Components
import AdminHeader from '../../Components/Admin-Pages-Comps/AdminHeader'
import AdminFooter from '../../Components/Admin-Pages-Comps/AdminFooter'
import AdminSideBar from '../../Components/Admin-Pages-Comps/AdminSideBar';
import ProductCard from '../../Components/ProductCard';

function AdminOrdersManagement() {

    const orders = [
        {id:425912 , customerName:'احمد' , town:'عكا' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:170 , status:'done' , note:"NoteHere", products: ["Product-1" , "Product-2"] },
        {id:612422 , customerName:'سامي' , town:'ناصرة' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:130 , status:'waiting' , note:"NoteHere" , products: ["Product-1" , "Product-2"] },
        {id:927557 , customerName:'سمر' , town:'حيفا' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:60 , status:'waiting' , note:"NoteHere" , products: ["Product-1" , "Product-2"] },
        {id:206278 , customerName:'صلاح' , town:'القدس' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:240 , status:'done' , note:"NoteHere" , products: ["Product-1" , "Product-2"] },
        {id:290512 , customerName:'محمد' , town:'القدس' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:350 , status:'canceled' , note:"NoteHere" , products: ["Product-1" , "Product-2"] },
        {id:261062 , customerName:'مريم' , town:'طمرة' , phone:'0909090909' , altPhone:'0808080808' , date:'11/11/2024' , price:150 , status:'delivery' , note:"NoteHere" , products: ["Product-1" , "Product-2"] }
    ]

    const [expandOrder, setExpandOrder] = useState(null);

    const toggleOrderDetails = (orderId) => {
        setExpandOrder(expandOrder === orderId ? null : orderId);
    };

    return (
        <div className="admin-orders-management">
            <AdminHeader />

            <div className="container">
                <AdminSideBar />

                <div className="orders-content">
                    <div className="title-2">
                        <h1>ادارة الطلبيات</h1>
                        <p>جميع الطلبيات و تفاصيلها تجدها هنا</p>
                    </div>

                    <div className="orders-table">
                        <div className="orders-types">
                            <ul>
                                <li>جميع الطلبيات</li>
                                <li>انتظار</li>
                                <li>مع المرسل</li>
                                <li>تمت</li>
                                <li>ملغية</li>
                            </ul>
                        </div>
                        
                        <div className="search-orders-counter">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="ابحث حسب رقم الطلبية , البلد او اسم الزبون" />
                            </div>

                            <div className="orders-counter">
                                <p>عدد الطلبيات: 8</p>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>رقم الطلبية</th>
                                    <th>اسم الزبون</th>
                                    <th>البلد</th>
                                    <th>رقم الهاتف</th>
                                    <th>تاريخ الطلبية</th>
                                    <th>المبلغ</th>
                                    <th>حالة الطلبية</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((order) => (
                                    <React.Fragment key={order.id}>
                                        <tr onClick={() => toggleOrderDetails(order.id)}>
                                            <td>{order.id}</td>
                                            <td>{order.customerName}</td>
                                            <td>{order.town}</td>
                                            <td>{order.phone}</td>
                                            <td>{order.date}</td>
                                            <td>₪{order.price}</td>
                                            <td>
                                                <div className={`status ${order.status}`}>
                                                    <p>
                                                        {order.status === "waiting" && "انتظار"}
                                                        {order.status === "done" && "تم"}
                                                        {order.status === "canceled" && "الغاء"}
                                                        {order.status === "delivery" && "توصيل"}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        {expandOrder === order.id && (
                                            <tr>
                                                <td colSpan="7" style={{backgroundColor:"#fff"}}>
                                                    <div className="order-details">
                                                        <h4>تفاصيل الطلبية:</h4>
                                                        <ul>
                                                            {order.products.map((product, index) => (
                                                                <li key={index}>{product}</li>
                                                            ))}
                                                        </ul>

                                                        <br />

                                                        <h4>ملاحظة الزبون:</h4>
                                                        <p>{order.note}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* <AdminFooter /> */}
        </div>
    );
}

export default AdminOrdersManagement;
