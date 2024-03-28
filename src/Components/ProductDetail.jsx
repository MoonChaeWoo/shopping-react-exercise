import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

const port = 3000;
const ProductDetail = () => {

  const { id } = useParams();

  const [detail, setDetail] = useState('{}');

  const requestDetail = async(id) => {
    const result = await axios.get(`http://${window.location.hostname}:${port}/products`, {
      params : {
        id
      }
    });
    setDetail(JSON.stringify(result?.data[0]));
  }

  useEffect(() => {
    requestDetail(id);
  }, [id]);

  return (
    <div>
      <Container>
        <Row>
          <Col><img src={JSON.parse(detail).img} alt="옷사진" /></Col>
          <Col>
            <div>{JSON.parse(detail).title}</div>
            <div>{JSON.parse(detail).price || '-'}원</div>
            <div>{JSON.parse(detail).new ? '신상품' : '이월상품'}</div>
            <select>
              {(JSON.parse(detail).size)?.map(v => <option key={v}>{v}</option>)}
            </select>
            <div>
              <Button style={{width : '100%'}}>추가</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail;