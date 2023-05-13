import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants";

function ProductDetail() {
  const params = useParams();
  const productDetail = PRODUCTS.find((prod) => prod.id === params.productId);
  return (
    <>
      <h1>Product Details!</h1>
      <p>{productDetail.title}</p>
    </>
  );
}

export default ProductDetail;
