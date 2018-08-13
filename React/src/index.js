import React from "react";
import ReactDOM from "react-dom";
import CategoryListView from "./CategoryListView";
import DocumentListView from "./DocumentListView";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: null
        };
        this.onCategoryClick = this.onCategoryClick.bind(this);
    }

    onCategoryClick(id) {
        this.setState((prevState, props) =>
            ({ selection: id })
        );
    }

    render() {
        return (
            <div className="container">
                <div className="left-nav">
                    <CategoryListView onClick={this.onCategoryClick} />
                </div>
                <div className="right-nav">
                    <DocumentListView categorySelection={this.state.selection} />
                </div>                
            </div>
        );
    };
};
ReactDOM.render(<App />, document.getElementById("main"));