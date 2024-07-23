import {useRef} from "react";
import MyInput from "./MyInput";

const App_forwardRef = () => {
    const inputRef = useRef();
    const focus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <MyInput ref={inputRef}/>
            <button onClick={focus}>집중</button>
        </div>
    )
}

export default App_forwardRef;
