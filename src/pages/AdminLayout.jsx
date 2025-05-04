import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const AdminLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <nav style={{ padding: "10px", backgroundColor: "#ddd" }}>
        <span style={{ marginRight: "15px", color: "black" }}>
          Welcome, {user?.name}
        </span>
        <Link to="/admin" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>
        <Link to="/admin/products" style={{ marginRight: "10px" }}>
          Products
        </Link>
        <Link to="/admin/add" style={{ marginRight: "10px" }}>
          Add Product
        </Link>
        <button onClick={handleLogout} style={{ marginLeft: "15px" }}>
          Logout
        </button>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
