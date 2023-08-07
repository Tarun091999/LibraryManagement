import { Container, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/Slices/BooksSlice";
import { ShoppingCart, ThumbUpAltRounded } from "@mui/icons-material";
export default function AllotmentBookCards(props) {
  const studentId = useSelector(
    (state) => state.Students.students.student.studentId
  );
  const dispatch= useDispatch();
  const books = props.books;

  const [show, setShow] = useState(false);
  const [allotmentData, setAllotmentData] = useState();
  const [currentDate, setCurrentDate] = useState();
  let allocateDate;
  const [allotmentBy, setAllotmentBy] = useState("");
  const [allotmentDate, setAllotmentDate] = useState();
  

  useEffect(() => {
    const month = String(new Date().getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so we add 1
    const day = String(new Date().getDate()).padStart(2, "0");
    let year = new Date().getFullYear();
    let fulldate = `${year}-${month}-${day}`;
    console.log(fulldate);
    setCurrentDate(fulldate);
    console.log(currentDate);
  }, [currentDate]);

  function handleClose() {
    setShow(false);
  }

  function confirmAllotment(bookDetail) {
    setShow(true);
    setAllotmentData(bookDetail);
    console.log(allotmentData);
    console.log(studentId);
  }

  function getDateForAllocateBook(e) {
    let today = new Date().toDateString();
    let date = new Date(e.target.value).toDateString();
    let todayObj = new Date(today);
    let dateObj = new Date(date);
    console.log(today);
    console.log(date);
    if (dateObj >= todayObj) {
      allocateDate = date;
      console.log(date);
      setAllotmentDate(date);
    } else {
      e.target.value = null;
      setAllotmentDate(null);
      allocateDate = "";
      Swal.fire({
        position: "bottom-end",
        icon: "error",
        title: "Invalid Date",
        showConfirmButton: false,
        timer: 1000,
        width: "250px",
      });
    }
  }

  function allocateBookToStudent(e) {
    const token = sessionStorage.getItem("token");
    e.preventDefault();
    let obj = {
      studentId: studentId,
      bookId: allotmentData.bookId,
      allocationFrom: new Date(currentDate),
      allocationTo: new Date(allotmentDate),
      allocatedBy: allotmentBy,
    };

    let url = "https://localhost:7197/api/Admin/allocatedbook";
    axios
      .post(url, obj, { headers: { Authorization: `Bearer ${token}` } })
      .then(
        (res) => 
        {
          if (res.status==200)
          {
            Swal.fire({
              position: "bottom-end",
              icon: "success",
              title: "Book Allotment Successfully",
              showConfirmButton: false,
              timer: 2000,
              width: "250px",
            });
            setShow(false)
            dispatch(removeProduct(obj.bookId))
          }
        }
        )
      .catch((err)=>{
        console.log(err)
      })
  }

  return (
    <>
      <Container>
        {books.length>0? <Table variant="primary">
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
        </Table>:
        <>
        <h1 className="text-center">Cart Empty <ShoppingCart/>  </h1>
        <p className="text-center">Thankyou For Allotment </p>
        </>
        }
       
      </Container>

      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
      >
        {allotmentData ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Fill Allotment Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={(e) => allocateBookToStudent(e)}>
                <label className="form-label">Student Id </label>
                <input
                  type="text"
                  disabled
                  value={studentId}
                  className="form-control"
                />
                <label className="form-label">Book Id </label>
                <input
                  type="text"
                  disabled
                  value={allotmentData.bookId}
                  className="form-control"
                />
                <label className="form-label">Alloacted From </label>
                <input
                  type="date"
                  id="allocatmentDateFrom"
                  min={() => {
                    new Date();
                  }}
                  value={currentDate}
                  disabled={true}
                  className="form-control"
                />
                <label className="form-label">Alloacted To </label>
                <input
                  type="date"
                  id="allotmentDateTo"
                  className="form-control"
                  onChange={(e) => {
                    getDateForAllocateBook(e);
                  }}
                  value={allocateDate}
                />
                <label className="form-label">Allocat By </label>
                <input
                  type="text"
                  placeholder="Please Enter Your Name"
                  className="form-control"
                  onChange={(e) => {
                    setAllotmentBy(e.target.value);
                  }}
                  value={allotmentBy}
                />

                <Button type="submit" variant="contained" color="secondary">
                  Submit{" "}
                </Button>
              </form>
              <Button variant="contained" color="error" onClick={handleClose}>
                Close
              </Button>
            </Modal.Body>
          </>
        ) : (
          <Loader />
        )}
      </Modal>
    </>
  );
}
