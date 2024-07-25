import {useEffect, useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            // 클로저 형태로 handler가 메모리에 올라갔기 때문에
            // handler 내부에서 time을 사용할 수 없게 된다. (처음 초기에 할당된 값만 사용 가능)
            // 따라서, setTime 자체에서 이전 값을 받아와서 새로운 값을 리턴해주는 방식으로 해결해야 한다.
            () => {
                setTime(prevTime => {
                    const newTime = prevTime + 1;
                    console.log(newTime); // 새로 업데이트된 값을 출력
                    return newTime;
                });
            },
            1000
        );

        return () => {
            clearInterval(timer);
            console.log("타이머가 제거되었습니다.");
        };
    }, []);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default Timer;
