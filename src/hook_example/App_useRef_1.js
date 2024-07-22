import {useRef, useState} from "react";

const App_useRef_1 = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const increaseCountState = () => {
        setCount(count + 1);
        // 컴포넌트가 재렌더링 된다.
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        // 컴포넌트가 재렌더링 되지 않는다.
    }

    return (
        <div>
            <p> State: {count} </p>
            <p> Ref: {countRef.current} </p>
            <button onClick={increaseCountState}> State 올려</button>
            <button onClick={increaseCountRef}> Ref 올려</button>
        </div>
    )
}

export default App_useRef_1;
