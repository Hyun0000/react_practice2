import './Detail.scss';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// 변수 이름은 대문자로 작성해야한다.
// Box라는 이름의 component가 만들어졌다.
let Box = styled.div`
    padding : 20px;
`;

// Title이라는 이름의 component가 만들어졌다.
let Title = styled.h4`
    font-size : 25px;
    color : ${props => props.color};
`;

// styled-components 데이터 바인딩 테스트용 변수
let colorName = "red";

function Detail(props) {
    let history = useHistory();
    let {id} = useParams();
    
    let pData = props.shoes.find(e => e.id == id);    
    // 식별값(id)에 기반한 상품 object 데이터 가져오기(간략하게 작성했기에 return도 쓰지 않았다.)

    // useEffect 테스틍용 변수
    let [alertBool, alertBoolChange] = useState(true);
    let [num, setNum] = useState(1);

    // useEffect
    // useEffect(() => {
    //     // setTimeout(() => {
    //     //     alertBoolChange(false);
    //     //     console.log(1);
    //     // }, 2000);
    //     console.log(1);

    //     return () => {console.log("컴포넌트 사라짐!!");}
    // })

    useEffect(() => {
        console.log("##############");
        console.log(1);
        console.log(2);
        console.log(3);
        console.log("##############");
    });
    useEffect(() => {
        console.log("@@@@@@@@@@@@@@@@@@@");
        console.log(1);
        console.log(2);
        console.log("@@@@@@@@@@@@@@@@@@@");
    });
    useEffect(() => {
        console.log("---------------");
        console.log(1);
        console.log("---------------");
    });

    return (
        <div className="container">

            {/* useEffect 테스트 */}
            <button onClick={() => {setNum(num+1)}}>+1 버튼</button>
            <div>{num}</div>

            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{pData.title}</h4>
                    <p>{pData.content}</p>
                    <p>{pData.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={() => {history.goBack();}}>뒤로가기</button>
                    <button className="btn btn-danger" onClick={() => {history.push("/")}}>메인페이지로!!!</button> 
                </div>
            </div>

            {
                alertBool 
                ?
                <div className="my-alert">
                    <p>재고가 얼마 남지 않았습니다</p>
                </div>
                :
                null
            }



            <Box>
                <Title color="blue">H4크기의 컴포넌트</Title>
                <Title color={colorName}>H4크기의 컴포넌트</Title>
                {/* 데이터 바인딩도 된다. */}
                <Title color="green">H4크기의 컴포넌트</Title>
            </Box>
        </div> 
    );
}

export default Detail;

