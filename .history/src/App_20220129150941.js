import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
/* 布局 菜单可有可无，菜单宽度可拖拽 */

function App() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [start, setStart] = useState(false);
  const [menuWidth, setMenuWidth] = useState(100);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">banner</div>
        <div className="content-wrapper">
          <div
            className="menu"
            style={{ width: menuWidth + "px" }}
            onClick={() => {
              setCount((count) => count + 1);
            }}
            onMouseDown={(event) => {
              setStart(() => true);
            }}
            onMouseMove={(event) => {
              if (start) {
                console.log(event, "move");
                setX((preventX) => {
                  return event.movementX;
                });
                setMenuWidth((menuWidth) => {
                  return (menuWidth = menuWidth + x);
                });
              }
            }}
            onMouseUp={(event) => {
              setStart(() => false);
            }}
            onMouseLeave={(event) => {
              setStart(() => false);
            }}
          >
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
