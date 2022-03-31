// React 내장 함수
import { useEffect, useState } from 'react';

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

  // 더보기 버튼 on/off 설정
  let [showMorebtn, setShowMorebtn] = useState(true);

  // URL주소(data2.json)의 숫자 증가 변수
  let [urlNum, setUrlNum] = useState(2);

  useEffect(() => {
    // 페이지 방문과 동시에 Ajax 요청하기
    axios.get(`https://codingapple1.github.io/shop/data${urlNum}.json`)
    .then((result) => {
      console.log(result);
    })
    .catch((result) => {
      console.log(result);
    });
  }, []);

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

      {
        showMorebtn
        ? (
          <button className="btn btn-primary" onClick={() => {
              // axios.get('https://codingapple1.github.io/shop/data2.json')
              axios.get(`https://codingapple1.github.io/shop/data${urlNum}.json`)
              .then((result) => {
                let newShoseArr = [...shoes, ...result.data];
                shoesChange(newShoseArr);
                setUrlNum(urlNum + 1);
              })
              .catch(() => {
                alert("데이터 못 가져옴");
              });
          }}>더보기</button>
        )
        : null
      }

      <button onClick={() => {
        axios.post('https://codingapple1.github.io/shop/data2.json', { id : 'test', pw : 1234})
        .then((result) => {console.log(result);})
        .catch((result) => {console.log(result);})
      }}>POST 요청하기</button>
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
  let imgSrc = `https://codingapple1.github.io/shop/shoes${props.shoes[props.index].id + 1}.jpg`;

  return(
      <div className="col-md-4">
        <img src={imgSrc} alt="" srcSet="" width="100%"/>
        <h4>{props.shoes[props.index].title}</h4>
        <p>{props.shoes[props.index].content} & {props.shoes[props.index].price}</p>
      </div>
  )
}

export default App;