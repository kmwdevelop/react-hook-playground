import {useContext} from "react";
import ThemeContext from "./ThemeContext";

const Page = () => {
    // useContext 를 사용하면, Provider 의 value 값을 바로 조회할 수 있다.
    const data = useContext(ThemeContext);
    return (
        <div>
            <h1>Page</h1>

        </div>
    );
}

export default Page;
