import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
/* 布局 菜单可有可无，菜单宽度可拖拽 */
const count = useState(0);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">banner</div>
        <div className="content-wrapper">
          <div className="menu" onclick={(count) => count + 1}>
            菜单
          </div>
          <div className="content">内容</div>
        </div>
        <div className="footer">底部</div>
      </header>
    </div>
  );
}

export default App;
