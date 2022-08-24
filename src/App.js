import logo from "./logo.svg";
import "./App.css";
import { useThemeContext } from "./design-patterns/provider/theme-context/themeContext";

function App() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: theme.background }}
      >
        <button onClick={toggleTheme}>Toggle Theme</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: theme.color }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          style={{ color: theme.color }}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
