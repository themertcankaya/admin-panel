import { useDispatch } from "react-redux";
import { removeProduct } from "../features/products/productSlice";
import { Link } from "react-router-dom";
import { memo } from "react";

const ProductCard = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <img src={image} alt={name} style={{ width: "100px" }} />
      <div>
        <h4>{name}</h4>
        <p>{price} ₺</p>
      </div>
      <div>
        <button
          onClick={() => dispatch(removeProduct(id))}
          style={{ marginRight: "10px" }}
        >
          Delete
        </button>
        <Link to={`/admin/edit/${id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default memo(ProductCard); //  only re-renders if props change
