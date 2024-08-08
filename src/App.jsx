import MyReact from "./React/MyReact";

class Button extends MyReact.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="button" onClick={() => console.log("hola")}>
        Hola Mundo desde mi react
      </button>
    );
  }
}

class App extends MyReact.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Button />
      </main>
    );
  }
}

export default App;
