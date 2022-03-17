import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import productData, {name1 as apple, name2} from './data.js';
import {name3} from './data.js';
//'./data.js'에서 .js를 생략해도 된다.
// 설사 1개의 변수만 import 하더라도 {중괄호}는 반드시 써야한다.(안쓰면 error 발생)
import { Link, Route, Switch } from "react-router-dom";

function App() {
  // 상품데이터
  let [shoes, shoesChange] = useState(productData);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Garden</Navbar.Brand>
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

      <Route exact path="/">
        {/* <div>메인페이지인데요</div> */}
        <Jumbotron/>
        <div className="container">
          <div className="row">
        {
          shoes.map(function(e, index) {
            return (<Card index={index} shoes={shoes} key={index}/>);
          })
        }
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>


      

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

function Card(props) {
  let imgSrc = `https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`
  return(
      <div className="col-md-4">
        <img src={imgSrc} alt="" srcSet="" width="100%"/>
        <h4>{props.shoes[props.index].title}</h4>
        <p>{props.shoes[props.index].content} & {props.shoes[props.index].price}</p>
      </div>
  )
}

export default App;