
function Comment() {
    return (
        <div className="comment">
            <div className="customer-info">
                <img src={require('../Images/user.png')} />
                <h3>اسم الزبون هنا</h3>
            </div>

            <div className='customer-comment'>
                <p>التعليق يكتب هنا :)</p>
            </div>
        </div>
    )
}

export default Comment;