

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
                    
                //     onClick={() => handleUserClick(user.id)} 
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  setSelectedUser(user); // Pass the entire user object to the parent
              }}
                >
                    <h5 className='d-inline m-2'> {user.id}.</h5> {user.firstName} {user.lastName} 
                </a>
            </li>
        ))}
    </ul>
);
};

const handleUserClick = (userId) => {

console.log(`User clicked: ${userId}`);
{/* <ul>
        {users.map((user) => (
          <li key={user.id}>
        
            <div>
              <h2>{user.firstName} {user.lastName}</h2>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          </li>
        ))}
      </ul> */}

};

const getUserList=()=>{
return(
<div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Destructure the user object to extract properties */}
            <div>
              <h2>{user.firstName} {user.lastName}</h2>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
);
};

  // Handle loading state
  if (loading) return <p>Loading...</p>;
  // Handle error state
  if (error) return <p>{error}</p>;

  return (
    <div>
    {UserGetName()} {/* Call the method to render the user list */}
</div>
  );


};




export default UserData;
