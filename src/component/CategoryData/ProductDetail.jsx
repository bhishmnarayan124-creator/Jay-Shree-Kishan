import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProduct(data.product);
        }
      })
      .catch((err) => console.error("❌ Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-detail">
      <h2>{product.commodity}</h2>
      {product.image && (
        <img 
          src={`http://localhost:5000/uploads/${product.image}`} 
          alt={product.commodity} 
        />
      )}
      <p>Price: <b>INR {product.price}</b></p>
      <p>Quantity: <b>{product.quantity}</b></p>
      <p>Type: <b>{product.type}</b></p>
      <p>Location: {product.district}, {product.state}</p>
    </div>
  );
};

export default ProductDetail;
