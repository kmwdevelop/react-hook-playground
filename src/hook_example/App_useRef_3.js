import {useEffect, useRef, useState} from "react";

const App_useRef_3 = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            {/** ref 속성을 사용하여 inputRef를 넣어주고 DOM과 연결할 수 있다.**/}
            <input ref={inputRef} type="text" placeholder="username"></input>
            <button>로그인</button>
        </div>
    )
}

export default App_useRef_3;
