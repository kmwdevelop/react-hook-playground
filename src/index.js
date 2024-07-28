import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App_useLayoutEffect from "./hook_example/App_useLayoutEffect";
import App_useId from "./hook_example/App_useId";
import App_useRef_1 from "./hook_example/useRef/App_useRef_1";
import App_useRef_2 from "./hook_example/useRef/App_useRef_2";
import App_useRef_3 from "./hook_example/useRef/App_useRef_3";
import App_forwardRef from "./hook_example/forwardRef/App_forwardRef";
import App_useContext from "./hook_example/useContext/App_useContext";
import App_useEffect from "./hook_example/useEffect/App_useEffect";
import App_useEffect2 from "./hook_example/useEffect/App_useEffect2";
import App_useMemo from "./hook_example/App_useMemo";
import App_useReducer from "./hook_example/useReducer/App_useReducer";
import App_useReducer02 from "./hook_example/useReducer/App_useReducer02";
import App_debounce from "./hook_example/debounce/App_debounce";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App_debounce />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
