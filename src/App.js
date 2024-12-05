// Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Title from './Components/Title';
import ProductCard from './Components/ProductCard';
import Comment from './Components/Comment';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='homepage'>
        <div className='container'>
          <Sidebar />
          
          <div className='homepage-content'>
            <div className='intro'>
              <div className='image'>
                <img src={require('./Images/laptop.png')} />
              </div>

              <div className='text'>
                <h1>احصل على اللابتوب المثالي المناسب لتلبية كل احتياجاتك في دراستك و عملك</h1>
                <p>متوفر توصيل الى كل المناطق</p>
                <button className='btn'>اطلبه الان</button>
              </div>
            </div>

            <div className='features'>
              <div className='fea'>
                <img src={require('./Images/Icons/100-percent.png')} />
                <p>ضمان على جميع المنتجات لمدة سنة كاملة</p>
              </div>

              <div className='fea'>
                <img src={require('./Images/Icons/delivery-man.png')} />
                <p>توصيل سريع و امن نضمن سلامة منتجك من اي كسر او خراب</p>
              </div>

              <div className='fea'>
                <img src={require('./Images/Icons/discount-tag.png')} />
                <p>عروض و خصومات طوال الوقت</p>
              </div>
            </div>

            <div className='products'>
              <Title />

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
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <div className='comments'>
              <Title />
              <div className='comments-list'>
                <Comment />
                <Comment />
                <Comment />
                <Comment /> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;