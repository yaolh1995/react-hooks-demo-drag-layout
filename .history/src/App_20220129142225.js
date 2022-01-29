import logo from "./logo.svg";
import "./App.css";
/* 布局 菜单可有可无，菜单宽度可拖拽 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">banner</div>
        <div className="content-wrapper">
          <div className="content">内容</div>
          <div className="menu"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
