import { useEffect, useRef } from 'react';

function Product() {

    const mainImg = useRef();
    const images = useRef();

    useEffect(() => {
        if(images.current) {
            const imgs = images.current.querySelectorAll("img");

            imgs.forEach((img , ind) => {
                img.addEventListener('click' , () => {
                    mainImg.current.src = img.src
                })
            });
        }
    })

    return (
        <div className="product-comp">
            <div className="product-images">
                <div className='main-image-container'>
                    <img src={require('../Images/productPage/ghostdisc.png')} ref={mainImg} className='main-img' />
                </div>

                <div className='all-images' ref={images}>
                    <img src={require('../Images/productPage/2.png')}/>
                    <img src={require('../Images/productPage/3.png')}/>
                    <img src={require('../Images/productPage/4.png')}/>
                </div>
            </div>

            <div className='product-details'>
                <h2 className='product-name'>لعبة Ghost Of Tsushima بلايستيشن 4</h2>
                <h3 className='product-price'>70$</h3>

                <p className='product-description'>لعبة أكشن ومغامرات تدور أحداثها في اليابان الإقطاعية في أواخر القرن الثالث عشر. يتولى اللاعبون دور جين ساكاي، وهو محارب ساموراي يقاتل لحماية جزيرة تسوشيما من الغزو المغولي. تجمع اللعبة بين آليات التخفي والقتال. تتميز اللعبة بعالم مفتوح مليء بالاماكن المختلفة مثل الغابات الكثيفة والسهول الواسعة والقرى التاريخية، إلى جانب تقديم قصص جانبية ومهام متنوعة.</p>

                <button className='btn'>
                    <p>اضف للسلة</p>
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>

            <div className='favorite-icon'>
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
    )
}

export default Product;