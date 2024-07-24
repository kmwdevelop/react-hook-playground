import {useRef, useState} from "react";

const App_useRef_2 = () => {
    const [renderer, setRenderer] = useState(0);

    // useRef는 컴포넌트가 재렌더링 되어도 값이 초기화 되지 않는다.
    // useRef의 값은 컴포넌트의 전생애주기에 유지가 된다.
    const countRef = useRef(0);

    // useState는 컴포넌트가 재렌더링 되면 값이 초기화 된다.
    let countVar = 0;

    const doRendering = () => {
        setRenderer(renderer + 1);
    }

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log(countRef.current)
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log(countVar)
    }

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>Renderer</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
        </div>
    )
}

export default App_useRef_2;
