//Q1-- Commented out the code for Q1 and added code for Q2

// import { useState } from "react";
// import Child from "./components/Child";
// import "./App.css";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <div className="app-container">
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle Theme
//       </button>

//       <Child theme={theme} />
//     </div>
//   );
// }

// export default App;


//  Q2 


import { useState } from "react";
import Input from "./components/Input";
import Display from "./components/Display";

function App() {
  const [text, setText] = useState("");

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <Input setText={setText} />
      </div>

      <div style={boxStyle}>
        <Display text={text} />
      </div>
    </div>
  );
}

export default App;