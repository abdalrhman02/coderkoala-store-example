import { Link } from "react-router-dom";

function AdminSideBar() {
    return (
        <div className="admin-sidebar">
            <ul>
                <Link to={"/AdminProductManagement"}>
                    <li className="current">
                        <i className="fa-solid fa-box"></i>
                        <p>قائمة المنتجات</p>
                    </li>
                </Link>

                <Link to={"/AdminOrdersManagement"}>
                    <li>
                        <i className="fa-solid fa-rectangle-list"></i>
                        <p>الطلبيات</p>
                    </li>
                </Link>

                <Link to={"/AdminWebsiteEdits"}>
                    <li>
                        <i className="fa-solid fa-desktop"></i>
                        <p>تعديل الموقع</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default AdminSideBar;