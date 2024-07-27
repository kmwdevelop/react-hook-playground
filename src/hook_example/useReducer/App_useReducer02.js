import { useReducer } from "react";

const App_useReducer02 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.student];
      case "DELETE":
        return state.filter((student) => student !== action.student);
      default:
        return state;
    }
  };

  const [students, dispatch] = useReducer(reducer, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>출석부</h1>
      <div style={{ marginTop: 20 }}>
        <input type="text"></input>
        <button
          onClick={() => {
            dispatch({ type: "ADD", student: "홍길동" });
          }}
        >
          추가
        </button>
      </div>
      {students.map((student, index) => {
        return (
          <div key={index}>
            <span>{student}</span>
            <button>삭제</button>
          </div>
        );
      })}

      {/* {students.forEach((student, index) => {
        return (
          <div key={index}>
            <div>{student}</div>
            <button>삭제</button>
          </div>
        );
      })} */}
    </div>
  );
};
export default App_useReducer02;
