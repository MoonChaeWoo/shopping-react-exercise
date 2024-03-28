import ProductDetail from './ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({auth}) => {
    // const ProductDetail = lazy(() => import('./Components/ProductDetail'));
  return auth ? <ProductDetail/> : <Navigate to='/login'/>
}

export default PrivateRouter