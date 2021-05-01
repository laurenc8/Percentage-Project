import { NavLink } from 'reactstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Navbar.Brand>The % Project</Navbar.Brand>
        <Nav>
          <Link to="/gallery">03. Gallery</Link>
          <Link to="/data">02. Data</Link>
          <Link to="/">01. Stories</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;