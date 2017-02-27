import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';
import {Link} from 'react-router';

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }
    componentDidMount() {
        this.setState({authors: AuthorApi.getAllAuthors()});
    }
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="author" className="btn btn-dafault">Add Author</Link> 
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

export default AuthorPage;
