import React, { useState, useEffect } from 'react';


function UserProfile() {
    // State to store user profile information
    const [user, setUser] = useState(null);
  
    // Fetch user profile data from API
    useEffect(() => {
      fetchUserProfile(); // Fetch user profile on component mount
    }, []);
  
    // Function to fetch user profile from API
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('api/user/profile');
        const data = await response.json();
        setUser(data); // Set fetched user profile to state
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
  
    return (
      <div>
        <h2>User Profile</h2>
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Shipping Address: {user.shippingAddress}</p>
          </div>
        )}
      </div>
    );
  }
export default UserProfile;  