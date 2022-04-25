import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';

function Cart(props) {
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
                                props.state.map((e, i) => {
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
        </div>
    );
}

// state를 props화
function fromStateToProps(state) {
    return {
        state : state,
        id : state[0].id,
        name : state[0].name,
        quan : state[0].quan,
    }
}

export default connect(fromStateToProps)(Cart);