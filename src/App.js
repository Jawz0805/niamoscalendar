import "./App.css";
// import HirePage from "./Components/HirePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          title="niamos air-table form"
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrIuwedIDcGea85v?backgroundColor=red"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1356"
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
