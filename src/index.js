import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_useLayoutEffect from "./hook_example/App_useLayoutEffect";
import App_useId from "./hook_example/App_useId";
import App_useRef_1 from "./hook_example/App_useRef_1";
import App_useRef_2 from "./hook_example/App_useRef_2";
import App_useRef_3 from "./hook_example/App_useRef_3";
import App_forwardRef from "./hook_example/forward_ref/App_forwardRef";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App_useLayoutEffect/>*/}
        <App_forwardRef/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
