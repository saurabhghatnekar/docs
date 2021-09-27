import * as React from "react";

export default class BackendSDKCasing extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sdk: localStorage.getItem("docusaurus.tab.backendsdk")
        };
    }
    
    componentDidMount() {
        window.addEventListener("docs-tab-change", this.setSDK );
    }
    
    componentWillUnmount() {
        window.removeEventListener("docs-tab-change", this.setSDK );
    }
    
    setSDK = () => {
        this.setState({sdk: localStorage.getItem("docusaurus.tab.backendsdk")});
    };
    
    camelToSnakeCase = (str) => { return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`) };

    camelToPascalCase = (str) => {
        if (str.length === 0) {
            return str;
        }
        return str[0].toUpperCase() + str.slice(1);
    };
    
    render() {
        if (this.state.sdk === "go") {
            return (<code>{this.camelToPascalCase(this.props.children)}</code>);
        } else {
            return (<code>{this.props.children}</code>);
        }
    }
}