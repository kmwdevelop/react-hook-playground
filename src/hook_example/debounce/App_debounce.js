import { useEffect, useState } from "react";

const App_debounce = () => {
  const fetchFromServer = (word) => {
    console.log("fetching from server");
    const serverItem = ["apple", "banana", "orange", "mango"];

    const filteredItems = serverItem.filter((item) => {
      return item.includes(word);
    });

    return filteredItems;
  };

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  // Debounce: text가 바뀔 때마다 fetchFromServer를 호출하지 않고, 1초 뒤에 fetchFromServer를 호출한다.
  // 1초 안에 text가 바뀌면 이전에 호출한 fetchFromServer는 취소된다.
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(fetchFromServer(text));
    }, [300]);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div style={{ justifyItems: "center", alignContent: "center" }}>
      <h1>Debounce</h1>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      {data.map((item) => {
        return (
          <div key={item}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App_debounce;
