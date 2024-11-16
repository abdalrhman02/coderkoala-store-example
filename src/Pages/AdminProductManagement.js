import React, { useRef, useState } from "react";

// Components
import ProductCard from '../Components/ProductCard';
import AdminSideBar from '../Components/AdminSideBar';
import EditProduct from '../Components/EditProduct';

function AdminProductManagement() {

    let imgView = useRef();
    const handleFileChange = (ev) => {
        const file = ev.target.files[0];
        imgView.current.src = file
    }

    return (
        <div className="admin-product-management">
            <header>
                <img src={require('../Images/logo.png')} alt="Logo" />
                <p>الصفحة الخاصة بالمسؤول عن المتجر</p>
            </header>

            <div className="container">
                <AdminSideBar />

                <div className="products">
                    <div className="add-product">
                        <h1>اضف منتج جديد</h1>
                        <div className="product-form">
                            <form>
                                <div className="product-details">
                                    <div className="name-inp">
                                        <div className="inp">
                                            <label>اسم المنتج</label>
                                            <input type="text" required />
                                        </div>
                                    </div>

                                    <div className="price-inp">
                                        <div className="inp">
                                            <label>السعر</label>
                                            <input type="number" required />
                                        </div>
                                    </div>

                                    <div className="description-inp">
                                        <div className="inp">
                                            <label>الوصف</label>
                                            <textarea required />
                                        </div>
                                    </div>

                                    {/* <div className="target">
                                        <h4>موجه ل:</h4>
                                        <div className="options">
                                            <div className="opt">
                                                <input type="checkbox" value="اطفال" />
                                                <label>اطفال</label>
                                            </div>
                                            <div className="opt">
                                                <input type="checkbox" value="النساء" />
                                                <label>النساء</label>
                                            </div>
                                            <div className="opt">
                                                <input type="checkbox" value="الرجال" />
                                                <label>الرجال</label>
                                            </div>
                                            <div className="opt">
                                                <input type="checkbox" value="للجميع" />
                                                <label>للجميع</label>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="discount">
                                        <div className="inp">
                                            <label>خصم</label>
                                            <input type="number" placeholder="لا يوجد خصم حاليا؟ اتركه فارغا" />
                                        </div>
                                    </div>

                                    <div className="images-inp">
                                        <h4>الصور والفيديوهات</h4>
                                        <div className="add-imgs">
                                            <label className="drop-area">
                                                <input type="file" accept="image/*,video/" hidden onChange={handleFileChange} />

                                                <div className="img-view">
                                                    <img src={require('../Images/Icons/plus.png')} ref={imgView}
                                                        className="plus-icon"
                                                        alt="Add"
                                                    />
                                                </div>
                                            </label>

                                            <label className="drop-area">
                                                <input type="file" accept="image/*,video/" hidden onChange={handleFileChange} />

                                                <div className="img-view">
                                                    <img src={require('../Images/Icons/plus.png')} ref={imgView}
                                                        className="plus-icon"
                                                        alt="Add"
                                                    />
                                                </div>
                                            </label>

                                            <label className="drop-area">
                                                <input type="file" accept="image/*,video/" hidden onChange={handleFileChange} />

                                                <div className="img-view">
                                                    <img src={require('../Images/Icons/plus.png')} ref={imgView}
                                                        className="plus-icon"
                                                        alt="Add"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="more-options">
                                    
                                </div>

                                <div className="add-btn">
                                    <input type="submit" value='اضف المنتج' className="btn" />
                                </div>
                            </form>
                        </div>

                        <div className="products-list">
                            <h2>قائمة المنتجات</h2>
                            <select>
                                <option>اجهزة كونسل</option>
                                <option>العاب فيديو</option>
                                <option>شاشات</option>
                                <option>لابتوبات</option>
                                <option>مكاتب</option>
                            </select>

                            <div className="products">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>تواصل معنا بحالة واجهتك اي مشاكل</p>
            </footer>

            {/* <EditProduct /> */}
        </div>
        
    );
}

export default AdminProductManagement;
