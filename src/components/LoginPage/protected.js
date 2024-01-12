import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem('token');

    // Make a GET request to a protected endpoint on your backend
    axios.get('http://localhost:3001/protected', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        // Handle successful response (access to protected data)
        setData(response.data.message);
      })
      .catch(error => {
        // Handle authentication errors (redirect to login page or show error message)
        console.error('Authentication failed:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='mt-5'>Protected Component</h1>
      <p>{data}</p>
    </div>
  );
};

export default ProtectedComponent;
