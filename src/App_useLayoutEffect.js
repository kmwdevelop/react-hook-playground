import React, {useEffect, useLayoutEffect, useState} from 'react';

const App_useLayoutEffect = () => {
    const [count, setCount] = useState(0);

    // 컴포넌트가 화면에 그려진 이후에 실행된다.
    useEffect(() => {
        // 비동기식으로 실행 된다
        console.log('useEffect', count);
    }, [count]);

    // 컴포넌트가 화면에 그려지기 이전에 실행된다.
    useLayoutEffect(() => {
        // 동기식으로 실행된다. => 무거운 작업을 넣지 말아야 한다.
        console.log('useLayoutEffect', count);
    }, [count]);

    const handleCountUpdate = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleCountUpdate}>Update Count</button>
        </div>);
}
export default App_useLayoutEffect;
