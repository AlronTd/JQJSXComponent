class HelloWorldComponent extends Component {
    constructor(rootElement) {
        super(rootElement,
            (<div>Hello world!</div>)
        )
    }
    static get selector() {
        return '.HelloWorldComponent'
    }
}
HelloWorldComponent.apply(HelloWorldComponent)
