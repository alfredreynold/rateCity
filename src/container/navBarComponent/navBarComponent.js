import React from 'react'
import Nav from 'react-bootstrap/nav'
import Navbar from 'react-bootstrap/navbar'


let NavBarComponent  = (props) => {
	
    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">Top Home Loan Products</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">ALL</Nav.Link>
                    <Nav.Link href="/refinance">REFINANCE</Nav.Link>
                    <Nav.Link href="/fixedRate">FIXED RATE</Nav.Link>
                    <Nav.Link href="/firstHomeBuyer">FIRST HOME BUYER</Nav.Link>
                    <Nav.Link href="/investor">INVESTOR</Nav.Link>
                    <Nav.Link href="/nextHomeBuyer">NEXT HOME BUYER</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavBarComponent