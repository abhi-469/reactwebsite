import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
import swal from 'sweetalert';

const List = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    
    loadUsers();
  }, [])
  
  const loadUsers = async () => {
    
    const result = await axios.get("http://localhost:3003/data")
    setUser(result.data)
  }

  const deleteUser = async id => {
    
    if (window.confirm("Are you sure"))
    {
      await axios.delete(`http://localhost:3003/data/${id}`, users)
    loadUsers();
    }
  }
    return (
      <>
        <div className="container">
          <div className="search">
          <Search/>
          </div>
          
          <h1>User List<span><Link to="/add-user" className="btn btn-primary">Add user</Link></span></h1>
          <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>firstname</th>
                <th>lasttname</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {
                  
                  users.map((users, index) => (
                    
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{ users.email}</td>
                      <td>{users.first_name}</td>
                      <td>{users.last_name}</td>
                      <td><Link to={`/edit-user/${users.id}`}>edit</Link></td>
                      <td><Link onClick={()=>deleteUser(users.id)}>delete</Link></td>

                    </tr>
                    

                  ))
                }
                
              </tbody>

           
            </table>
            </div>
        </div>
           
        </>
        
    )
}

export default List
