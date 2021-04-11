import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import Axios from 'axios';

const AddUser = () => {
    let history = useHistory();
    const [users, setUser] = useState({
       
        email: "",
        first_name: "",
        last_name:"",

    })

    function handle(e)
    {
        e.preventDefault();
        setUser({ ...users, [e.target.name]: e.target.value })
        console.log(users);
    }

    const submit=async e=>
    {
        e.preventDefault();
        await Axios.post("http://localhost:3003/data", users);
        history.push('/user-list');
    }
    return (
        <div>
            <div className="add-user"><h1>Add User</h1></div>
            <div className="container">
            <form onSubmit={(e)=>submit(e)}>
                    <label>Email</label>
                    
                    <input type="email"
                        className="form-control"
                        name="email"
                        value={users.email}
                        onChange={(e)=>handle(e)}/>
  
                    <label>first_name</label>
                    <input type="text"
                    className="form-control"
                    name="first_name"
                    value={users.first_name}
                    onChange={(e)=>handle(e)}/>
                    
                    <label>last_name</label>
                    <input type="text"
                    className="form-control"
                    name="last_name"
                    value={users.last_name}
                    onChange={(e)=>handle(e)}/>
                    <br />
                    
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Link to="/user-list"><h1 className="btn btn-warning">show list</h1></Link>
               

                </div>
        </div>
    )
}

export default AddUser
