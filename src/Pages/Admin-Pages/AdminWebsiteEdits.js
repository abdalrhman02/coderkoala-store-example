import React, { useRef, useState } from "react";

// Components
import ProductCard from '../../Components/ProductCard';
import Comment from '../../Components/Comment';
import AdminHeader from '../../Components/Admin-Pages-Comps/AdminHeader'
import AdminFooter from '../../Components/Admin-Pages-Comps/AdminFooter'
import AdminSideBar from '../../Components/Admin-Pages-Comps/AdminSideBar';

function AdminWebsiteEdits() {
    // Edit Windows Refs
    const introEdit = useRef();

    const [introImage, setIntroImage] = useState(null);

    const exitEditWindow = (e) => {
        let editWindow = e.target.closest('.edit-window');
        editWindow.classList.add('disNone');
        editWindow.classList.remove('disBlock');
    }

    const openEditWindow = (e) => {
        let editWindow = e.target.closest('.edit-window');
        editWindow.classList.add('disBlock')
        editWindow.classList.remove('disNone')
    }

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updatedImages = [introImage];
            updatedImages[index] = URL.createObjectURL(file);
            setIntroImage(updatedImages);
        }
    };

    return (
        <div className="admin-website-edits">
            <AdminHeader />

            <div className="container">
                <AdminSideBar />

                <div className="website-edits">
                    <div className="title-2">
                        <h1>التعديل على الموقع</h1>
                        <p>هنا يمكنك التعديل على اغلب تفاصيل الموقع من الشعار حتى الاقسام المختلفة</p>
                    </div>

                    <div className="elements-edit">
                        {/* Logo */}
                        <div className="logo">
                            <div className="edit-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                            <img src={require('../../Images/logo.png')} />
                        </div>

                        {/* Intro (Hero) */}
                        <div className="edit-window disNone" data-section='intro'>
                            <div className="edit intro-edit">
                                <div className="exit" onClick={exitEditWindow}>
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </div>

                                <h2>تعديل مقدمة الموقع</h2>

                                <form>
                                    <div className="inp">
                                        <label>العنوان الرئيسي:</label>
                                        <input type="text" value={''} />
                                    </div>

                                    <div className="inp">
                                        <label>جملة قصيرة:</label>
                                        <input type="text" value={''} />
                                    </div>

                                    <label className="drop-area">
                                        <input type="file" accept="image/*,video/" hidden
                                            onChange={(e) => handleImageChange(e)}
                                        />

                                        <div className="img-view"
                                            style={{
                                                backgroundImage: `url(${introImage})`,
                                                backgroundSize: 'contain',
                                                backgroundPosition: 'center',
                                            }}
                                        >

                                            <img src={require('../../Images/Icons/plus.png')}
                                                className="plus-icon"
                                                alt="Add"
                                            />
                                        </div>
                                    </label>
                                </form>

                                <div className='intro'>
                                    <div className='image'>
                                        <img src={require('../../Images/laptop.png')} />
                                    </div>

                                    <div className='text'>
                                        <h1>احصل على اللابتوب المثالي المناسب لتلبية كل احتياجاتك في دراستك و عملك</h1>
                                        <p>متوفر توصيل الى كل المناطق</p>
                                        <button className='btn'>اطلبه الان</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='intro'>
                            <div className="edit-icon" onClick={openEditWindow}>
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>

                            <div className='image'>
                                <img src={require('../../Images/laptop.png')} />
                            </div>

                            <div className='text'>
                                <h1>احصل على اللابتوب المثالي المناسب لتلبية كل احتياجاتك في دراستك و عملك</h1>
                                <p>متوفر توصيل الى كل المناطق</p>
                                <button className='btn'>اطلبه الان</button>
                            </div>
                        </div>


                        {/* Features */}
                        <div className="edit-window disNone" data-section='features'>
                            <div className="edit features-edit">
                                <div className="exit" onClick={exitEditWindow}>
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </div>

                                <h2>تعديل مميزات المتجر</h2>

                                <div className="features-inps">
                                    <div className='fea'>
                                        <img src={require('../../Images/Icons/100-percent.png')} />
                                        <div className="inp">
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className='fea'>
                                        <img src={require('../../Images/Icons/delivery-man.png')} />
                                        <div className="inp">
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className='fea'>
                                        <img src={require('../../Images/Icons/discount-tag.png')} />
                                        <div className="inp">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className='features'>
                                    <div className='fea'>
                                        <img src={require('../../Images/Icons/100-percent.png')} />
                                        <p>ضمان على جميع المنتجات لمدة سنة كاملة</p>
                                    </div>

                                    <div className='fea'>
                                        <img src={require('../../Images/Icons/delivery-man.png')} />
                                        <p>توصيل سريع و امن نضمن سلامة منتجك من اي كسر او خراب</p>
                                    </div>

                                    <div className='fea'>
                                        <img src={require('../../Images/Icons/discount-tag.png')} />
                                        <p>عروض و خصومات طوال الوقت</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='features'>
                            <div className="edit-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                            
                            <div className='fea'>
                                <img src={require('../../Images/Icons/100-percent.png')} />
                                <p>ضمان على جميع المنتجات لمدة سنة كاملة</p>
                            </div>

                            <div className='fea'>
                                <img src={require('../../Images/Icons/delivery-man.png')} />
                                <p>توصيل سريع و امن نضمن سلامة منتجك من اي كسر او خراب</p>
                            </div>

                            <div className='fea'>
                                <img src={require('../../Images/Icons/discount-tag.png')} />
                                <p>عروض و خصومات طوال الوقت</p>
                            </div>
                        </div>


                        {/* Products Title */}
                        <div className="edit-window disNone" data-section='products-title'>
                            <div className="edit products-comments-title">
                                <div className="exit" onClick={exitEditWindow}>
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </div>

                                <h2>عنوان المنتوجات</h2>

                                <div className="inp">
                                    <label>ضع عنوان مناسب:</label>
                                    <input type="text" />
                                </div>

                                <div className="title">
                                    <div className="edit-icon">
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </div>
                                    <h2>بعض من منتجاتنا</h2>
                                </div>
                            </div>
                        </div>
                        <div className="title">
                            <div className="edit-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                            <h2>بعض من منتجاتنا</h2>
                        </div>

                        {/* Products */}
                        <div className="edit-window disNone" data-section='products'>
                            <div className="edit products-edit">
                                <div className="exit" onClick={exitEditWindow}>
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </div>

                                <h2>اضف المنتجات الرئيسية</h2>
                                <p>يفضل ان لا تزيد عن 14 منتج</p>

                                <div className="products-list">
                                    <select>
                                        <option>اجهزة كونسل</option>
                                        <option>العاب الكترونية</option>
                                        <option>شاشات</option>
                                        <option>لابتوبات</option>
                                        <option>مكاتب</option>
                                    </select>

                                    <div className='products'>
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

                                <h2>المنتجات المعروضة في الصفحة الرئيسية</h2>
                                <div className='selected-products'>
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
                        <div className='products'>
                            <div className="edit-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>

                            <div className='products-list'>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
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
                        
                        
                        {/* Comment Title */}
                        <div className="edit-window disNone" data-section='comments-title'>
                            <div className="edit products-comments-title">
                                <div className="exit" onClick={exitEditWindow}>
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </div>

                                <h2>عنوان للتعليقات</h2>

                                <div className="inp">
                                    <label>ضع عنوان مناسب:</label>
                                    <input type="text" />
                                </div>

                                <div className="title">
                                    <div className="edit-icon">
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </div>
                                    <h2>تعليقات زبائننا</h2>
                                </div>
                            </div>
                        </div>
                        <div className="title">
                            <div className="edit-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                            <h2>تعليقات زبائننا</h2>
                        </div>

                        {/* Comment */}
                        <div className="edit-window disNone" data-section='comments'>
                            <div className="edit products-comments-title">
                                <div className="exit" onClick={exitEditWindow}>
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </div>

                                <h2>تعليقات الزبائن</h2>
                                <p>هنا يمكنك اختيار تعليقات زبائنك</p>

                                

                                <h2>قسم التعليقات</h2>
                                <p>هكذا سيبدوا قسم التعليقات في موقعك</p>
                                <div className='comments'>
                                    <div className='comments-list'>
                                        <Comment />
                                        <Comment />
                                        <Comment />
                                        <Comment /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='comments'>
                            <div className="edit-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>

                            <div className='comments-list'>
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment /> 
                            </div>
                        </div>
                    </div>

                    <div className="delivery-edit">
                        <div className="title-2">
                            <h1>اسعار التوصيل</h1>
                            <p>اضف مناطق التوصيل حسب رغبتك</p>
                        </div>

                        <div className="areas-form">
                            <form>
                                <div className="inp">
                                    <label>المنطقة/البلدة</label>
                                    <input type="text"  />
                                </div>

                                <div className="inp">
                                    <label>سعر التوصيل</label>
                                    <input type="number"  />
                                </div>

                                <input type="submit" value="اضف" className="btn" />
                            </form>

                            <div className="areas-list">
                                <div className="area">
                                    <p>القدس - 50 شيقل</p>
                                </div>

                                <div className="area">
                                    <p>النقب - 60 شيقل</p>
                                </div>

                                <div className="area">
                                    <p>عكا - 30 شيقل</p>
                                </div>
                                
                                <div className="area">
                                    <p>حيفا - 30 شيقل</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AdminFooter />
        </div>
    )
}

export default AdminWebsiteEdits;