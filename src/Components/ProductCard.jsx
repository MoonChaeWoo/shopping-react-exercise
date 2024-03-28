import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const goToDetail = (param) => {
    navigate(`/product/${param}`);
  };

  return (
    <div onClick={() => goToDetail(item.id)}>
        <img src={ item?.img } alt="옷사진" />
        <div>{ item?.title }</div>
        <div>{ item?.price }</div>
        <div>{ item?.new ? '신제품' : '이월상품' }</div>
    </div>
  )
}

export default ProductCard