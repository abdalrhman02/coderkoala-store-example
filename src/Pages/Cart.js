// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import ProductCard from '../Components/ProductCard';
import Product from '../Components/Product';
import OrderProduct from '../Components/OrderProducts';

function Cart() {
    return (
        <div className="cart-page">
            <Header />
            
            <div className='container'>
                <Sidebar />

                <div className='cart-page-content'>
                    <div className='the-order'>
                        <h1>سلة الطلبية</h1>
                        
                        <div className='order-list'>
                            <OrderProduct />
                            <OrderProduct />
                            <OrderProduct />
                        </div>
                    </div>

                    <div className='submit-order'>
                        <h2>تفاصيل و اتمام الطلبية</h2>

                        <div className='flex'>
                            <div className='info-form'>
                                <form>
                                    <div className='inp'>
                                        <label for='name'>الاسم</label>
                                        <input type='text' id='name' />
                                    </div>

                                    <div className='inp'>
                                        <label for='phoneNumber'>رقم الهاتف</label>
                                        <input type='text' id='phoneNumber' />
                                    </div>

                                    <div className='inp'>
                                        <label for='extraPhoneNumber'> رقم اضافي (اختياري)</label>
                                        <input type='text' id='extraPhoneNumber' />
                                    </div>

                                    <div className='inp'>
                                        <label for='area'>المنطقة/البلد</label>
                                        <select id='area'>
                                            <option>عكا</option>
                                            <option>نهاريا</option>
                                            <option>حيفا</option>
                                            <option>كابول</option>
                                        </select>
                                    </div>

                                    <div className='inp textareaInp'>
                                        <label for='note'>لديك ملاحظة ؟</label>
                                        <textarea type='text' id='note'></textarea>
                                    </div>

                                    <input type='submit' value='اتمام الطلبية' className='btn' />
                                </form>
                            </div>

                            <div className='order-details'>
                                <div className='price'>
                                    <p>السعر</p>
                                    <p className='n'>200$</p>
                                </div>

                                <div className='discount inp'>
                                    <p>كود خصم</p>
                                    <input type='text' placeholder='######' />
                                </div>

                                <hr></hr>

                                <div className='full-price'>
                                    <p>السعر شامل التوصيل</p>
                                    <p className='n'>210$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Cart;