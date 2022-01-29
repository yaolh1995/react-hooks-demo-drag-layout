import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
/* 布局 菜单可有可无，菜单宽度可拖拽 */

function App() {
  let count = useState(0);
  const dealClick = (count) => {
    count = count++;
    console.log("/");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">banner</div>
        <div className="content-wrapper">
          <div className="menu" onClick={(count) => count++}>
            菜单{count}
          </div>
          <div className="content">内容</div>
        </div>
        <div className="footer">底部</div>
      </header>
    </div>
  );
}

export default App;
