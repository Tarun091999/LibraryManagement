import { Container, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Loader from "./Loader";
import { useSelector } from 'react-redux'
export default function AllotmentBookCards(props) {
  const studentId = useSelector((state)=>state.Students.students.student.studentId)
  const books = props.books;
  const [show, setShow] = useState(false);
  const [allotmentData , setAllotmentData]= useState();
  function handleClose(){setShow(false)}
  function confirmAllotment(bookDetail) {
    setShow(true);
    setAllotmentData(bookDetail)
    console.log(allotmentData)
    console.log(studentId)
  }

  console.log(books);

  return (
    <>
      <Container>
        <Table variant="primary">
          <thead>
            <th>Sr. No.</th>
            <th>Books detail</th>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.bookName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Price : {item.bookPrice}
                      </Card.Subtitle>
                      <Card.Text>
                        Description : {item.bookDescription}
                      </Card.Text>
                      <Button
                        variant="contained"
                          onClick={() => {
                          confirmAllotment(item);
                        }}
                      >
                        Allot Book
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="mx-3"
                      >
                        Remove Book
                      </Button>
                    </Card.Body>
                  </Card>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>

       
      </Container>

       <Modal show={show} onHide={()=>{handleClose()}}>
        {
          allotmentData?<>
          <Modal.Header closeButton>
          <Modal.Title>Fill Allotment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <form>
            <label className="form-label">Student Id </label>
            <input type="text" disabled value={studentId} className="form-control"/>
            <label className="form-label">Book Id </label>
            <input type="text" disabled value={allotmentData.bookId} className="form-control"/>
            <label className="form-label">Alloacted From </label>
            <input type="datetime-local" id="allocatedFrom" className="form-control"/>
            <label className="form-label">Alloacted From </label>
            <input type="datetime-local" id="allocatTo" className="form-control"/>
            <label className="form-label">Allocat By </label>
            <input type="text" placeholder="Please Enter Your Name" className="form-control"/>
           </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> 
          </>
          :<Loader/>
         }
          
        </Modal>
    </>
  );
}
