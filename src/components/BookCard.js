import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Slices/BooksSlice";

export default function BookCard(props) {
    const dispatch = useDispatch();
  const books = props.books;
  console.log(books)
  return (
    <>
      <Container>
        <Row>
          {books.map((item, index) => (
            <Col md={4} id ={index}>
              <Card  style={{ height: "13rem" }}>
                <Card.Body>
                  <Card.Title>{item.bookName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Price : &#8377;  {item.bookPrice}
                  </Card.Subtitle>
                  <Card.Text>Description : {item.bookDescription}</Card.Text>
                 
                  <Button variant="contained" size="small" color="secondary" endIcon={<ShoppingBag/>}> Buy Now</Button>
                  
                  <Button variant="contained" size="small" color="secondary" endIcon={<ShoppingCart/> }
                  onClick={()=>{dispatch(addProduct(item))}} className="mx-2"> Add To Cart </Button>
                </Card.Body>
                 
              </Card>
              
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
