import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return <div>The product id is {id}</div>;
};

export default ProductDetail;
