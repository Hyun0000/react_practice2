import styled from 'styled-components';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// 변수 이름은 대문자로 작성해야한다.
let Box = styled.div`
    padding : 20px;
`;

let Title = styled.h4`
    font-size : 25px;
    color : ${props => props.color};
`;

function Detail(props) {
    let history = useHistory();
    let {id} = useParams();
    
    let pData = props.shoes.find(e => e.id == id);    
    // 간략하게 작성했기에 return도 쓰지 않았다.

    // styled-components 데이터 바인딩 테스트용 변수
    let colorName = "red";

    return (
        <div className="container">

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

