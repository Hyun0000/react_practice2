import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';

function Cart(props) {
    console.log(props);
    // {state: Array(1), dispatch: ƒ}
    // dispatch: ƒ dispatch(action)
    // length: 1
    // name: "dispatch"
    // prototype: {constructor: ƒ}
    // arguments: (...)
    // caller: (...)
    // [[FunctionLocation]]: redux.js:273
    // [[Prototype]]: ƒ ()
    // [[Scopes]]: Scopes[4]
    // state: Array(1)
    // 0: {id: 0, name: '멋진신발', quan: 2}
    // length: 1
    // [[Prototype]]: Array(0)
    // [[Prototype]]: Object

    return (
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{props.state[0].name}</td>
                    <td>{props.state[0].quan}</td>
                    <td>Table cell</td>
                </tr>
            </Table>
        </div>
    );
}

// state를 props화
function fromStatetoProps(state) {
    return {
        state : state
    }
}

export default connect(fromStatetoProps)(Cart);