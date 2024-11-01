

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
       const response = await axios.get('https://dummyjson.com/users');
        
       setUsers(response.data.users);
      } catch (err) {
        setError('Error fetching users');
      } finally {
       setLoading(false);
      }
    };

   fetchUsers();
  }, []);

  // Handle loading state
  if (loading) return <p>Loading...</p>;
  // Handle error state
  if (error) return <p>{error}</p>;

  return (
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

export default UserData;
