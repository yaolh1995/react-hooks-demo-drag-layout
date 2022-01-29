import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
/* 布局 菜单可有可无，菜单宽度可拖拽 */

function App() {
  let firstUpdate = useRef(true);

  const storage = Number(localStorage.getItem("storageWidth"));
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [toStart, setToStart] = useState(false);
  const [start, setStart] = useState(false);
  const [menuWidth, setMenuWidth] = useState(storage || 100);
  const dragPadding = 50;
  const setStorage = (name, value) => {
    const has = localStorage.getItem(name);
    if (has) {
      localStorage.removeItem(name);
      localStorage.setItem(value, name);
    } else {
      localStorage.setItem(value, name);
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      console.log(firstUpdate.current, "???");
      firstUpdate.current = false;
      return;
    }
    setMenuWidth((menuWidth) => {
      setStorage(x + 30, "storageWidth");
      console.log("执行了");
      return x + 30;
    });
  }, [x]);

  return (
    <div
      className="App"
      onMouseUp={(event) => {
        setStart(() => false);
      }}
    >
      <header className="App-header">
        <div className="header">banner</div>
        <div className="content-wrapper">
          <div
            className="menu"
            style={{
              width: menuWidth + "px",
              display: menuWidth < 40 ? "none" : "block",
              cursor: toStart ? "e-resize" : "auto",
            }}
            onClick={() => {
              setCount((count) => count + 1);
            }}
            onMouseDown={(event) => {
              if (menuWidth - event.pageX < dragPadding) {
                setStart(() => true);
              }
            }}
            onMouseMove={(event) => {
              if (menuWidth - event.pageX < dragPadding) {
                setToStart((toStart) => true);
              } else {
                setToStart((toStart) => false);
              }
              if (start) {
                console.log(event, "move");
                setX((preventX) => {
                  return event.pageX;
                });
              }
            }}
          >
            可拖拽 改变宽度 菜单 点击次数
            {count}
          </div>
          <div className="content">
            内容
            <button
              onClick={() => {
                setMenuWidth((menuWidth) => {
                  setStorage(menuWidth < 40 ? 100 : 39, "storageWidth");
                  return menuWidth < 40 ? 100 : 39;
                });
              }}
            >
              {menuWidth < 40 ? "点击显示菜单" : "隐藏菜单"}
            </button>
          </div>
        </div>
        <div className="footer">底部</div>
      </header>
    </div>
  );
}

export default App;
