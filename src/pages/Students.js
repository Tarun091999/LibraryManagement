import Navigation from "../components/Navigation";
import { Search } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Book } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { allotStudent } from "../redux/Slices/StudentSlice";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

export default function Students() {
  const [studentId, setStudentId] = useState();
  const [student, setStudent] = useState();
  const [searchStatus, setSearchStatus] = useState(false);
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  function getStudent(e) {
    e.preventDefault();
    if (studentId == null || studentId == "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Insert Student Id ",
        showConfirmButton: false,
        timer: 1000,
        width: "250px",
      });
    } else {
      setSearchStatus(true);
      let url = "https://localhost:7197/api/Admin/getstudentbyid/" + studentId;
      if (studentId) {
        axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
          .then((response) => {
            console.log(response.data);
            setStudent(response.data);
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Student does not exist in record ",
              showConfirmButton: false,
              timer: 2000,
              width: "250px",
            });

            setSearchStatus(false);
          });
      }
    }
  }

  function allotBook()
  {
    dispatch(allotStudent(student));
    navigate("/books")            
  }

  return (
    <>
      <Navigation />
      <div className="w-50 m-auto my-3 ">
        <form
          onSubmit={(e) => {
            getStudent(e);
          }}
        >
          <input
            type="text"
            id="searchbox"
            placeholder="Enter Student Id "
            className="form-control student-searchbox"
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className="mx-2"
            endIcon={<Search />}
          >
            Search Student
          </Button>
        </form>
      </div>
      <br />

      {searchStatus && !student ? <Loader/> : null}

      { student ? (
        <div className="search-student-result w-50 m-auto">
          <Card className="">
            <Card.Body>
              <Card.Title>{student.studentName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                From : {student.studentLocation}
              </Card.Subtitle>
              <Card.Text>
                Contact Number : {student.studentContactNumber}
              </Card.Text>

              <Button
                variant="contained"
                size="small"
                color="primary"
                endIcon={<Book />}
                onClick={() => {
                  allotBook()
                }}
              >
                Allot Books
              </Button>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </>
  );
}
