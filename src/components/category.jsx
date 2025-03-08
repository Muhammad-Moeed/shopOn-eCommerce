import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const ShapeExample = ({ categories }) => {
  return (
    <Container className="d-flex justify-content-center mt-4">
      <div className="bg-white rounded-4 pt-3 w-100">
        <Row className="justify-content-center g-4">
          {categories.map((category, index) => (
            <Col key={index} xs="auto" className="text-center">
              <Image
                src={category.img}
                className="img-fluid cursor-pointer"
                style={{ maxWidth: "70px" }}
              />
              <p
                className="mt-2 text-truncate fw-bold"
                style={{ fontSize: "12px", maxWidth: "100px" }}
              >
                {category.name}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ShapeExample;
