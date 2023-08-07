import Navigation from "../components/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { People } from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import UpdateIcon from "@mui/icons-material/Update";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const authenticate = sessionStorage.getItem("token");
  if (authenticate == null) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="home-container">
        <Container>
          <div className="home-nav-container">
            <Row className="home-nav-row">
              <Col md={3} className="home-nav-col">
                <div>
                  <CoPresentIcon className="home-nav-icon" />
                </div>
                <h5 className="text-center">Allot Book To Student</h5>
                <Button
                  variant="contained"
                  className="m-auto d-block "
                  onClick={() => {
                    navigate("/students");
                  }}
                >
                  Explore
                </Button>
              </Col>

              <Col md={3} className="home-nav-col">
                <div>
                  <UpdateIcon className="home-nav-icon" />
                </div>
                <h5 className="text-center">Check Alloted Books</h5>
                <Button
                  variant="contained"
                  className="m-auto d-block"
                  onClick={() => {
                    navigate("/rentalbooks");
                  }}
                >
                  Explore
                </Button>
              </Col>

              <Col md={3} className="home-nav-col">
                <div>
                  <People className="home-nav-icon" />
                </div>
                <h5 className="text-center">Add Students</h5>
                <Button variant="contained" className="m-auto d-block">
                  Explore
                </Button>
              </Col>
              <Col md={3} className="home-nav-col">
                <div>
                  <MenuBookIcon className="home-nav-icon" />
                </div>
                <h5 className="text-center">Add Books</h5>
                <Button variant="contained" className="m-auto d-block">
                  Explore
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
