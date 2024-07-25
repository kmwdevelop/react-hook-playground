import {useEffect, useRef, useState} from "react";

const App_useEffect = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log("count가 변화했을 때");
    }, [count]);

    // 렌더링 될 때마다 매번 실행 됨.
    useEffect(() => {
        console.log("name이 변화 했을 때");
    }, [name]);

    // 처음 렌더링 됐을 때만
    useEffect(() => {
        console.log("첫 렌더링이 되었다.");
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCountUpdate}>Click</button>
            <input type="text" value={name} onChange={handleInputChange}/>
            <span>name: {name}</span>
        </div>
    )
}


export default App_useEffect;
