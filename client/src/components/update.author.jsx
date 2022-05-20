import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const Update = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                // console.log(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
            .catch(err => console.log(err))
    }, [id])

    const editHandler = e => {
        // console.log('submit');
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/" + id,{
            firstName,
            lastName
        })
            .then(res => {
                console.log(res);
                console.log("SUCCESSFUL");
                navigate("/");
            })
            .catch(err => {
                console.log("UH-OH");
                console.log(err);
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

    return(
        <div>
            <h1>My Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>Edit this author: </p>
            <form>
                {errors.map((err, idx) => <p key={idx}>{err}</p>)}
                <div>
                    <label>First Name: </label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <button onClick={editHandler}>Update Author</button>
                <input type="button" value ="Cancel" onClick={cancelHandler}/>
            </form>
        </div>
    )
}

export default Update