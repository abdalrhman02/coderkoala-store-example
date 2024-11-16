import React, { useRef, useState } from "react";

// Components
import ProductCard from '../Components/ProductCard';
import AdminSideBar from '../Components/AdminSideBar';
import EditProduct from '../Components/EditProduct';

function AdminOrdersManagement() {


    return (
        <div className="admin-orders-management">
            <header>
                <img src={require('../Images/logo.png')} alt="Logo" />
                <p>الصفحة الخاصة بالمسؤول عن المتجر</p>
            </header>

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

            {/* <footer>
                <p>تواصل معنا بحالة واجهتك اي مشاكل</p>
            </footer> */}
        </div>
    );
}

export default AdminOrdersManagement;
