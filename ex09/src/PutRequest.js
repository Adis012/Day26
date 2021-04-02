import React, {Component} from 'react';
import axios from 'axios';

class PutRequest extends Component {
    constructor(props) {
        super(props);
        this.status = { postId: null };
    }

    componentDidMount() {
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Headers': 'foobar'
        };

        axios.put('https://jsonplaceholder.typicode.com/post/1', { title:'React PUT Example' })
        .then(response => response.date)
        .then(date => this.setState({ postId: date.Id }));
    }

    render() {
        const { postId } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple PUT Request</h5>
                <div className="card-body">Post Id: { postId }</div>
            </div>
        );
    }
}

export default PutRequest;