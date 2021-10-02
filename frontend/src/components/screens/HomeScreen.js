import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "../Product";

const HomeScreen = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get("/api/products");
      setProductList(data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <Row>
          {productList.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} el={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
