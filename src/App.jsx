import MyReact from "./React/MyReact";

class App extends MyReact.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="boton" onClick={() => console.log("hola")}>
        Hola Mundo desde mi reactaaaaaaa
      </button>
    );
  }
}

export default App;
