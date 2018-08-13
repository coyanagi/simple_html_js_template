import React, { Component } from "react";
import { httpGet } from './Utils';

class DocumentListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: []
        };
    }

    componentWillReceiveProps(props) {
        if(props.categorySelection != null) {
            const self = this;
            httpGet('documents_' + props.categorySelection + '.json').then(function (res) {
                self.setState({ documents: res });
            });
        }else{
            self.setState({ documents: [] });
        }
    }

    render() {
        let documentNodes = [];
        if (this.state.documents.length > 0) {
            this.state.documents.forEach(document => {
                documentNodes.push(<div>{document.label}</div>);
            });
        } else {
            documentNodes = [<div>No document</div>];
        }

        return (
            <div>
                <h2>Documents</h2>
                <div>
                    {documentNodes}
                </div>
            </div>
        );
    }
}
export default DocumentListView;