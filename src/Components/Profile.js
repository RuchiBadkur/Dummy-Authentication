import React, { useState, useEffect } from 'react';

const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/users/${userId}`);
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            localStorage.setItem('userDetails', JSON.stringify(userData));
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
  
      fetchUserDetails();
    }, [userId]);
  
    return (
      <div>
        <h2>Profile</h2>
        {user && (
          <div>
            <p>User ID: {user.id}</p>
            <p>Username: {user.username}</p>
            {/* Display other user details as needed */}
          </div>
        )}
      </div>
    );
  };

  export default Profile;