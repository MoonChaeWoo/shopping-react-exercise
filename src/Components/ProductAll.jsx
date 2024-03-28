import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from "react-router-dom";


const ProductAll = ({useProduct}) => {

  const [product, setProduct] = useProduct;
  const [searchParams, setSearchParams] = useSearchParams();

  const getProducts = async() => {
    let url = `https://my-json-server.typicode.com/MoonChaeWoo/shopping-react-exercise/products?id=${searchParams.get('id')}`;

    const result = await axios.get(url);
    result.status === 200 ? setProduct(JSON.stringify(result.data)) : console.log(result.message);
  };

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div>
        <Container>
            <Row>
                { (JSON.parse(product))?.map(item => <Col key={item.id} lg={4}><ProductCard item={item}/></Col>) }
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll