import "../App.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./style.css";
import axios from "axios";
import * as Yup from "yup";
export default function Login() {
const navigate = useNavigate();
  const initialValues = {
    userEmail: "",
    userPass: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
    axios.post("https://localhost:7197/api/Users/login",
    {
       "userEmail": values.userEmail,
       "userPassword": values.userPass    
    })
    .then((res)=>{       
        sessionStorage.setItem("token",res.data)
        navigate("/students")
    })
    .catch((err)=>{
        console.log(err)
    })
  };

  const validate = (values) => {
    let error = {};

    if (!values.userEmail) {
      error.userName = "Required";
    }
    if (!values.userPass) {
      error.userPass = "Required";
    }

    return error;
  };
  const validationSchema = Yup.object({
    userEmail: Yup.string().required("UserName is required"),
    userPass: Yup.string().required("Userpass is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="login-page-container">
        <Row className="login-form-row">
          <Col md={6} className="login-form-col">
            <div className="login-form-container">
              <h4 className="text-center text-light"> Login To The Book Mania</h4>
              <hr className="w-50 m-auto p-2"/>
              <form className="login-form" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Your Login Id  "
                  id="userEmail"
                  name="userEmail"
                  className="form-control"
                  {...formik.getFieldProps("userEmail")}
                  value={formik.values.userEmail}
                />

                {formik.touched.userEmail && formik.errors.userEmail ? (
                  <div className="text-danger">{formik.errors.userEmail}</div>
                ) : null}

                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  {...formik.getFieldProps("userPass")}
                  name="userPass"
                  className="form-control"
                  id="userPass"
                />
                {formik.touched.userPass && formik.errors.userPass ? (
                  <div className="text-danger">{formik.errors.userPass}</div>
                ) : null}

                <br />
                {/* <input type="submit btn btn-primary" value={"Log In"} className="login-button" /> */}
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
