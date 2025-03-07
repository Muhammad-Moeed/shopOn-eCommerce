import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import category7 from "../assets/category7.png";
import category8 from "../assets/category8.png";
import category9 from "../assets/category9.png";

const categories = [
  { img: category1, name: "Gift Cards" },
  { img: category2, name: "Grocery" },
  { img: category3, name: "Fashion" },
  { img: category4, name: "Beauty" },
  { img: category5, name: "Home & Decor" },
  { img: category6, name: "Mobile & Tablets" },
  { img: category7, name: "Electronics" },
  { img: category8, name: "New on Shopon" },
  { img: category9, name: "Brands" },
];

function ShapeExample() {
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
              <p className="mt-2 text-truncate fw-bold" style={{ fontSize: "12px", maxWidth: "100px" }}>
                {category.name}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ShapeExample;
