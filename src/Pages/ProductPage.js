// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import ProductCard from '../Components/ProductCard';
import Product from '../Components/Product';

function ProductPage() {
    return (
        <div className="product-page">
            <Header />
            
            <div className='container'>
                <Sidebar />

                <div className='product-page-content'>
                    <Product />

                    <div className='related-products'>

                        <div className='title-2'>
                            <h2>منتجات ذات صلة:</h2>
                        </div>

                        <div className='products-list'>
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

            <Footer />
        </div>
    )
}

export default ProductPage;