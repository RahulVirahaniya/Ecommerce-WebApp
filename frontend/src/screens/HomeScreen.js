import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
// import products from '../products';
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // use effect gets loaded the mommet the component gets loaded so call api here
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
