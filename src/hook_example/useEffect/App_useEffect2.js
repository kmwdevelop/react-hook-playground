import {useState} from "react";
import Timer from "./Timer";

const App_useEffect2 = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {showTimer && <Timer/>}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
}

export default App_useEffect2;
