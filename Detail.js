import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// 뒤로가기 버튼을 만들기 위해 useHistory 함수 import

function Detail(props) {
    let history = useHistory();
    let {id} = useParams();
    
    function originPdata() {
        let obj;
        props.shoes.forEach(element => {
            if(id == element.id) {
                obj = element;
            }
        });
        return obj;
    }

    const [pData, pDataChange] = useState(originPdata);

    let pData2 = props.shoes.find(e => e.id == id);    

    return (
        <div className="container">

            <div>{id}</div>

            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{pData.title}</h4>
                    <p>{pData.content}</p>
                    <p>{pData.price}원</p>

                    <h4 className="pt-5">{pData2.title}</h4>
                    <p>{pData2.content}</p>
                    <p>{pData2.price}원</p>

                {/*
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                */}
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={() => {history.goBack();}}>뒤로가기</button>
                    <button className="btn btn-danger" onClick={() => {history.push("/")}}>메인페이지로!!!</button> 
                </div>
            </div>
        </div> 
    );
}

export default Detail;