import { Container, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
export default function AllotmentBookCards(props) {
  const  books  = props.books;
  console.log(books)
  return (
    <>
      <Container>
        <Table variant="primary">
          <thead>
            <th>Sr. No.</th>
            <th>Books detail</th>
          </thead>
          <tbody>
            {books.map((item, index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>
                     <Card  >
                     <Card.Body>
                     <Card.Title>{item.bookName}</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">
                    Price : {item.bookPrice}
                    </Card.Subtitle>
                    <Card.Text>Description : {item.bookDescription}</Card.Text>
                    <Button variant="contained">Allot Book</Button>
                    <Button variant="contained" color="secondary"className="mx-3">Remove Book</Button>
                   </Card.Body>
                   </Card>
                   </td>
                   <td>
                 
                   </td>
                </tr>
                ))
            }
          </tbody>
        </Table>
     
     </Container>
    </>
  );
}
