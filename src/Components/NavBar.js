import { Navbar, Nav } from "react-bootstrap";
import logobudget from "../logobudget.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logobudget} alt="logo" className="logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/transactions">All Transactions</Nav.Link>
        <Nav.Link href="/transactions/new">New Transaction</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
