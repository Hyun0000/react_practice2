import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
// react-bootstrap '라이브러리'에서 import 해오는 것이다.
import './App.css';
import Data, {name1 as apple, name2} from './data.js'
// import {name1 as apple, name2} from './data.js'

function App() {
  // 상품데이터
  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Garden_Park</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Jumbotron/>

      <div className="container">
        <div className="row">
      {
        shoes.map(function(e, index) {
          return (<Plist index={index} shoes={shoes}/>);
        })
      }
        </div>
      </div>  

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" srcSet="" width="100%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content} & {shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" srcSet="" width="100%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content} & {shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" srcSet="" width="100%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content} & {shoes[2].price}</p>
          </div>
        </div>
      </div>   */}

    </div>
  )
}

function Jumbotron() {
  return(
    <div className="background">
      <h3>Hello, world!</h3>
      <p>This is a simple hero unit</p>
      <hr />
      <p>It uses utility classes for typography and spacing to space</p>
      <Button variant="primary" style={{width : '200px'}}>Primary</Button>{' '}
    </div>
  )
}

function Plist(props) {
  let test = `https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`
  return(
      <div className="col-md-4">
        <img src={test} alt="" srcSet="" width="100%"/>
        <h4>{props.shoes[props.index].title}</h4>
        <p>{props.shoes[props.index].content} & {props.shoes[props.index].price}</p>
      </div>
  )
}

export default App;