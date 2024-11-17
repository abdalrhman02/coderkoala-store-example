import React, { useState } from "react";

// Components
import AdminHeader from '../../Components/Admin-Pages-Comps/AdminHeader'
import AdminFooter from '../../Components/Admin-Pages-Comps/AdminFooter'
import ProductCard from '../../Components/ProductCard';
import AdminSideBar from '../../Components/Admin-Pages-Comps/AdminSideBar';
import Product from "../../Components/Product";

function AdminProductManagement() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [discount, setDiscount] = useState("");
    
    const [nameVal, setNameVal] = useState(false);
    const [priceVal, setPriceVal] = useState(false);
    const [imageVal, setImageVal] = useState(false);

    const [images, setImages] = useState([null, null, null]);

    const productSubmit = (e) => {
        e.preventDefault();

        // After added product all values should back to false :)
        setNameVal(false);
        setPriceVal(false);
        setImageVal(false);

        if (/^\s*$|^\d+$/.test(productName)) { setNameVal(true); }
        if (/^\s*$/.test(productPrice)) { setPriceVal(true); }
        if (!images.some(image => image !== null)) { setImageVal(true); }
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = URL.createObjectURL(file);
            setImages(updatedImages);
        }
    };

    return (
        <div className="admin-product-management">
            <AdminHeader />

            <div className="container">
                <AdminSideBar />

                <div className="products">
                    <div className="add-product">
                        <h1>اضف منتج جديد</h1>
                        <div className="product-form">
                            <form onSubmit={productSubmit}>
                                <div className="product-details">
                                    <div className="name-inp">
                                        <div className="inp">
                                            <label>اسم المنتج</label>
                                            <input type="text" value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                            />
                                            {nameVal && <span className="error" style={{marginTop:"5px", color:"#af0000"}}>لا يمكن ان يكون الاسم فارغا</span>}
                                        </div>
                                    </div>

                                    <div className="price-inp">
                                        <div className="inp">
                                            <label>السعر</label>
                                            <input type="number" value={productPrice}
                                                onChange={(e) => setProductPrice(e.target.value)}
                                            />
                                            {priceVal && <span className="error"  style={{marginTop:"5px", color:"#af0000"}}>لا يمكن ان يكون السعر فارغا</span>}
                                        </div>
                                    </div>

                                    <div className="description-inp">
                                        <div className="inp">
                                            <label>الوصف</label>
                                            <textarea value={productDescription}
                                                onChange={(e) => setProductDescription(e.target.value)}
                                                placeholder="يفضل ان لا يكون فارغا"
                                            />
                                        </div>
                                    </div>

                                    <div className="discount">
                                        <div className="inp">
                                            <label>خصم</label>
                                            <input type="number" value={discount}
                                                onChange={(e) => setDiscount(e.target.value)}
                                                placeholder="لا يوجد خصم حاليا؟ اتركه فارغا"
                                            />
                                        </div>
                                    </div>

                                    <div className="images-inp">
                                        <h4>الصور والفيديوهات</h4>
                                        <div className="add-imgs">
                                            {Array.from({ length: 3 }, (_, index) => (
                                                <label key={index} className="drop-area">
                                                    <input
                                                        type="file"
                                                        accept="image/*,video/"
                                                        hidden
                                                        onChange={(e) => handleImageChange(e, index)}
                                                    />
                                                    <div
                                                        className="img-view"
                                                        style={{
                                                            backgroundImage: `url(${images[index]})`,
                                                            backgroundSize: 'contain',
                                                            backgroundPosition: 'center',
                                                        }}
                                                    >
                                                        {!images[index] && (
                                                            <img
                                                                src={require('../../Images/Icons/plus.png')}
                                                                className="plus-icon"
                                                                alt="Add"
                                                            />
                                                        )}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                        {imageVal && <span className="error" style={{color:"#af0000"}}>يجب اضافة صورة واحدة على الاقل.</span>}
                                    </div>
                                </div>

                                <div className="add-btn">
                                    <input type="submit" value="اضف المنتج" className="btn" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="products-list">
                        <h2>قائمة المنتجات</h2>
                        <select>
                            <option>اجهزة كونسل</option>
                            <option>العاب الكترونية</option>
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
                        </div>
                    </div>
                </div>
            </div>

            <AdminFooter />
        </div>
    );
}

export default AdminProductManagement;
