import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // './App.js'에서 .js가 생략
import reportWebVitals from './reportWebVitals';

// Router 셋팅
import {BrowserRouter, HashRouter} from 'react-router-dom';
// cf) from 부분에 ./ 같은거 없이 'react' 같은 식으로 있으면 대부분 라이브러리 이름이라고 생각

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// <App/> component를 (id = 'root')인 HTML 태그에 붙여넣으라는 의미

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
