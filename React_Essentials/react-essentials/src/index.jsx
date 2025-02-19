// import React from 'react';
import ReactDOM from "react-dom/client"; 
// 이 JSX 코드는 함수로 전환이 되지 않는 것
// 값으로 사용되고 있음
// 호출된 다른 메소드의 인수로 사용됨

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));