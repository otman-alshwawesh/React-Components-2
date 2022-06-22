import Address from "./Component/Profile/Address.js";
import FullName from "./Component/Profile/FullName.js";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";
import logo from './logo.svg';
import './App.css';
import { Button,Navbar,Container,Nav,NavDropdown,Form,FormControl,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import zz from "./image/zz.jpg";
import img from "./image/img.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='h1'>
<Card className="bg-dark text-white">
  <Card.Img src={zz} alt="Card image" />
  <Card.ImgOverlay>
    
  </Card.ImgOverlay>
</Card>
</div>
<div className='nn' >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <ProfilePhoto />
  <Card.Body>
    <Card.Title> دولة ليبيا</Card.Title>
    <Card.Text>
      <FullName />
      <h6>Passport:ABC0554</h6>somewhere
      <h6>Gender: man</h6>
      <h6>Nationality: Libyan</h6>
      <h6>Place of birth: Sebha</h6>
    </Card.Text>
    <Button variant="primary">Go </Button>
  </Card.Body>
</Card>
</div>
<Form className='mm'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<div className='footer'>
<footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">ABOUT US </h5>
              <p>
                Our site translates and publishes the latest versions of the
                Manhwa comics, and we maintain the privacy of our subscribers
                and the arrival of everything new to them We also welcome your
                contact with us...
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
 <Address />
                </li>
                <li>
                  <a href="#!">Phone Number : 002185547007</a>
                </li>
                <li>
                  <a href="#!">Other Ph Num : 00218915547007</a>
                </li>
                <li>
                  <a href="#!">Address : libya-sabha</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="#"> Mangateam.com</a>
        </div>

      </footer>
      </div>

    </div>
  );
}

export default App;
