function createElement(type, props, ...children) {
  let flatChildren = children.flat();

  return {
    type: type,
    props: props || {},
    children: flatChildren,
  };
}

class Component {
  constructor(props) {
    this.props = props;
    this.state = this.state || {};
  }
  update() {
    this.render();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
  render() {}
}

function render(element, container) {
  if (typeof element == "string" || typeof element == "number") {
    const textNode = document.createTextNode(element);
    container.appendChild(textNode);
    return;
  }

  const dom = document.createElement(element.type);

  for (const [name, value] of Object.entries(element.props)) {
    if (name.startsWith("on")) {
      dom.addEventListener(name.slice(2).toLowerCase(), value);
    } else if (name === "className") {
      dom.className = value;
    } else {
      dom.setAttribute(name, value);
    }
  }
  element.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}
class MyReact {
  static createElement = createElement;
  static Component = Component;
  static render = render;
}

export default MyReact;
