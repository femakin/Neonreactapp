import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch data from localhost:3000/contacts

    console.log(process.env.REACT_APP_BASE_URL
      , 'process')

    fetch(`${process.env.REACT_APP_BASE_URL}/contacts`)
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures that this effect runs once after the component mounts

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
