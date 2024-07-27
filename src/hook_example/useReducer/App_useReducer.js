import { useReducer, useState } from "react";

// reducer - state를 업데이트 하는 역할
// dispatch - state 업데이트 요청을 하는 역할
// action - 요구사항을 나타내는 객체

const ACTION_TYPES = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const reducer = (state, action) => {
  console.log("state: ", state, "action: ", action);
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.playload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.playload;
    default:
      return state;
  }
};

const App_useReducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <div>잔고: {money}원</div>
      <div>
        <input
          type="number"
          value={number}
          step={"1000"}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        ></input>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.DEPOSIT, playload: number });
          }}
        >
          예금
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.WITHDRAW, playload: number });
          }}
        >
          출금
        </button>
      </div>
    </div>
  );
};

export default App_useReducer;
