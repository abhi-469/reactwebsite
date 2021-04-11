import React, { useState } from 'react'
import axios from 'axios';

const LoginForm = ({ Login,error }) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details)
        const article = { email: "eve.holt@reqres.in",
            password: "cityslicka" };
            axios.post('https://reqres.in/api/login', details)
            .then(response => setDetails(details));
            Login(details);
    }
    
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                {(error != "") ? (<div className="error">{error}</div>):""}
               <div className="container">

                <div className="form-group">
                    <label htmlFor="email">email:</label>
                    <input type="email"
                        className="form-control"
                        name="email"
                            id="email"
                            placeholder="email: eve.holt@reqres.in"
                        onChange={e => setDetails({ ...details, email: e.target.value })}
                        value={details.email} />
                        
                </div>

                <div className="form-group">
                    <label htmlFor="password">password</label>
                    
                    <input type="text" name="password"
                        id="password"
                            className="form-control"
                            placeholder=" password: cityslicka"
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                        value={details.password} /><br/>
                        
                    <button type="submit" class="btn btn-success">submit</button>
                    </div>
                    </div>
            </form>
                
        </div>
    )
}

export default LoginForm
