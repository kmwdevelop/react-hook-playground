import {forwardRef} from "react";

const MyInput = ((props, ref) => {
        return (
            <input ref={ref} type="text" placeholder="username"/>
        );
    }
)
// ref를 전달하고 싶을땐, forwardRef 를 사용하면 된다.
export default forwardRef(MyInput);
