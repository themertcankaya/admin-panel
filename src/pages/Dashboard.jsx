import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.products.products);

  return (
    <section>
      <h2>Admin Dashboard</h2>
      <p style={{ marginBottom: "20px" }}>
        Welcome, <strong>{user?.name}</strong> 👋
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            backgroundColor: "#eaeaea",
            padding: "20px",
            borderRadius: "8px",
            flex: 1,
            textAlign: "center",
            color: "black",
          }}
        >
          <h3>Total Products</h3>
          <p style={{ fontSize: "24px" }}>{products.length}</p>
        </div>

        <div
          style={{
            backgroundColor: "#eaeaea",
            padding: "20px",
            borderRadius: "8px",
            flex: 1,
            textAlign: "center",
            color: "black",
          }}
        >
          <h3>New Notifications</h3>
          <p style={{ fontSize: "24px" }}>0</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
