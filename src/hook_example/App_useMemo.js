import { useCallback, useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 1000000000; i++) {}
  return number + 10000;
};

const App_useMemo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // hardNumber가 바뀔 때만 hardCalculate 함수가 호출됨
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  // easyNumber가 바뀔 때마다 호출됨
  const easyNum = useMemo(() => {
    return easyNumber + 100;
  }, [easyNumber]);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <div>어려운 계산 결과: {hardSum}</div>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <div>어려운 계산 결과: {easyNum}</div>
    </div>
  );
};

export default App_useMemo;
