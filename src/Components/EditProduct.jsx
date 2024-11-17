// Components
import AdminSideBar from './Admin-Pages-Comps/AdminSideBar';
import Product from '../Components/Product';

function EditProduct() {
    return (
        <div className="edit-product">
            {/* <header>
                <img src={require('../Images/logo.png')} alt="Logo" />
                <p>الصفحة الخاصة بالمسؤول عن المتجر</p>
            </header> */}

            <div className="container">
                <AdminSideBar />

                <div className='product'>
                    <h1>التعديل على المنتج</h1>

                    <div className='current-info'>
                        <Product />
                    </div>
                </div>
            </div>

            {/* <footer>
                <p>تواصل معنا بحالة واجهتك اي مشاكل</p>
            </footer> */}
        </div>
    )
}

export default EditProduct;