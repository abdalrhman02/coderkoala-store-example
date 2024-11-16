import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function OrderProduct() {

    let [countNum, setCountNum] = useState(1);
    const plus = useRef();
    const minus = useRef();

    let counterP = () => {
        setCountNum(countNum + 1);
        console.log(countNum)
    }
    let counterM = () => {
        if (countNum == 1 ) {
            return
        } else {
            setCountNum(countNum - 1);
        }
    }
    

    return (
        <div className="order-product">
            <div className='product-img-name'>
                <img src={require('../Images/product-example.png')} />
                <h3 className='product-name'>لعبة SACKBOY</h3>
            </div>

            <h3 className='product-price'>70$</h3>

            <div className='count'>
                <p ref={plus} onClick={counterP}><i class="fa-solid fa-plus"></i></p>
                <p>{countNum}</p>
                <p ref={minus} onClick={counterM}><i class="fa-solid fa-minus"></i></p>
            </div>

            <Link to={"#"} className='product-page'><p>صفحة المنتج</p></Link>

            <div className='delete'>
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
    )
}

export default OrderProduct;