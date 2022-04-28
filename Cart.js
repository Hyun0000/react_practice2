import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';

function Cart(props) {
    // console.log(props.prState);
    // console.log(props.uiState);
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                    <tbody>
                            {
                                props.prState.map((e, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{e.id + 1}</td>
                                            <td>{e.name}</td>
                                            <td>{e.quan}</td>
                                            <td>
                                                <button onClick={() => {props.dispatch({type : '수량증가', num : e.id})}}> + </button>
                                                <button onClick={() => {props.dispatch({type : '수량감소', num : e.id})}}> - </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                    </tbody>
                <tfoot></tfoot>
            </Table>
            {
                props.uiState
                ? 
                (
                    <div className="my-alert2">
                        <p>지금 구매하면 20% 할인</p>
                        <button onClick={() => {props.dispatch({type : "닫아"})}}>닫기</button>
                        {/* <button>닫기</button> */}
                    </div>
                )
                : null
            }
        </div>
    );
}

// state를 props화
function fromStateToProps(state) {
    // console.log(state);
    return {
        prState : state.reducer,
        uiState : state.reducer2
    }
}

export default connect(fromStateToProps)(Cart);