import "./App.css";
import HirePage from "./Components/HirePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HirePage />

        <iframe
          title="Niamos Calendar Test"
          class="airtable-embed"
          src="https://airtable.com/embed/shrft35fsnZgezEim?backgroundColor=red&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            margin: "20px 0",
          }}
        ></iframe>
        <iframe
          title="niamos air-table form"
          class="airtable-embed"
          src="https://airtable.com/embed/shrIuwedIDcGea85v?backgroundColor=red"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            margin: "20px 0",
          }}
        ></iframe>
      </header>
    </div>
  );
}

export default App;
