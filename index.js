import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // './App.js'에서 .js가 생략
import reportWebVitals from './reportWebVitals';

// Router 셋팅
import {BrowserRouter, HashRouter} from 'react-router-dom';
// cf) from 부분에 ./ 같은거 없이 'react' 같은 식으로 있으면 대부분 라이브러리 이름이라고 생각

// Redux
import {Provider, useStore} from 'react-redux';
import {createStore} from 'redux';

// reducer와 dispatch 배우기 전 store 생성
// let store = createStore(() => {
//   return [
//     {id : 0, name : '멋진신발', quan : 2},
//     {id : 1, name : '멋진신발2', quan : 4}
//   ]
// })

// reducer 만드는 방법1
// function reducer() {
//   return [
//     {id : 0, name : '멋진신발', quan : 2},
//     {id : 1, name : '멋진신발2', quan : 4}
//   ];
// }
// let store = createStore(reducer);

// reducer 만드는 방법2
let defaultState = 
  [
    {id : 0, name : '멋진신발', quan : 2},
    {id : 1, name : '멋진신발2', quan : 4}
  ];

function reducer(state = defaultState, action) {
  if(action.type === '수량증가') {
    let copyState = [...state];
    copyState[action.num].quan++;
    return copyState;
  } else if(action.type === '수량감소') {
    let copyState = [...state];
    copyState[action.num].quan--;
    // 수량이 0 이하로 출력되는거 방지
    if(copyState[action.num].quan < 0) {
      copyState[action.num].quan = 0;
    }
    return copyState;
  } else {
    return state;
  }
}
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// <App/> component를 (id = 'root')인 HTML 태그에 붙여넣으라는 의미

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
