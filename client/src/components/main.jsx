import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
const Authors = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const deleteHandler = (deleteID) => {
        // console.log("delete");
        axios.delete('http://localhost:8000/api/authors/' + deleteID)
            .then(res => {
                console.log(res.data);
                console.log('SUCCESSFUL');
                setAuthors(authors.filter((author) => author._id !== deleteID));
            })
            .catch(err => console.log(err))

    }
    return(
        <div>
            <h1>My Favorite Authors</h1>
            <Link to="/authors/new">Add an Author</Link>
            <p>We have quotes by: </p>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                        {authors.map((author) => {
                            return(
                                <tr key={author._id}>
                                    <td>{author.firstName} {author.lastName}</td>
                                    <td>
                                        <button><Link to={`/authors/${author._id}/edit`}>Edit</Link></button>
                                        <button onClick={() => deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                            })}
                </tbody>
            </table>
        </div>
    )
}

export default Authors