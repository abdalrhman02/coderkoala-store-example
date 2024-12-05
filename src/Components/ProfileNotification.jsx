
function ProfileNotification() {
    return (
        <div className="profile-notification">
            <div className="noti-image">
                <img src={require('../Images/Icons/cart-noti.png')} />
            </div>

            <div className='title-msg'>
                <h2 className='noti-title'>اغراض في سلتك</h2>
                <p className='noti-message'>لقد وضعت منتجات في سلتك و لم تقم بالطلبية الى الان!</p>
            </div>

            <p className='date'>11/11/2024</p>
        </div>
    )
}

export default ProfileNotification;