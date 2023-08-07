import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Navigation from "../components/Navigation";
import AllotmentTable from "../components/AllotmentTable";
import Loader from "../components/Loader";
export default function RentalBooks() {
  const [allotmentDetail, setAllotmentDetail] = useState();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    let url = "https://localhost:7197/api/Admin/getallocatedbookdetails";
    axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setTimeout(()=>{
            setAllotmentDetail(res.data);
        }, 1500)
      });
  }, []);


    return (
        <>
         <Navigation/>
         {
            allotmentDetail?<AllotmentTable allotments={allotmentDetail}/> : <Loader/>
         }
        </>
    )
}
