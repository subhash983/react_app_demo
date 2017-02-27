import React from 'react';
import {Link} from 'react-router';

class AuthorList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td>
                        <Link to={"/author/" + author.id}>{author.id}</Link>
                    </td>
                    <td>
                        {author.firstName + " "}
                        {author.lastName}
                    </td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: React.PropTypes.array.isRequired
};

export default AuthorList;
