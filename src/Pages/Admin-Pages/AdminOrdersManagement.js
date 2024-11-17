import React, { useRef, useState } from "react";

// Components
    import AdminHeader from '../../Components/Admin-Pages-Comps/AdminHeader'
    import AdminFooter from '../../Components/Admin-Pages-Comps/AdminFooter'
import AdminSideBar from '../../Components/Admin-Pages-Comps/AdminSideBar';

function AdminOrdersManagement() {


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
                    </div>
                </div>
            </div>

            {/* <AdminFooter /> */}
        </div>
    );
}

export default AdminOrdersManagement;
