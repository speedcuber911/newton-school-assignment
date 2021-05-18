import "bootstrap/dist/css/bootstrap.min.css";

import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";

function TopNav(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div style={{ padding: "1%", display: "flex", justifyContent: "center" }}>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/Home" style={{ textDecoration: "none" }}>
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Posts" style={{ textDecoration: "none" }}>
                <NavLink>Posts</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export { TopNav };
