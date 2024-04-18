import { useParams } from 'react-router-dom';
import all_product from '../assets/All_Product';
import Breadcurm from "../Components/Breadcurm/breadcurm";
import Display from "../Components/Display/display";

const Product = () => {
  const products = all_product;
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  return (
    <div>
      <Breadcurm product={product} />
      <Display product={product} />
    </div>
  );
}

export default Product;
