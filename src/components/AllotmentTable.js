import { Table } from "react-bootstrap";
import { Button } from "@mui/material";

export default function AllotmentTable(props) {
  const { allotments } = props;
  console.log(allotments);
  return (
    <>
      <Table variant="hover">
        <thead>
          <th>Sr.No.</th>
          <th>Student Id </th>
          <th>Student Name</th>
          <th>Book Name</th>
          <th>Allocate From</th>
          <th>Allocated To</th>
          <th>Cancle Allocatment</th>
        </thead>
        <tbody>
            {allotments.map((item, index)=>(
                <tr key={index}>
                 <td>{index+1}</td>
                 <td>{item.studentId}</td>
                 <td>{item.studentName}</td>
                 <td>{item.bookName}</td>
                 <td>{new Date(item.allocatedFrom).toLocaleString()}</td>
                 <td>{new Date(item.allocatedTo).toLocaleString()}</td>
                 <td><Button variant="contained" color="error">Cancle Allocatment</Button></td>
                </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
