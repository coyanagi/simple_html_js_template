import React, { Component } from "react";
import { httpGet } from './Utils';

class CategoryListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        httpGet('categories.json').then((res) => {
            this.setState({ categories: res });
        });
    }

    render() {
        let categoryNodes = [];
        if (this.state.categories.length > 0) {
            this.state.categories.forEach(category => {
                categoryNodes.push(<a href="javascript:void(0)" onClick={(e) => this.props.onClick(category.id)}>{category.label}</a>);
            });
        } else {
            categoryNodes = [<div>No category</div>];
        }

        return (
                <div>
                    <h2>Categories</h2>
                    <div>
                        {categoryNodes}
                    </div>
                </div>
        );
    }
}
export default CategoryListView;