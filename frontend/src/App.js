import UserData from './UserData';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
function App() {

  const [selectedUser, setSelectedUser] = useState(null); 

  return (
      <div className="d-flex m-5 ">
          <div className='d-block slideBar mt-5'>
            <h4 className='text-center mt-3 header4'>
              User Names
            </h4>
              
            <UserData setSelectedUser={setSelectedUser} />
          
          </div>

          {/* Main Content */}
          <div className="flex-grow-1 p-3 ">
              <h1 className='header1'>Main Content Area</h1>
              <p>This is where your main content will go.</p>

            {selectedUser && ( // Conditionally render user details if a user is selected
                <div className="user-details mt-4">
                    <h3>User Details</h3>
                    <p><strong>ID:</strong> {selectedUser.id}</p>
                    <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                    <p><strong>Age:</strong> {selectedUser.age}</p>
                    <p><strong>Gender:</strong> {selectedUser.gender}</p>
                    <p><strong>Phone:</strong> {selectedUser.phone}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    {/* Add more user details as needed */}
                </div>
            )}
        </div>

          

          </div>
  );
};
export default App;
