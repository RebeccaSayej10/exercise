

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = ({ setSelectedUser }) => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
       const response = await axios.get('https://dummyjson.com/users?limit=20');
       
       setUsers(response.data.users);
      } catch (err) {
        setError('Error fetching users');
      } finally {
       setLoading(false);
      }
    };

   fetchUsers();
  }, []);


  const UserGetName = () => {
  return (
    <ul className="list-group list-group-flush">
        {users.map((user) => (
            <li key={user.id} className="list-group-item text-left p-1.5">
               
                <a className='hyperlink_names_slidebar text-decoration-none'
                    
             
                onClick={(e) => {
                  e.preventDefault(); 
                  setSelectedUser(user); 
              }}
                >
                    <h5 className='d-inline m-2'> {user.id}.</h5> {user.firstName} {user.lastName} 
                </a>
            </li>
        ))}
    </ul>
);
};





  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
    {UserGetName()} 
</div>
  );


};




export default UserData;
