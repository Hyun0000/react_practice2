import React from 'react';
import { useHistory } from 'react-router-dom';
// 뒤로가기 버튼을 만들기 위해 useHistory 함수 import

function Detail() {
    let history = useHistory();

    return (
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
                    <button className="btn btn-danger" onClick={() => {history.goBack();}}>뒤로가기</button>
                    <button className="btn btn-danger" onClick={() => {history.push("/")}}>메인페이지로!!!</button> 
                </div>
            </div>
        </div> 
    );
}

export default Detail;