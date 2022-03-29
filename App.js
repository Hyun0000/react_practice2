// React 내장 함수
import { useState } from 'react';

// Component
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Detail from './Detail.js';

// 데이터
import productData, {name1 as apple, name2} from './data.js';
import {name3} from './data.js';

// Router
import { Link, Route, Switch } from "react-router-dom";
import { useParams } from 'react-router-dom';

// css
import './App.css';

// ajax
import axios from 'axios';

function App() {
  // 상품데이터
  let [shoes, shoesChange] = useState(productData);

  // ajax를 통해 가져온 상품데이터
  let [ajaxData, setAjaxData] = useState([]);

  // ajax를 통해 가져온 상품데이터 레이아웃 UI on/off 설정
  let [newLayout, setNewLayout] = useState(false);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Garden</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>

              {/* 기존에 Warning 메세지가 뜨는 태그
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/detail/0">Detail</Link></Nav.Link>
              */}

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

      <Switch>
        <Route exact path="/">
          <Jumbotron/>
          <>
            <div className="container">
              <div className="row">
            {
              shoes.map(function(e, index) {
                return (<Card index={index} shoes={shoes} key={index}/>);
              })
            }
              </div>
            </div>
          </>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}/>
        </Route>

        <Route path="/:id">
          <div>새로 만든 route입니다</div>
        </Route>
      </Switch>
    
      <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                let newShoseArr = [...shoes, ...result.data];
                console.log(newShoseArr);
                shoesChange(newShoseArr);
                // setNewLayout(true);
              })
              .catch(() => {console.log(2)});
      }}>더보기</button>

      {/* <div className="container">
        <div className="row">
        {
          newLayout
          ?

              ajaxData.map((e, index) => {
              return (<Card shoes={ajaxData} index={index} key={index}></Card>);
            })
            : null
          }
        </div>
      </div> */}
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
  let imgSrc = `https://codingapple1.github.io/shop/shoes${props.shoes[props.index].id + 1}.jpg`
  return(
      <div className="col-md-4">
        <img src={imgSrc} alt="" srcSet="" width="100%"/>
        <h4>{props.shoes[props.index].title}</h4>
        <p>{props.shoes[props.index].content} & {props.shoes[props.index].price}</p>
      </div>
  )
}

export default App;