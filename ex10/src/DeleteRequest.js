import React, {Component} from 'react';
import axios from 'axios';

class DeleteRequest extends Component {
    constructor(props) {
        super(props);
        this.status = { status: null };
    }

    componentDidMount() {
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Headers': 'foobar'
        };

        axios.delete('https://jsonplaceholder.typicode.com/post/1')
        .then(() => this.setState({ status: 'Delete successful' }));
    }

    render() {
        const { status } = this.status;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple DELETE Request</h5>
                <div className="card-body">Status: { status }</div>
            </div>
        );
    }
}

export default DeleteRequest;