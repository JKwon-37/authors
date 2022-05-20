import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        // console.log('submit');
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(err.response.data.errors);
                const errArr = [];
                for (const key of Object.keys(errorResponse)){
                    errArr.push(errorResponse[key].message);
                }
                setErrors(errArr);
            })
    }

    const cancelHandler = (e) => {
        navigate('/');
        
    }
    return (
        <div>
            <h1>My Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <form>
                <div>
                    {errors.map((err, idx) => <p key={idx}>{err}</p>)}
                    <label>First Name: </label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <button onClick={submitHandler}>Add an Author</button>
                <input type="button" value ="Cancel" onClick={cancelHandler}/>
            </form>
        </div>
    )
}

export default Create