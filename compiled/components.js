class HelloWorldComponent extends Component {
  constructor(rootElement) {
    super(rootElement, createElement("div", null, "Hello world!"));
  }

  static get selector() {
    return '.HelloWorldComponent';
  }

}

HelloWorldComponent.apply(HelloWorldComponent);

