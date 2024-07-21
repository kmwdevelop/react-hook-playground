import {useId} from "react";

const App_useId = () => {
    return (
        <div>
            <MyInput/>
            <MyInput/>
        </div>
    );
}

const MyInput = () => {
    const id = useId(); // 각 컴포넌트마다 고유한 id를 생성한다.
    return (
        <div>
            <label htmlFor="name"> 이름 </label>
            <input id={id} type="text"/>
        </div>
    );
}

export default App_useId;
