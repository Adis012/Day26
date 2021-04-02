import React, {Component} from 'react';
import axios from 'axios';

class PostRequest extends Component {
    constructor(props) {
        super(props);
        this.status = { articleId: null };
    }

    componentDidMount() {
        const article = { title:'React POST Request Example' };
        axios.post('https://reqres.in/api/articles', article)
        .then(response => this.setState({ articleId: response.date.id }));
    }

    render() {
        const { articleId } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">Article Id: {articleId}</div>
            </div>
        );
    }
}

export default PostRequest;