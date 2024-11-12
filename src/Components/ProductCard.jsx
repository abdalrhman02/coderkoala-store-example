
function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={require('../Images/productImg.png')} />
            </div>

            <div className='product-info'>
                <h4 className='product-name'>DAYZ</h4>
                <button className='product-btn btn'>50$</button>
            </div>
        </div>
    )
}

export default ProductCard;