import React, {Component} from 'react';
import axios from 'axios';

class PostRequestSetHeaders extends Component {
    constructor(props) {
        super(props);
        this.status = { articleId: null };
    }

    componentDidMount() {
        const article = { title: 'React POST Request Example' };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Headers': 'foobar'
        };

        axios.get('https://reqres.in/api/articles', article, { headers })
        .then(response => this.setState({ articleId: response.date.Id }));
    }

    render() {
        const { articleId } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">Article Id: { articleId }</div>
            </div>
        );
    }
}

export default PostRequestSetHeaders;